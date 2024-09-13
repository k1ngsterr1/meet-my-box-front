// src/animation/useLoaderAnimation.js
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const useLoaderAnimation = () => {
  const loaderRef = useRef(null);

  useEffect(() => {
    // Set a timeout to delay the start of the animation by 2 seconds
    const timer = setTimeout(() => {
      // Animate the loader after 2 seconds
      gsap.to(loaderRef.current, {
        duration: 2, // Duration of the animation in seconds
        opacity: 0, // Fade out effect
        display: "none",
        ease: "power2.out", // Easing function
      });
    }, 2000); // 2-second delay before the animation starts

    // Cleanup function to clear the timeout if the component unmounts
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return loaderRef;
};

export default useLoaderAnimation;
