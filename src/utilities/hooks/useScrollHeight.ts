"use client";
import { useState, useEffect } from "react";

const useScrollHeight = () => {
  let initialState = 0;

  if (typeof window !== "undefined") {
    initialState = window.scrollY;
  }

  const [scrollHeight, setScrollHeight] = useState(initialState);

  useEffect(() => {
    const handleScrollHeight = () => {
      setScrollHeight(window.scrollY);
    };

    window.addEventListener("scroll", handleScrollHeight);

    return () => {
      window.removeEventListener("scroll", handleScrollHeight);
    };
  }, []);

  return { scrollHeight };
};

export default useScrollHeight;
