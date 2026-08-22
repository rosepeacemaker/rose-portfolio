"use client"
import { useEffect ,useRef } from "react";
import CarousalCard from "./CarousalCard";
import gsap from "@/libs/gsap";



const CARD_W = 200;
const CARD_H = 200;
const SCALE = 1.35;
const CARD_GAP = 1.35;

const DURATION = 25;

const TRACK_H = CARD_H * SCALE;


const InfiniteCarousal = ({ projects }) => {

const trackRef = useRef(null);
const tweenRef = useRef(null)


useEffect(()=>{
    const singleWidth = projects.length *(CARD_H + CARD_GAP);
    
    tweenRef.current = gsap.to(trackRef.current,{
        x: -singleWidth,
        ease:"none",
        duration: DURATION,
        repeat: -1,
    })
    return()=> tweenRef.current?.kill()
},[projects])



const doubled = [...projects,  ...projects]

  return (
    <div style={{
        padding:`${TRACK_H * 0.2}px 0 24px`
    }}
    className="overflow-hidden">
        <div style={{gap:`${CARD_GAP}px`,width: 'max-content', height: `${TRACK_H}px`}}
        ref={trackRef} className="track flex items-center">
            {doubled.map((projects, idx)=>{
                <CarousalCard key={idx} projects={projects} 
                onHoverStart={()=> tweenRef.current?.pause()} 
                onHoverEnd={()=> tweenRef.current?.play()} 
                />
            })}
        </div>
    </div>
  )
}

export default InfiniteCarousal