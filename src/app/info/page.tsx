"use client";

import { useRef } from "react";
import Image from "next/image";

import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";



gsap.registerPlugin(useGSAP);

export default function Info() {

  const container = useRef(null);

  useGSAP(() => {
    const text = new SplitType(".info p", {
      types: "lines",
      tagName: "div",
      lineClass: "line",
    });

    text.lines.forEach((line) => {
      const content = line.innerHTML;
      line.innerHTML = `<span>${content}</span>`;
    });

    gsap.set(".info p .line span", {
      y:400,
      display: "block",
    });

    gsap.to(".info p .line span", {
      y:0,
      duration: 1.3,
      stagger: 0.075,
      ease: "power4.out",
      delay: 0.25,
    });

    return () => {
      if (text) text.revert();
    };
  },
  {scope: container}
);

    return (
      <div className="info" ref={container}>
        <div className="col">
        <Image
            src="/img1.jpg"
            width={1000}
            height={1200}
            alt="Picture of the author"
        />
        </div>

        <div className="col col-2">
            <p>
            This interior space is a lush, tranquil retreat where nature takes center stage. Filled with vibrant greenery, cascading vines, and carefully curated plant life, 
            the environment blends modern design with organic warmth. Natural light floods the room, highlighting the textures of leafy foliage and the earthy tones of wood, stone, 
            and woven materials. Every corner feels alive and intentional—whether it’s a towering monstera in a ceramic pot, a wall of ferns, or a cozy reading nook nestled among hanging 
            plants. It’s a space that breathes, inviting calm, creativity, and a deeper connection to the natural world.
            </p>
        </div>
      </div>
    );
  }