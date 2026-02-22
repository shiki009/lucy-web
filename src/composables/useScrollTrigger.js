import { onUnmounted } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function useScrollTrigger() {
  const instances = []

  function track(tween) {
    if (tween && tween.scrollTrigger) {
      instances.push(tween.scrollTrigger)
    }
    return tween
  }

  onUnmounted(() => {
    instances.forEach((st) => st.kill())
    instances.length = 0
  })

  return { track }
}
