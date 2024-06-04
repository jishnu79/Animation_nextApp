"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[90vw] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-800 px-8 y-5 md:p-16 md:w-[60vm]"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}
            key={item.name}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className=" relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <img 
                  className="w-10 h-10 rounded-full"
                  src="data:image/webp;base64,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" alt="" />
                  <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
                    {item.name}
                  </span>
                  <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
