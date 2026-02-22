<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useI18n } from './i18n/useI18n.js'

import HeroSection from './components/HeroSection.vue'
import MessageSection from './components/MessageSection.vue'
import PhotoGallery from './components/PhotoGallery.vue'
import LifeSections from './components/LifeSections.vue'
import ToysHallOfFame from './components/ToysHallOfFame.vue'
import FooterSection from './components/FooterSection.vue'
import MusicPlayer from './components/MusicPlayer.vue'

gsap.registerPlugin(ScrollTrigger)

const { currentLang, t, toggleLang } = useI18n()
</script>

<template>
  <div class="app">
    <!-- Skip Navigation -->
    <a href="#main-content" class="skip-nav">{{ t.app.skipNav }}</a>

    <!-- Language Switcher -->
    <button class="lang-switcher" @click="toggleLang" :title="currentLang === 'en' ? t.app.switchToRu : t.app.switchToEn">
      <span class="lang-flag" aria-hidden="true">{{ currentLang === 'en' ? '🇷🇺' : '🇬🇧' }}</span>
      <span class="lang-text">{{ currentLang === 'en' ? 'RU' : 'EN' }}</span>
    </button>

    <!-- Music Player -->
    <MusicPlayer />

    <!-- Main Content -->
    <main id="main-content" :key="currentLang">
      <HeroSection />
      <MessageSection />
      <PhotoGallery />
      <LifeSections />
      <ToysHallOfFame />
      <FooterSection />
    </main>
  </div>
</template>

<style>
.app {
  min-height: 100vh;
}

.skip-nav {
  position: absolute;
  top: -100%;
  left: 1rem;
  z-index: 9999;
  padding: 0.75rem 1.5rem;
  background: var(--color-accent);
  color: var(--color-primary);
  font-family: var(--font-body);
  font-weight: 600;
  border-radius: 0 0 8px 8px;
  text-decoration: none;
  transition: top 0.2s;
}

.skip-nav:focus {
  top: 0;
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
