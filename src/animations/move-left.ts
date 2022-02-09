import gsap from 'gsap'

export function moveLeft(
  element: HTMLElement | EventTarget | null,
  duration = 0.18
): void {
  if (!element) return
  const tl = gsap.timeline()
  tl.from(element, {
    opacity: 1
  }).to(element, { opacity: 0, x: -50, duration: duration })
}
