"use client";

import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP)


export default function Projects() {


  useGSAP(() => {

    gsap.to('.images', {
      opacity:1,
      y:-20,
      duration: 1,
      stagger: .075,
      ease: "power4.out",
      delay: .95,
    });
  },
[]
)

    return (
      <div className="projects">
        <div className="images">
        <Image
            src="/img1.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
        />
        <Image
            src="/img2.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
        />
        <Image
            src="/img3.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
        />
        <Image
            src="/img4.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
        />
        </div>
      </div>
    );
  }