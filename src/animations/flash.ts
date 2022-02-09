import gsap from 'gsap'

export function flash(
  element: HTMLElement | EventTarget | null,
  duration = 0.18
): void {
  if (!element) return
  const tl = gsap.timeline()
  tl.from(element, {
    opacity: 1,
    duration: duration / 5
  })
    .to(element, { opacity: 0, duration: duration / 5 })
    .to(element, { opacity: 1, duration: duration / 5 })
    .to(element, { opacity: 0, duration: duration / 5 })
    .to(element, { opacity: 1, duration: duration / 5 })
}
