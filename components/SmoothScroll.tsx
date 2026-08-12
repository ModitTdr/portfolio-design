"use client"
import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

export default function SmoothScroll() {
  useEffect(() => {
    const isMobile = window.innerWidth < 1024;
    if (isMobile) {
      return;
    }

    const scroll = new LocomotiveScroll();

    return () => scroll.destroy();
  }, []);

  return null;
}
