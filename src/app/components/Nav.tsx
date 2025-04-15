"use client";

import { useTransitionRouter } from "next-view-transitions";
import Link from "next/link";

export default function Nav() {

    const router = useTransitionRouter()
    function slideInOut() {
        document.documentElement.animate(
            [
            {
                opacity:1,
                transform: "translateY(0)",
            },
            {
                opacity:0.2,
                transform: "translateY(-35%)",
            },
        ], {
            duration: 1500,
            easing: "cubic-bezier(0.87, 0, 0.13, 1)",
            fill: "forwards",
            pseudoElement: "::view-transition-old(root)",
        }
        );

        document.documentElement.animate(
            [
                {
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",

                },
                {
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                }
            ],
            {
                duration: 1500,
                easing: "cubic-bezier(0.87, 0, 0.13, 1)",
                fill: "forwards",
                pseudoElement: "::view-transition-new(root)", 
            }
        )
    }

    return (
      <nav className="nav">
        <div className="logo">
            <div className="link">
                <Link
                onClick={(e) => {
                    e.preventDefault();
                    router.push("/", {
                        onTransitionReady: slideInOut, 
                    })
                }}
                 href="/">Index</Link>
            </div>
        </div>
        <div className="links">
            <div className="link">
                <Link
                onClick={(e) => {
                    e.preventDefault();
                    router.push("/projects", {
                        onTransitionReady: slideInOut, 
                    })
                }} 
                href="/projects">Projects</Link>
            </div>
            <div className="link">
                <Link 
                onClick={(e) => {
                    e.preventDefault();
                    router.push("/info", {
                        onTransitionReady: slideInOut, 
                    })
                }}
                href="/info">Info</Link>
            </div>
        </div>
      </nav>
    );
  }