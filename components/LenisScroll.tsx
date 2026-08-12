'use client'

import type { LenisRef } from 'lenis/react'
import { ReactLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function LenisScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);
  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }
    gsap.ticker.add(update)
    return () => gsap.ticker.remove(update)
  }, [])

  return (
    <ReactLenis root options={{
      autoRaf: false, duration: 2.5,
      lerp: 0.1,
      wheelMultiplier: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -15 * t)),
      touchMultiplier: 2,
      infinite: false,
      anchors: true,
      syncTouch: false,
    }} ref={lenisRef}>
      {children}
    </ReactLenis>
  )
}
