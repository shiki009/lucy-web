<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const footerRef = ref(null)
const taglineRef = ref(null)
const pawsRef = ref(null)

onMounted(() => {
  gsap.fromTo(taglineRef.value,
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
  )
  
  // Animated paw prints
  const paws = pawsRef.value.querySelectorAll('.paw')
  paws.forEach((paw, i) => {
    gsap.fromTo(paw,
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
    )
  })
})
</script>

<template>
  <footer ref="footerRef" class="footer">
    <div ref="pawsRef" class="paw-decorations">
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
          Always<br/>
          <span class="accent">bringing</span><br/>
          the <span class="accent">joy</span>.
        </h2>
      </div>
      
      <div class="footer-info">
        <div class="info-block">
          <h3 class="info-title">Lucy</h3>
          <p class="info-text">
            Black Labrador Retriever<br/>
            Born December 13, 2020<br/>
            Professional treat tester
          </p>
        </div>
        
        <div class="info-block">
          <h3 class="info-title">Quick Facts</h3>
          <ul class="facts-list">
            <li>Favorite food: Everything</li>
            <li>Best skill: Being adorable</li>
            <li>Hobby: Napping professionally</li>
          </ul>
        </div>
        
        <div class="info-block">
          <h3 class="info-title">Follow Lucy</h3>
          <div class="social-links">
            <a href="#" class="social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="TikTok">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="bottom-content">
        <div class="signature-logo">
          <svg class="paw-logo" viewBox="0 0 100 100" fill="currentColor">
            <ellipse cx="50" cy="65" rx="22" ry="18"/>
            <ellipse cx="25" cy="45" rx="12" ry="14"/>
            <ellipse cx="75" cy="45" rx="12" ry="14"/>
            <ellipse cx="35" cy="25" rx="10" ry="12"/>
            <ellipse cx="65" cy="25" rx="10" ry="12"/>
          </svg>
          <span class="logo-text">Lucy</span>
        </div>
        
        <p class="copyright">
          © 2026 Lucy the Labrador. All tail wags reserved.
        </p>
        
        <p class="made-with">
          Made with 🐾 and lots of treats
        </p>
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
  grid-template-columns: repeat(3, 1fr);
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

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid rgba(245, 240, 232, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-secondary);
  transition: all 0.3s var(--transition-smooth);
}

.social-link:hover {
  background: var(--color-accent);
  border-color: var(--color-accent);
  color: var(--color-primary);
  transform: translateY(-3px);
}

.social-link svg {
  width: 20px;
  height: 20px;
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
