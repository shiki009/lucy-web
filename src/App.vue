<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// English components
import HeroSectionEn from './components/HeroSection.vue'
import MessageSectionEn from './components/MessageSection.vue'
import PhotoGalleryEn from './components/PhotoGallery.vue'
import LifeSectionsEn from './components/LifeSections.vue'
import ToysHallOfFameEn from './components/ToysHallOfFame.vue'
import FooterSectionEn from './components/FooterSection.vue'

// Russian components
import HeroSectionRu from './components/ru/HeroSection.vue'
import MessageSectionRu from './components/ru/MessageSection.vue'
import PhotoGalleryRu from './components/ru/PhotoGallery.vue'
import LifeSectionsRu from './components/ru/LifeSections.vue'
import ToysHallOfFameRu from './components/ru/ToysHallOfFame.vue'
import FooterSectionRu from './components/ru/FooterSection.vue'

// Music player
import MusicPlayer from './components/MusicPlayer.vue'

gsap.registerPlugin(ScrollTrigger)

const currentLang = ref(localStorage.getItem('lucy-lang') || 'en')

const toggleLang = () => {
  const newLang = currentLang.value === 'en' ? 'ru' : 'en'
  localStorage.setItem('lucy-lang', newLang)
  // Reload page to ensure clean ScrollTrigger initialization
  window.location.reload()
}

onMounted(() => {
  const revealElements = document.querySelectorAll('.reveal')
  
  revealElements.forEach((el) => {
    gsap.fromTo(el, 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    )
  })
})
</script>

<template>
  <div class="app">
    <!-- Language Switcher -->
    <button class="lang-switcher" @click="toggleLang" :title="currentLang === 'en' ? 'Switch to Russian' : 'Переключить на English'">
      <span class="lang-flag">{{ currentLang === 'en' ? '🇷🇺' : '🇬🇧' }}</span>
      <span class="lang-text">{{ currentLang === 'en' ? 'RU' : 'EN' }}</span>
    </button>
    
    <!-- Music Player -->
    <MusicPlayer />
    
    <!-- English Version -->
    <template v-if="currentLang === 'en'">
      <HeroSectionEn />
      <MessageSectionEn />
      <PhotoGalleryEn />
      <LifeSectionsEn />
      <ToysHallOfFameEn />
      <FooterSectionEn />
    </template>
    
    <!-- Russian Version -->
    <template v-else>
      <HeroSectionRu />
      <MessageSectionRu />
      <PhotoGalleryRu />
      <LifeSectionsRu />
      <ToysHallOfFameRu />
      <FooterSectionRu />
    </template>
  </div>
</template>

<style>
.app {
  min-height: 100vh;
}

.lang-switcher {
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: rgba(26, 26, 26, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 165, 116, 0.3);
  border-radius: 50px;
  color: var(--color-secondary);
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s var(--transition-smooth);
}

.lang-switcher:hover {
  background: rgba(212, 165, 116, 0.9);
  color: var(--color-primary);
  transform: scale(1.05);
}

.lang-flag {
  font-size: 1.25rem;
}

.lang-text {
  letter-spacing: 0.05em;
}

@media (max-width: 768px) {
  .lang-switcher {
    top: 1rem;
    right: 1rem;
    padding: 0.5rem 1rem;
  }
}
</style>
