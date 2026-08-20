"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      duration: 1.2,
      lerp: 0.1,
    });

    function update(time) {
      lenis.raf(time * 1000);
    }

    gsap.ticker.add(update);
// Update scroll trigger
    lenis.on("scroll", ScrollTrigger.update);
// prevent scrollTrigger after setup
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
      ScrollTrigger.killAll();
    };
  }, []);

 
}