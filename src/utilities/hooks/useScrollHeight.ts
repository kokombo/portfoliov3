import { useState, useEffect } from "react";

const useScrollHeight = () => {
  const [scrollHeight, setScrollHeight] = useState<number>(window.screenY);

  useEffect(() => {
    const handleScrollHeight = () => {
      setScrollHeight(window.screenY);
    };

    window.addEventListener("scroll", handleScrollHeight);

    return () => {
      window.removeEventListener("scroll", handleScrollHeight);
    };
  }, []);

  return { scrollHeight };
};

export default useScrollHeight;
