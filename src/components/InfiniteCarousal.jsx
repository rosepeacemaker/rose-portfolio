"use client";

import { useEffect, useRef } from "react";
import CarousalCard from "./CarousalCard";
import gsap from "@/libs/gsap";

const CARD_W = 400;
const CARD_H = 520;
const SCALE = 1.35;
const CARD_GAP = 27;
const DURATION = 10;
const TRACK_H = CARD_H * SCALE;

const InfiniteCarousel = ({ projects }) => {
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    if (!projects?.length || !trackRef.current) return;

    const singleWidth = projects.length * (CARD_W + CARD_GAP);

    tweenRef.current = gsap.to(trackRef.current, {
      x: -singleWidth,
      ease: "none",
      duration: DURATION,
      repeat: -1,
    });

    return () => {
      tweenRef.current?.kill();
    };
  }, [projects]);

  const doubled = [...projects, ...projects];

  return (
    <div
      style={{
        padding: `${TRACK_H * 0.9}px 0 24px`,
      }}
      className="overflow-hidden"
    >
      <div
        ref={trackRef}
        style={{
          gap: `${CARD_GAP}px`,
          width: "max-content",
          height: `${TRACK_H}px`,
        }}
        className="track flex items-center"
      >
        {doubled.map((projects, idx) => (
          <CarousalCard
            key={`${projects.slug}-${idx}`}
            projects={projects}
            onHoverStart={() => tweenRef.current?.pause()}
            onHoverEnd={() => tweenRef.current?.play()}
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;