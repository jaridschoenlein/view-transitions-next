"use client";

import { useRef } from "react";

import SplitType from "split-type";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Home() {

  const container = useRef(null);

  useGSAP(() => {
    const heroText = new SplitType(".home h1", {types: "chars"});
    gsap.set(heroText.chars, {y: 400});

    gsap.to(heroText.chars, {
      y:0,
      duration: 1,
      stagger: .075,
      ease: "power4.out",
      delay: 1,
    });
  },
  {scope: container}
)

  return (
    <div className="home">
      <h1>Index</h1>
    </div>
  );
}
