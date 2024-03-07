import { useEffect, useRef, useState } from "react";

export const useComponentVisible = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (componentRef.current) {
        const rect = componentRef.current.getBoundingClientRect();
        const isInView =
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2;
        setIsVisible(isInView);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { componentRef, isVisible };
};
