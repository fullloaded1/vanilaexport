// Smooth scroll utility with custom easing
export const smoothScrollTo = (elementId: string, offset: number = 0) => {
  const element = document.getElementById(elementId)
  if (!element) return

  const elementPosition = element.getBoundingClientRect().top
  const offsetPosition = elementPosition + window.pageYOffset - offset

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  })
}

// Custom easing functions
export const easingFunctions = {
  easeInOutCubic: (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
  },
  easeOutQuart: (t: number): number => {
    return 1 - (--t) * t * t * t
  },
  easeInOutQuart: (t: number): number => {
    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t
  }
}

// Advanced smooth scroll with custom easing
export const smoothScrollToWithEasing = (
  elementId: string, 
  offset: number = 0, 
  duration: number = 1000,
  easing: (t: number) => number = easingFunctions.easeInOutCubic
) => {
  const element = document.getElementById(elementId)
  if (!element) return

  const startPosition = window.pageYOffset
  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset
  const distance = targetPosition - startPosition
  let startTime: number | null = null

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime
    const timeElapsed = currentTime - startTime
    const progress = Math.min(timeElapsed / duration, 1)
    const easedProgress = easing(progress)

    window.scrollTo(0, startPosition + distance * easedProgress)

    if (progress < 1) {
      requestAnimationFrame(animation)
    }
  }

  requestAnimationFrame(animation)
}

// Scroll to top with custom easing
export const scrollToTop = (duration: number = 1000) => {
  const startPosition = window.pageYOffset
  let startTime: number | null = null

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime
    const timeElapsed = currentTime - startTime
    const progress = Math.min(timeElapsed / duration, 1)
    const easedProgress = easingFunctions.easeInOutCubic(progress)

    window.scrollTo(0, startPosition * (1 - easedProgress))

    if (progress < 1) {
      requestAnimationFrame(animation)
    }
  }

  requestAnimationFrame(animation)
}
