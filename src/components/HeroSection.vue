<script setup>
import { ref, computed, onMounted } from 'vue'
import { gsap } from 'gsap'
import { useI18n } from '@/i18n/useI18n.js'
import { useScrollTrigger } from '@/composables/useScrollTrigger.js'

const { t } = useI18n()
const { track } = useScrollTrigger()

const birthDate = new Date('2020-12-13')
const now = new Date()

const age = computed(() => {
  let years = now.getFullYear() - birthDate.getFullYear()
  const monthDiff = now.getMonth() - birthDate.getMonth()
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birthDate.getDate())) {
    years--
  }
  return years
})

const heroRef = ref(null)
const titleRef = ref(null)
const subtitleRef = ref(null)
const ageRef = ref(null)
const scrollIndicatorRef = ref(null)

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  tl.fromTo(titleRef.value,
    { opacity: 0, y: 100, scale: 0.9 },
    { opacity: 1, y: 0, scale: 1, duration: 1.2 }
  )
  .fromTo(subtitleRef.value,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8 },
    '-=0.6'
  )
  .fromTo(ageRef.value,
    { opacity: 0, scale: 0.5 },
    { opacity: 1, scale: 1, duration: 0.6 },
    '-=0.4'
  )
  .fromTo(scrollIndicatorRef.value,
    { opacity: 0, y: -20 },
    { opacity: 1, y: 0, duration: 0.6 },
    '-=0.2'
  )

  track(gsap.to(titleRef.value, {
    yPercent: -30,
    scrollTrigger: {
      trigger: heroRef.value,
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  }))
})
</script>

<template>
  <section ref="heroRef" class="hero">
    <div class="hero-bg" aria-hidden="true">
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="gradient-orb orb-3"></div>
    </div>

    <div class="hero-content">
      <div class="hero-badge">
        <span class="paw-icon">🐾</span>
        <span>{{ t.hero.badge }}</span>
      </div>

      <h1 ref="titleRef" class="hero-title">{{ t.hero.title }}</h1>

      <p ref="subtitleRef" class="hero-subtitle">
        {{ t.hero.subtitle }} <span class="accent">{{ t.hero.subtitleAccent }}</span>
      </p>

      <div ref="ageRef" class="age-badge">
        <span class="age-number">{{ age }}</span>
        <span class="age-label">{{ t.hero.ageLabel }}</span>
      </div>
    </div>

    <div ref="scrollIndicatorRef" class="scroll-indicator" aria-hidden="true">
      <span>{{ t.hero.scrollText }}</span>
      <div class="scroll-line"></div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-color: var(--color-primary);
}

.hero-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.5;
}

.orb-1 {
  width: 600px;
  height: 600px;
  background: linear-gradient(135deg, var(--color-accent), var(--color-highlight));
  top: -200px;
  right: -100px;
  animation: float 15s ease-in-out infinite;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, var(--color-highlight), #8B7355);
  bottom: -100px;
  left: -100px;
  animation: float 12s ease-in-out infinite reverse;
}

.orb-3 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #C4A77D, var(--color-accent));
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: float 10s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.05);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.95);
  }
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 2rem;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.25rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  color: var(--color-secondary);
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 2rem;
}

.paw-icon {
  font-size: 1rem;
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(5rem, 20vw, 15rem);
  font-weight: 700;
  color: var(--color-secondary);
  letter-spacing: -0.02em;
  line-height: 0.9;
  margin-bottom: 1.5rem;
  text-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.5rem);
  color: rgba(245, 240, 232, 0.8);
  font-weight: 300;
  letter-spacing: 0.05em;
  margin-bottom: 3rem;
}

.hero-subtitle .accent {
  color: var(--color-accent);
  font-weight: 500;
}

.age-badge {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 3rem;
  background: linear-gradient(135deg, var(--color-accent), var(--color-highlight));
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(212, 165, 116, 0.3);
}

.age-number {
  font-family: var(--font-display);
  font-size: 4rem;
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1;
}

.age-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.8;
}

.scroll-indicator {
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: rgba(245, 240, 232, 0.6);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.scroll-line {
  width: 1px;
  height: 60px;
  background: linear-gradient(to bottom, var(--color-accent), transparent);
  animation: scrollPulse 2s ease-in-out infinite;
}

@keyframes scrollPulse {
  0%, 100% {
    opacity: 1;
    transform: scaleY(1);
  }
  50% {
    opacity: 0.5;
    transform: scaleY(0.8);
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: clamp(4rem, 25vw, 8rem);
  }

  .age-badge {
    padding: 1rem 2rem;
  }

  .age-number {
    font-size: 3rem;
  }
}
</style>
