"use client";
import { useEffect} from "react";
import {useInView, motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";
export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const isInView=useInView(scope,{once:true});
  
  useEffect(() => {
    if (!isInView) return;
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2, { startDelay: 0.7 }),
      }
    );
  }, [isInView, animate, filter, duration]);
  const lines = words.split("\n")
  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline-block">
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} className="mb-1">
          {line.split(" ").map((word, idx) => (
            <motion.span
              key={word + idx}
              className="text-white opacity-0 inline-block"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </div>
      ))}
    </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className=" text-white text-xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
