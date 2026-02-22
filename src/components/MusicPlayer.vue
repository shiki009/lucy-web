<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from '@/i18n/useI18n.js'

const { t } = useI18n()

const isPlaying = ref(false)
const audioRef = ref(null)
const isLoaded = ref(false)
const showTooltip = ref(true)

const musicUrl = '/music/background.mp3'

onMounted(() => {
  setTimeout(() => {
    showTooltip.value = false
  }, 5000)
})

const toggleMusic = () => {
  if (!audioRef.value) return

  if (isPlaying.value) {
    audioRef.value.pause()
    isPlaying.value = false
  } else {
    audioRef.value.play()
      .then(() => {
        isPlaying.value = true
      })
      .catch(err => {
        console.log('Audio play failed:', err)
      })
  }
}

const onCanPlay = () => {
  isLoaded.value = true
}
</script>

<template>
  <div class="music-player">
    <audio
      ref="audioRef"
      :src="musicUrl"
      loop
      preload="auto"
      @canplay="onCanPlay"
    ></audio>

    <button
      class="music-btn"
      @click="toggleMusic"
      :class="{ playing: isPlaying, loaded: isLoaded }"
      :title="isPlaying ? t.musicPlayer.pauseTitle : t.musicPlayer.playTitle"
      :aria-label="isPlaying ? t.musicPlayer.pauseTitle : t.musicPlayer.playTitle"
    >
      <div class="music-icon">
        <svg v-if="!isPlaying" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
        </svg>
        <div v-else class="sound-waves" aria-hidden="true">
          <span class="wave"></span>
          <span class="wave"></span>
          <span class="wave"></span>
          <span class="wave"></span>
        </div>
      </div>
    </button>

    <transition name="fade">
      <div v-if="showTooltip && isLoaded" class="music-tooltip">
        {{ t.musicPlayer.playTooltip }}
      </div>
    </transition>
  </div>
</template>

<style scoped>
.music-player {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.music-btn {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 2px solid rgba(212, 165, 116, 0.5);
  background: rgba(26, 26, 26, 0.9);
  backdrop-filter: blur(10px);
  color: var(--color-accent);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s var(--transition-smooth);
  opacity: 0.7;
}

.music-btn:hover {
  opacity: 1;
  transform: scale(1.1);
  border-color: var(--color-accent);
  box-shadow: 0 0 20px rgba(212, 165, 116, 0.3);
}

.music-btn.playing {
  opacity: 1;
  background: rgba(212, 165, 116, 0.2);
  border-color: var(--color-accent);
}

.music-btn.loaded {
  animation: pulse 2s ease-in-out infinite;
}

.music-btn.playing.loaded {
  animation: none;
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(212, 165, 116, 0.4);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(212, 165, 116, 0);
  }
}

.music-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.music-icon svg {
  width: 24px;
  height: 24px;
}

.sound-waves {
  display: flex;
  align-items: flex-end;
  gap: 3px;
  height: 20px;
}

.wave {
  width: 3px;
  background: var(--color-accent);
  border-radius: 2px;
  animation: soundWave 0.8s ease-in-out infinite;
}

.wave:nth-child(1) {
  height: 8px;
  animation-delay: 0s;
}

.wave:nth-child(2) {
  height: 16px;
  animation-delay: 0.1s;
}

.wave:nth-child(3) {
  height: 12px;
  animation-delay: 0.2s;
}

.wave:nth-child(4) {
  height: 18px;
  animation-delay: 0.3s;
}

@keyframes soundWave {
  0%, 100% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(0.5);
  }
}

.music-tooltip {
  position: absolute;
  right: 70px;
  white-space: nowrap;
  padding: 0.5rem 1rem;
  background: rgba(26, 26, 26, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  font-size: 0.75rem;
  color: var(--color-secondary);
  border: 1px solid rgba(212, 165, 116, 0.3);
}

.music-tooltip::after {
  content: '';
  position: absolute;
  right: -6px;
  top: 50%;
  transform: translateY(-50%);
  border: 6px solid transparent;
  border-left-color: rgba(26, 26, 26, 0.9);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .music-player {
    bottom: 1.5rem;
    right: 1.5rem;
  }

  .music-btn {
    width: 48px;
    height: 48px;
  }

  .music-tooltip {
    display: none;
  }
}
</style>
