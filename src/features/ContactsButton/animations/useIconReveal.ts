// src/animations/useIconRevealAnimation.js
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const useIconRevealAnimation = (showIcons: boolean) => {
  const iconsRef = useRef<any>(null);

  useEffect(() => {
    if (!iconsRef.current) return;

    const icons = gsap.utils.toArray(iconsRef.current.children);

    if (icons.length === 0) {
      console.warn("No icons found to animate");
      return;
    }

    if (showIcons) {
      // Set initial visibility styles directly before animation starts
      gsap.set(icons, { opacity: 0, scale: 0.5, y: 20 });

      // Reveal animation when icons are shown
      gsap.to(icons, {
        opacity: 1, // Fade in
        scale: 1, // Scale to normal size
        y: 0, // Move to original position
        duration: 0.5, // Animation duration
        ease: "power3.out", // Easing function
        stagger: 0.1, // Stagger effect for each child
      });
    } else {
      // Hide animation when icons are hidden
      gsap.to(icons, {
        opacity: 0,
        scale: 0.5,
        y: 20,
        duration: 0.3,
        ease: "power3.in",
      });
    }
  }, [showIcons]);

  return iconsRef;
};

export default useIconRevealAnimation;
