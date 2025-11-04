import Lenis from '@studio-freight/lenis'

const lenis = new Lenis({
  // 🚀 scroll velocidad (entre más bajo, más lento)
  duration: 1.2, // default: 1.2
  // 🌊 qué tan suave es el scroll (0 = sin suavidad, 1 = muy suave)
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // función de easing personalizada
  // 🧭 dirección del scroll permitida: 'vertical', 'horizontal', 'both'
  direction: 'vertical',
  // 📱 detecta si está en dispositivo con scroll nativo (móvil)
  gestureDirection: 'vertical',
  // 🛑 detiene el scroll si se enfoca en un input o textarea
  smooth: true,
  smoothTouch: false, // true si quieres scroll suave también en móviles (menos recomendable)
  // 🔄 comportamiento de normalización
  normalizeWheel: true,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
