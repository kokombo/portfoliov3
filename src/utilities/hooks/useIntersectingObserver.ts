"use client";
import { type MutableRefObject, useEffect, useState } from "react";

export const useIntersectingObserver = (
  ref: MutableRefObject<null | Element>
) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const div = ref.current as Element;
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIntersecting(entry.isIntersecting);
    });
    observer.observe(div);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
};
