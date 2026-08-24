"use client"
import gsap from "@/libs/gsap";
import TextReveal from "./TextReveal";
import { useRef } from "react";
import Image from "next/image";
import useViewTransition from "@/hooks/UseViewTransition";


const CARD_W = 400;
const CARD_H = 520;
const SCALE = 1.35;

const CarousalCard = ({ projects, onHoverStart, onHoverEnd }) => {
  console.log("PROJECTS:", projects)
  const cardRef = useRef(null);
  const imgRef = useRef(null);

  const numberRef = useRef(null);
  const titleRef = useRef(null);

  const onEnter = () => {
    onHoverStart?.();

    gsap.to(cardRef.current, {
      width: CARD_W * SCALE,
      height: CARD_H * SCALE,
      duration: 0.4,
      ease: "power3.out",
    });

    gsap.to(imgRef.current, {
      scale: 1,
      duration: 0.42,
      ease: "power3.out",
    });

    numberRef.current?.play();
    titleRef.current?.play();
  };

  const onLeave = () => {
    onHoverEnd?.();

    gsap.to(cardRef.current, {
      width: CARD_W,
      height: CARD_H,
      duration: 0.17,
      ease: "power3.out",
    });

    gsap.to(imgRef.current, {
      scale: 1.6,
      duration: 0.19,
      ease: "power3.out",
    });

    numberRef.current?.reverse();
    titleRef.current?.reverse();
  };

  const { navigateTo } = useViewTransition();

  const handleClick = () => {
    navigateTo(`/projects/${projects.slug}`);
  };

  return (
    <div
      ref={cardRef}
      onClick={handleClick}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        width: CARD_W,
        height: CARD_H,
        flexShrink: 0,
        overflow: "visible",
        cursor: "pointer",
      }}
      className="relative bg-red-300"
    >
      {/* Title Panel */}

      <div
        style={{ bottom: "calc(100% + 1.5rem)" }}
        className="titlePanel absolute left-0 pointer-events-none flex flex-col gap-[0.8rem]"
      >
        <TextReveal
          ref={numberRef}
          duration="0.25"
          trigger="manual"
          splitBy="chars"
        >
          <h3 className="text-[1.2rem] text-[#010101]">{projects.number}</h3>
        </TextReveal>
        <TextReveal
          ref={titleRef}
          duration="0.25"
          trigger="manual"
          splitBy="words"
        >
          <h3 className="text-[1.2rem] text-[#010101]">{projects.title}</h3>
        </TextReveal>
      </div>

      <div className="imageDiv absolute h-full w-full overflow-hidden">
         <div className="relative h-full w-full">
  <Image
    style={{
      transformOrigin: "center center",
      userSelect: "none",
    }}
    className="scale-[1.2] object-cover"
    ref={imgRef}
    src={projects.coverImage}
    alt={projects.title}
    fill
  />
</div>
 </div>
 </div>
   
  );
};

export default CarousalCard;