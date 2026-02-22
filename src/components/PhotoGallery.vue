<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let scrollTriggerInstances = []

import lucyBirthday from '@/assets/images/lucy-birthday.png'
import lucyPuppyRug from '@/assets/images/lucy-puppy-rug.png'
import lucyPuppySitting from '@/assets/images/lucy-puppy-sitting.png'
import lucyBbq from '@/assets/images/lucy-bbq.png'
import lucyBalcony from '@/assets/images/lucy-balcony.png'
import lucyAutumnLeaves from '@/assets/images/lucy-autumn-leaves.png'
import lucySharkToy from '@/assets/images/lucy-shark-toy.png'
import lucyBoardGame from '@/assets/images/lucy-board-game.png'
import lucyWindow from '@/assets/images/lucy-window.png'
import lucyTvNight from '@/assets/images/lucy-tv-night.png'
import lucyBlanketBurrito from '@/assets/images/lucy-blanket-burrito.png'
import lucyPuppyBall from '@/assets/images/lucy-puppy-ball.png'

const photos = [
  {
    id: 1,
    src: lucyPuppyRug,
    title: 'First Days Home',
    location: 'Home',
    date: 'December 2020',
    description: 'The tiniest floof on the softest rug'
  },
  {
    id: 2,
    src: lucyPuppyBall,
    title: 'First Toy Love',
    location: 'Living Room',
    date: 'December 2020',
    description: 'A puppy and her first tennis ball'
  },
  {
    id: 3,
    src: lucyPuppySitting,
    title: 'Good Girl Training',
    location: 'Living Room',
    date: 'January 2021',
    description: 'Already mastering the sit command'
  },
  {
    id: 4,
    src: lucyBlanketBurrito,
    title: 'Burrito Mode',
    location: 'Couch',
    date: 'Winter 2021',
    description: 'Maximum cozy achieved'
  },
  {
    id: 5,
    src: lucySharkToy,
    title: 'Shark Hunter',
    location: 'Home',
    date: 'Summer 2022',
    description: 'Protecting the family from sharks'
  },
  {
    id: 6,
    src: lucyBoardGame,
    title: 'Game Night Expert',
    location: 'Kitchen',
    date: 'Winter 2023',
    description: 'Strategic mastermind at work'
  },
  {
    id: 7,
    src: lucyWindow,
    title: 'City Watcher',
    location: 'Balcony',
    date: 'Spring 2023',
    description: 'Observing the world below'
  },
  {
    id: 8,
    src: lucyAutumnLeaves,
    title: 'Autumn Adventures',
    location: 'Park',
    date: 'Autumn 2024',
    description: 'Nature girl in her element'
  },
  {
    id: 9,
    src: lucyTvNight,
    title: 'Movie Night',
    location: 'Living Room',
    date: 'Summer 2024',
    description: 'Ready for treats and entertainment'
  },
  {
    id: 10,
    src: lucyBbq,
    title: 'BBQ Supervisor',
    location: 'Garden',
    date: 'Summer 2024',
    description: 'Quality control at its finest'
  },
  {
    id: 11,
    src: lucyBalcony,
    title: 'Happy Days',
    location: 'Balcony',
    date: 'Summer 2024',
    description: 'The happiest smile'
  },
  {
    id: 12,
    src: lucyBirthday,
    title: 'Birthday Celebration',
    location: 'Home',
    date: 'December 2024',
    description: 'Five years of being the best girl'
  }
]

const sectionRef = ref(null)
const trackRef = ref(null)
const headerRef = ref(null)

onMounted(() => {
  // Header animation
  const headerTrigger = gsap.fromTo(headerRef.value,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 80%',
      }
    }
  )
  if (headerTrigger.scrollTrigger) scrollTriggerInstances.push(headerTrigger.scrollTrigger)
  
  // Horizontal scroll
  const track = trackRef.value
  const totalWidth = track.scrollWidth - window.innerWidth
  
  const horizontalScroll = gsap.to(track, {
    x: -totalWidth,
    ease: 'none',
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top top',
      end: () => `+=${totalWidth}`,
      pin: true,
      scrub: 1,
      anticipatePin: 1,
    }
  })
  if (horizontalScroll.scrollTrigger) scrollTriggerInstances.push(horizontalScroll.scrollTrigger)
})

onUnmounted(() => {
  // Clean up all ScrollTrigger instances created by this component
  scrollTriggerInstances.forEach(trigger => trigger.kill())
  scrollTriggerInstances = []
})
</script>

<template>
  <section ref="sectionRef" class="gallery-section">
    <div ref="headerRef" class="gallery-header">
      <span class="gallery-label">Through the Years</span>
      <h2 class="gallery-title">Lucy's <span class="accent">Journey</span></h2>
      <p class="gallery-subtitle">From tiny puppy to beloved companion</p>
    </div>
    
    <div class="gallery-wrapper">
      <div ref="trackRef" class="gallery-track">
        <div 
          v-for="photo in photos" 
          :key="photo.id" 
          class="photo-card"
        >
          <div class="photo-image-wrapper">
            <img :src="photo.src" :alt="photo.title" class="photo-image" />
            <div class="photo-overlay">
              <span class="photo-description">{{ photo.description }}</span>
            </div>
          </div>
          <div class="photo-info">
            <div class="photo-meta">
              <span class="photo-location">{{ photo.location }}</span>
              <span class="photo-date">{{ photo.date }}</span>
            </div>
            <h3 class="photo-title">{{ photo.title }}</h3>
          </div>
        </div>
        
        <!-- Spacer at the end -->
        <div class="gallery-end">
          <div class="end-content">
            <span class="end-paw">🐾</span>
            <span class="end-text">More memories to come...</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="scroll-hint">
      <span>Keep scrolling</span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    </div>
  </section>
</template>

<style scoped>
.gallery-section {
  min-height: 100vh;
  background-color: var(--color-primary);
  position: relative;
  overflow: hidden;
}

.gallery-header {
  position: absolute;
  top: 3rem;
  left: 3rem;
  z-index: 10;
}

.gallery-label {
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 0.5rem;
}

.gallery-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: var(--color-secondary);
  margin-bottom: 0.5rem;
}

.gallery-title .accent {
  color: var(--color-accent);
}

.gallery-subtitle {
  font-size: 1rem;
  color: rgba(245, 240, 232, 0.6);
}

.gallery-wrapper {
  height: 100vh;
  display: flex;
  align-items: center;
  padding-left: 3rem;
}

.gallery-track {
  display: flex;
  gap: 3rem;
  padding: 8rem 3rem 3rem calc(100vw - 500px);
  will-change: transform;
}

.photo-card {
  flex-shrink: 0;
  width: 400px;
  transition: transform 0.4s var(--transition-smooth);
}

.photo-card:hover {
  transform: translateY(-10px);
}

.photo-image-wrapper {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  aspect-ratio: 3/4;
  background-color: rgba(255, 255, 255, 0.05);
}

.photo-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s var(--transition-smooth);
}

.photo-card:hover .photo-image {
  transform: scale(1.05);
}

.photo-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(26, 26, 26, 0.9), transparent 50%);
  display: flex;
  align-items: flex-end;
  padding: 1.5rem;
  opacity: 0;
  transition: opacity 0.4s var(--transition-smooth);
}

.photo-card:hover .photo-overlay {
  opacity: 1;
}

.photo-description {
  color: var(--color-secondary);
  font-size: 0.875rem;
  font-style: italic;
}

.photo-info {
  padding: 1.5rem 0.5rem;
}

.photo-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.photo-location,
.photo-date {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-accent);
}

.photo-title {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--color-secondary);
  font-weight: 500;
}

.gallery-end {
  flex-shrink: 0;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.end-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: rgba(245, 240, 232, 0.5);
}

.end-paw {
  font-size: 3rem;
  animation: pawWave 1s ease-in-out infinite;
}

@keyframes pawWave {
  0%, 100% { transform: rotate(-5deg); }
  50% { transform: rotate(5deg); }
}

.end-text {
  font-size: 1rem;
  font-style: italic;
}

.scroll-hint {
  position: absolute;
  bottom: 2rem;
  right: 3rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(245, 240, 232, 0.4);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  animation: hintPulse 2s ease-in-out infinite;
}

@keyframes hintPulse {
  0%, 100% { opacity: 0.4; transform: translateX(0); }
  50% { opacity: 0.8; transform: translateX(5px); }
}

@media (max-width: 768px) {
  .gallery-header {
    top: 2rem;
    left: 1.5rem;
  }
  
  .gallery-track {
    gap: 2rem;
    padding: 7rem 1.5rem 2rem 1.5rem;
  }
  
  .photo-card {
    width: 300px;
  }
  
  .scroll-hint {
    right: 1.5rem;
    bottom: 1.5rem;
  }
}
</style>
