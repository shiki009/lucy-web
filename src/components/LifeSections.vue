<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import lucyBlanketBurrito from '@/assets/images/lucy-blanket-burrito.png'
import lucyBoardGame from '@/assets/images/lucy-board-game.png'
import lucyAutumnLeaves from '@/assets/images/lucy-autumn-leaves.png'
import lucyBbq from '@/assets/images/lucy-bbq.png'

const sectionRef = ref(null)
const leftRef = ref(null)
const rightRef = ref(null)

onMounted(() => {
  gsap.fromTo(leftRef.value,
    { opacity: 0, x: -50 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 70%',
      }
    }
  )
  
  gsap.fromTo(rightRef.value,
    { opacity: 0, x: 50 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 70%',
      }
    }
  )
})
</script>

<template>
  <section ref="sectionRef" class="life-sections">
    <!-- At Home Section -->
    <div ref="leftRef" class="life-panel home-panel">
      <div class="panel-content">
        <span class="panel-label">Cozy Moments</span>
        <h2 class="panel-title">
          At<br/>
          <span class="accent">Home</span>
        </h2>
        <p class="panel-description">
          Naps on the couch, treats in the kitchen, and endless cuddles. 
          Home is where the heart (and the food bowl) is.
        </p>
        <div class="panel-stats">
          <div class="stat">
            <span class="stat-number">∞</span>
            <span class="stat-label">Naps taken</span>
          </div>
          <div class="stat">
            <span class="stat-number">100%</span>
            <span class="stat-label">Good girl rate</span>
          </div>
        </div>
      </div>
      <div class="panel-images">
        <div class="image-stack">
          <img :src="lucyBlanketBurrito" alt="Lucy burrito mode" class="stack-img img-1" />
          <img :src="lucyBoardGame" alt="Game night Lucy" class="stack-img img-2" />
        </div>
      </div>
      <div class="panel-bg"></div>
    </div>
    
    <!-- Adventures Section -->
    <div ref="rightRef" class="life-panel adventures-panel">
      <div class="panel-content">
        <span class="panel-label">Outdoor Explorer</span>
        <h2 class="panel-title">
          <span class="accent">Adventures</span><br/>
          Await
        </h2>
        <p class="panel-description">
          From garden patrols to city explorations. Every walk is a new 
          adventure, every sniff a discovery.
        </p>
        <div class="panel-stats">
          <div class="stat">
            <span class="stat-number">1000+</span>
            <span class="stat-label">Walks enjoyed</span>
          </div>
          <div class="stat">
            <span class="stat-number">∞</span>
            <span class="stat-label">Sniffs taken</span>
          </div>
        </div>
      </div>
      <div class="panel-images">
        <div class="image-stack">
          <img :src="lucyAutumnLeaves" alt="Lucy in autumn park" class="stack-img img-1" />
          <img :src="lucyBbq" alt="BBQ Lucy" class="stack-img img-2" />
        </div>
      </div>
      <div class="panel-bg"></div>
    </div>
  </section>
</template>

<style scoped>
.life-sections {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
}

.life-panel {
  position: relative;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  transition: all 0.5s var(--transition-smooth);
}

.home-panel {
  background-color: var(--color-secondary);
}

.adventures-panel {
  background-color: var(--color-primary);
}

.adventures-panel .panel-content {
  color: var(--color-secondary);
}

.panel-bg {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.5s var(--transition-smooth);
}

.home-panel .panel-bg {
  background: linear-gradient(135deg, rgba(212, 165, 116, 0.1), transparent);
}

.adventures-panel .panel-bg {
  background: linear-gradient(135deg, rgba(212, 165, 116, 0.15), transparent);
}

.life-panel:hover .panel-bg {
  opacity: 1;
}

.panel-content {
  position: relative;
  z-index: 2;
  max-width: 400px;
}

.panel-label {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 1rem;
}

.panel-title {
  font-size: clamp(3rem, 6vw, 5rem);
  line-height: 1;
  margin-bottom: 1.5rem;
}

.panel-title .accent {
  color: var(--color-accent);
}

.panel-description {
  font-size: 1rem;
  line-height: 1.7;
  opacity: 0.8;
  margin-bottom: 2rem;
}

.panel-stats {
  display: flex;
  gap: 2rem;
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.stat-number {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-accent);
}

.stat-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.6;
}

.panel-images {
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}

.image-stack {
  position: relative;
  width: 250px;
  height: 350px;
}

.stack-img {
  position: absolute;
  width: 200px;
  height: 280px;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s var(--transition-smooth);
}

.img-1 {
  top: 0;
  left: 0;
  z-index: 2;
}

.img-2 {
  top: 40px;
  left: 50px;
  z-index: 1;
  opacity: 0.8;
}

.life-panel:hover .img-1 {
  transform: rotate(-5deg) translateY(-10px);
}

.life-panel:hover .img-2 {
  transform: rotate(5deg) translate(10px, 10px);
  opacity: 1;
}

@media (max-width: 1024px) {
  .life-sections {
    grid-template-columns: 1fr;
  }
  
  .life-panel {
    min-height: 80vh;
    padding: 3rem 2rem;
  }
  
  .panel-images {
    position: relative;
    right: auto;
    top: auto;
    transform: none;
    margin-top: 2rem;
  }
  
  .image-stack {
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
  }
  
  .stack-img {
    width: 180px;
    height: 250px;
  }
  
  .img-1 {
    position: relative;
  }
  
  .img-2 {
    position: absolute;
    left: 50%;
    transform: translateX(-30%);
  }
}

@media (max-width: 640px) {
  .panel-title {
    font-size: 2.5rem;
  }
  
  .stack-img {
    width: 150px;
    height: 200px;
  }
}
</style>
