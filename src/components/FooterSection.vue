<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { useI18n } from '@/i18n/useI18n.js'
import { useScrollTrigger } from '@/composables/useScrollTrigger.js'

const { t } = useI18n()
const { track } = useScrollTrigger()

const footerRef = ref(null)
const taglineRef = ref(null)
const pawsRef = ref(null)

onMounted(() => {
  track(gsap.fromTo(taglineRef.value,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: footerRef.value,
        start: 'top 80%',
      }
    }
  ))

  const paws = pawsRef.value.querySelectorAll('.paw')
  paws.forEach((paw, i) => {
    track(gsap.fromTo(paw,
      { opacity: 0, scale: 0, rotate: -20 },
      {
        opacity: 0.1,
        scale: 1,
        rotate: 0,
        duration: 0.5,
        delay: i * 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: footerRef.value,
          start: 'top 80%',
        }
      }
    ))
  })
})
</script>

<template>
  <footer ref="footerRef" class="footer">
    <div ref="pawsRef" class="paw-decorations" aria-hidden="true">
      <div class="paw paw-1">🐾</div>
      <div class="paw paw-2">🐾</div>
      <div class="paw paw-3">🐾</div>
      <div class="paw paw-4">🐾</div>
      <div class="paw paw-5">🐾</div>
      <div class="paw paw-6">🐾</div>
    </div>

    <div class="footer-content">
      <div ref="taglineRef" class="tagline-section">
        <h2 class="tagline">
          {{ t.footer.taglineLine1 }}<br/>
          <span class="accent">{{ t.footer.taglineAccent1 }}</span><br/>
          <template v-if="t.footer.taglineEnd">{{ t.footer.taglineEnd }} </template><span class="accent">{{ t.footer.taglineAccent2 }}</span>.
        </h2>
      </div>

      <div class="footer-info">
        <div class="info-block">
          <h3 class="info-title">{{ t.footer.lucyTitle }}</h3>
          <p class="info-text">
            <template v-for="(line, i) in t.footer.lucyInfo.split('\n')" :key="i">{{ line }}<br v-if="i < t.footer.lucyInfo.split('\n').length - 1" /></template>
          </p>
        </div>

        <div class="info-block">
          <h3 class="info-title">{{ t.footer.factsTitle }}</h3>
          <ul class="facts-list">
            <li v-for="(fact, i) in t.footer.facts" :key="i">{{ fact }}</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="bottom-content">
        <div class="signature-logo">
          <svg class="paw-logo" viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
            <ellipse cx="50" cy="65" rx="22" ry="18"/>
            <ellipse cx="25" cy="45" rx="12" ry="14"/>
            <ellipse cx="75" cy="45" rx="12" ry="14"/>
            <ellipse cx="35" cy="25" rx="10" ry="12"/>
            <ellipse cx="65" cy="25" rx="10" ry="12"/>
          </svg>
          <span class="logo-text">{{ t.footer.logoText }}</span>
        </div>

        <p class="copyright">{{ t.footer.copyright }}</p>

        <p class="made-with">{{ t.footer.madeWith }}</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-primary);
  color: var(--color-secondary);
  position: relative;
  overflow: hidden;
}

.paw-decorations {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.paw {
  position: absolute;
  font-size: 4rem;
  opacity: 0.1;
}

.paw-1 { top: 10%; left: 5%; transform: rotate(-15deg); }
.paw-2 { top: 30%; right: 10%; transform: rotate(20deg); }
.paw-3 { top: 60%; left: 15%; transform: rotate(-30deg); }
.paw-4 { bottom: 20%; right: 5%; transform: rotate(10deg); }
.paw-5 { top: 15%; left: 40%; transform: rotate(5deg); font-size: 2rem; }
.paw-6 { bottom: 40%; left: 60%; transform: rotate(-10deg); font-size: 3rem; }

.footer-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  padding: 6rem 3rem 4rem;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.tagline {
  font-family: var(--font-display);
  font-size: clamp(3rem, 6vw, 5rem);
  line-height: 1.1;
  font-weight: 600;
}

.tagline .accent {
  color: var(--color-accent);
}

.footer-info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  align-self: center;
}

.info-title {
  font-family: var(--font-display);
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--color-accent);
}

.info-text {
  font-size: 0.9rem;
  line-height: 1.8;
  opacity: 0.8;
}

.facts-list {
  list-style: none;
  font-size: 0.9rem;
  line-height: 2;
  opacity: 0.8;
}

.facts-list li::before {
  content: '• ';
  color: var(--color-accent);
}

.footer-bottom {
  border-top: 1px solid rgba(245, 240, 232, 0.1);
  padding: 2rem 3rem;
}

.bottom-content {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.signature-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.paw-logo {
  width: 30px;
  height: 30px;
  color: var(--color-accent);
}

.logo-text {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 600;
}

.copyright,
.made-with {
  font-size: 0.75rem;
  opacity: 0.6;
}

@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 3rem;
    padding: 4rem 2rem 3rem;
  }

  .footer-info {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .footer-info {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .bottom-content {
    flex-direction: column;
    text-align: center;
  }

  .tagline {
    font-size: 2.5rem;
  }
}
</style>
