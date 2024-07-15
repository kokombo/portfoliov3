"use client";
import { twMerge } from "tailwind-merge";
import { useEffect, useRef, useState } from "react";
import { useIntersectingObserver } from "@/utilities/hooks";

const SlideItem = ({
  children,
  className,
  position,
}: {
  children: React.ReactNode;
  className?: string;
  position: "bottom" | "top" | "right" | "left";
}) => {
  const ref = useRef(null);
  const isIntersecting = useIntersectingObserver(ref);
  const [showed, setShowed] = useState(false);

  useEffect(() => {
    if (isIntersecting) {
      setShowed(true);
    }
  }, [isIntersecting]);

  let translate = "";

  if (position === "bottom") {
    translate = showed ? "translate-y-0" : "translate-y-full";
  } else if (position === "right") {
    translate = showed ? "translate-x-0" : "translate-x-full";
  } else if (position === "left") {
    translate = showed ? "translate-x-0" : "-translate-x-full";
  } else if (position === "top") {
    translate = showed ? "translate-y-0" : "-translate-y-full";
  }

  return (
    <div
      ref={ref}
      className={twMerge(
        className,
        showed ? "opacity-100" : "opacity-0",
        translate,
        "transtion ease-in-out duration-1000"
      )}
    >
      {children}
    </div>
  );
};

export default SlideItem;
