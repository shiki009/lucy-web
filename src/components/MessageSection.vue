<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const sectionRef = ref(null)
const quoteRef = ref(null)
const signatureRef = ref(null)

onMounted(() => {
  gsap.fromTo(quoteRef.value,
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 70%',
      }
    }
  )
  
  gsap.fromTo(signatureRef.value,
    { opacity: 0, scale: 0.8, rotate: -5 },
    {
      opacity: 1,
      scale: 1,
      rotate: 0,
      duration: 0.8,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 60%',
      }
    }
  )
})
</script>

<template>
  <section ref="sectionRef" class="message-section">
    <div class="message-container">
      <div class="message-header">
        <div class="paw-print">
          <svg viewBox="0 0 100 100" fill="currentColor">
            <ellipse cx="50" cy="65" rx="22" ry="18"/>
            <ellipse cx="25" cy="45" rx="12" ry="14"/>
            <ellipse cx="75" cy="45" rx="12" ry="14"/>
            <ellipse cx="35" cy="25" rx="10" ry="12"/>
            <ellipse cx="65" cy="25" rx="10" ry="12"/>
          </svg>
        </div>
        <span class="message-label">Message from Lucy</span>
      </div>
      
      <blockquote ref="quoteRef" class="message-quote">
        <span class="highlight">Every day</span> is a new adventure waiting to happen. 
        From morning stretches to evening cuddles, I believe in 
        <span class="highlight">living fully</span> — with my tail wagging 
        and my heart open. Life is about the 
        <span class="highlight">small moments</span>: a good treat, 
        a sunny spot, and the people who love you.
      </blockquote>
      
      <div ref="signatureRef" class="signature-area">
        <svg class="paw-signature" viewBox="0 0 200 80" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <!-- Stylized "Lucy" written with paw-like curves -->
          <path d="M20 60 Q30 20 40 40 Q50 60 50 60" />
          <path d="M60 35 Q60 60 75 60 Q90 60 90 45" />
          <path d="M100 35 Q85 45 100 60 Q115 45 100 35" />
          <path d="M120 35 L140 60 M140 35 L160 60" />
          <!-- Small paw at the end -->
          <circle cx="175" cy="55" r="6" fill="currentColor" />
          <circle cx="165" cy="45" r="4" fill="currentColor" />
          <circle cx="175" cy="40" r="4" fill="currentColor" />
          <circle cx="185" cy="45" r="4" fill="currentColor" />
        </svg>
        <span class="signature-date">Since December 13, 2020</span>
      </div>
    </div>
    
    <div class="decorative-elements">
      <div class="deco-line line-1"></div>
      <div class="deco-line line-2"></div>
    </div>
  </section>
</template>

<style scoped>
.message-section {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-secondary);
  padding: 6rem 2rem;
  position: relative;
  overflow: hidden;
}

.message-container {
  max-width: 800px;
  text-align: center;
}

.message-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
}

.paw-print {
  width: 50px;
  height: 50px;
  color: var(--color-accent);
  animation: pawBounce 2s ease-in-out infinite;
}

@keyframes pawBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

.message-label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-accent);
}

.message-quote {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 400;
  line-height: 1.5;
  color: var(--color-primary);
  margin-bottom: 3rem;
}

.message-quote .highlight {
  color: var(--color-accent);
  font-weight: 600;
  font-style: italic;
}

.signature-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.paw-signature {
  width: 200px;
  height: 80px;
  color: var(--color-accent);
  stroke: var(--color-accent);
}

.signature-date {
  font-size: 0.875rem;
  color: var(--color-text-light);
  font-style: italic;
}

.decorative-elements {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.deco-line {
  position: absolute;
  background: linear-gradient(90deg, transparent, var(--color-accent), transparent);
  opacity: 0.1;
}

.line-1 {
  width: 300px;
  height: 2px;
  top: 20%;
  left: -100px;
  transform: rotate(-15deg);
}

.line-2 {
  width: 400px;
  height: 2px;
  bottom: 30%;
  right: -150px;
  transform: rotate(10deg);
}

@media (max-width: 768px) {
  .message-section {
    padding: 4rem 1.5rem;
  }
  
  .message-quote {
    font-size: 1.25rem;
  }
}
</style>
