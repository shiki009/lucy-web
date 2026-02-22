<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const toys = [
  {
    id: 1,
    name: 'First Bear',
    year: '2020',
    emoji: '🧸',
    color: '#DEB887',
    description: 'The very first toy, forever cherished'
  },
  {
    id: 2,
    name: 'Tennis Balls',
    year: 'Classic',
    emoji: '🎾',
    color: '#9ACD32',
    description: 'The eternal favorite, always ready to fetch'
  },
  {
    id: 3,
    name: 'Panda Plush',
    year: '2021',
    emoji: '🐼',
    color: '#2D2D2D',
    description: 'Black and white cuddle buddy'
  },
  {
    id: 4,
    name: 'Squeaky Pig',
    year: '2022',
    emoji: '🐷',
    color: '#FFB6C1',
    description: 'Oinks with every bite, never gets old'
  },
  {
    id: 5,
    name: 'Shark Friend',
    year: '2023',
    emoji: '🦈',
    color: '#4A6FA5',
    description: 'The fierce protector of the living room'
  },
  {
    id: 6,
    name: 'Colorful Balls',
    year: 'Always',
    emoji: '⚽',
    color: '#9370DB',
    description: 'Purple, green, any color will do'
  },
  {
    id: 7,
    name: 'Plaid Bed',
    year: '2022',
    emoji: '🛏️',
    color: '#D2691E',
    description: 'The throne for royal naps'
  },
  {
    id: 8,
    name: 'Blanket Burrito',
    year: 'Cozy Time',
    emoji: '🌯',
    color: '#F5F5DC',
    description: 'Maximum warmth and comfort mode'
  }
]

const sectionRef = ref(null)
const headerRef = ref(null)
const carouselRef = ref(null)
const activeIndex = ref(0)

const scrollCarousel = (direction) => {
  const newIndex = activeIndex.value + direction
  if (newIndex >= 0 && newIndex < toys.length - 3) {
    activeIndex.value = newIndex
  }
}

onMounted(() => {
  gsap.fromTo(headerRef.value,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 70%',
      }
    }
  )
  
  gsap.fromTo(carouselRef.value,
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 60%',
      }
    }
  )
})
</script>

<template>
  <section ref="sectionRef" class="toys-section">
    <div class="toys-container">
      <div ref="headerRef" class="toys-header">
        <div class="header-content">
          <span class="toys-label">Collection</span>
          <h2 class="toys-title">
            Toys<br/>
            <span class="accent">Hall of Fame</span>
          </h2>
          <p class="toys-description">
            From beloved tennis balls to comfy beds, these are the treasured 
            items that have brought joy to Lucy's life.
          </p>
        </div>
        
        <div class="carousel-controls">
          <button 
            class="control-btn" 
            @click="scrollCarousel(-1)"
            :disabled="activeIndex === 0"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <button 
            class="control-btn"
            @click="scrollCarousel(1)"
            :disabled="activeIndex >= toys.length - 4"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
      
      <div ref="carouselRef" class="toys-carousel">
        <div 
          class="carousel-track"
          :style="{ transform: `translateX(-${activeIndex * 280}px)` }"
        >
          <div 
            v-for="toy in toys" 
            :key="toy.id" 
            class="toy-card"
          >
            <div class="toy-visual" :style="{ background: `linear-gradient(135deg, ${toy.color}33, ${toy.color}11)` }">
              <span class="toy-emoji">{{ toy.emoji }}</span>
              <div class="toy-glow" :style="{ background: toy.color }"></div>
            </div>
            <div class="toy-info">
              <span class="toy-year">{{ toy.year }}</span>
              <h3 class="toy-name">{{ toy.name }}</h3>
              <p class="toy-description">{{ toy.description }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="carousel-dots">
        <button 
          v-for="(_, i) in toys.length - 3" 
          :key="i"
          class="dot"
          :class="{ active: i === activeIndex }"
          @click="activeIndex = i"
        ></button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.toys-section {
  padding: 8rem 0;
  background-color: var(--color-secondary);
  overflow: hidden;
}

.toys-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 3rem;
}

.toys-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 4rem;
}

.header-content {
  max-width: 500px;
}

.toys-label {
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 1rem;
}

.toys-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1;
  margin-bottom: 1rem;
}

.toys-title .accent {
  color: var(--color-accent);
}

.toys-description {
  font-size: 1rem;
  color: var(--color-text-light);
  line-height: 1.6;
}

.carousel-controls {
  display: flex;
  gap: 1rem;
}

.control-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid var(--color-primary);
  background: transparent;
  color: var(--color-primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s var(--transition-smooth);
}

.control-btn:hover:not(:disabled) {
  background: var(--color-primary);
  color: var(--color-secondary);
}

.control-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.toys-carousel {
  overflow: hidden;
  margin: 0 -1rem;
  padding: 0 1rem;
}

.carousel-track {
  display: flex;
  gap: 2rem;
  transition: transform 0.5s var(--transition-smooth);
}

.toy-card {
  flex-shrink: 0;
  width: 260px;
  background: var(--color-white);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  transition: transform 0.4s var(--transition-smooth), 
              box-shadow 0.4s var(--transition-smooth);
}

.toy-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
}

.toy-visual {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.toy-emoji {
  font-size: 5rem;
  z-index: 1;
  transition: transform 0.4s var(--transition-smooth);
}

.toy-card:hover .toy-emoji {
  transform: scale(1.2) rotate(5deg);
}

.toy-glow {
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.3;
  transition: opacity 0.4s var(--transition-smooth);
}

.toy-card:hover .toy-glow {
  opacity: 0.5;
}

.toy-info {
  padding: 1.5rem;
}

.toy-year {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-accent);
}

.toy-name {
  font-family: var(--font-display);
  font-size: 1.25rem;
  margin: 0.5rem 0;
  color: var(--color-primary);
}

.toy-description {
  font-size: 0.875rem;
  color: var(--color-text-light);
  line-height: 1.5;
}

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 3rem;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: var(--color-primary);
  opacity: 0.2;
  cursor: pointer;
  transition: all 0.3s var(--transition-smooth);
}

.dot:hover {
  opacity: 0.5;
}

.dot.active {
  opacity: 1;
  background: var(--color-accent);
  transform: scale(1.2);
}

@media (max-width: 1024px) {
  .toys-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }
  
  .toys-container {
    padding: 0 2rem;
  }
}

@media (max-width: 640px) {
  .toys-section {
    padding: 4rem 0;
  }
  
  .toy-card {
    width: 220px;
  }
  
  .carousel-track {
    gap: 1rem;
  }
}
</style>
