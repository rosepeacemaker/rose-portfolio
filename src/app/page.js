"use client"
import InfiniteCarousal from "@/components/InfiniteCarousal";
import TextReveal from "@/components/TextReveal";
import {projects } from "../data/projects"
import { useRef } from "react";


export default function Home() {
  

  return (
    <main className="h-screen flex items-start w-full">
      <InfiniteCarousal projects={projects}  />
    </main>
  );
}