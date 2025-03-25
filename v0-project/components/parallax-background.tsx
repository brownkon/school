"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function ParallaxBackground() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main background color */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-950"></div>
 {/* Main background image */}
 <div
        className="absolute inset-0 opacity-30 dark:opacity-20"
        style={{
          transform: `translateY(${offset * 0.2}px)`,
          transition: "transform 0.2s cubic-bezier(0.215, 0.61, 0.355, 1)",
        }}
      >
        <Image src="/usu.jpg?height=800&width=1000" alt="Background" fill className="object-cover" priority />
      </div>

      {/* Image highlight effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-500/10" />
      {/* Stylish geometric elements */}
      <div className="absolute inset-0">
        {/* Top right corner element */}
        <div
          className="absolute top-0 right-0 w-[40%] h-[40%] bg-blue-500/5 dark:bg-blue-500/10 rounded-bl-[100px]"
          style={{
            transform: `translateY(${offset * 0.1}px)`,
            transition: "transform 0.2s cubic-bezier(0.215, 0.61, 0.355, 1)",
          }}
        />

        {/* Bottom left corner element */}
        <div
          className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-blue-500/5 dark:bg-blue-500/10 rounded-tr-[80px]"
          style={{
            transform: `translateY(${-offset * 0.05}px)`,
            transition: "transform 0.2s cubic-bezier(0.215, 0.61, 0.355, 1)",
          }}
        />

        {/* Center decorative circle */}
        <div
          className="absolute top-[40%] left-[60%] w-[300px] h-[300px] rounded-full border border-blue-200/20 dark:border-blue-500/20"
          style={{
            transform: `translate(${Math.sin(offset * 0.001) * 20}px, ${Math.cos(offset * 0.001) * 20}px)`,
            transition: "transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1)",
          }}
        />

        {/* Smaller decorative circle */}
        <div
          className="absolute top-[20%] left-[30%] w-[150px] h-[150px] rounded-full border border-blue-200/20 dark:border-blue-500/20"
          style={{
            transform: `translate(${Math.sin(offset * 0.002 + 1) * 15}px, ${Math.cos(offset * 0.002 + 1) * 15}px)`,
            transition: "transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1)",
          }}
        />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px), 
                            linear-gradient(to right, rgba(59, 130, 246, 0.5) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          transform: `translateY(${offset * 0.2}px)`,
        }}
      />

      {/* Floating blue particles */}
      <div className="absolute inset-0">
        <div
          className="absolute h-32 w-32 rounded-full bg-blue-500/5 blur-3xl"
          style={{
            top: "20%",
            left: "30%",
            transform: `translate3d(0, ${Math.sin(offset * 0.002) * 30}px, 0)`,
            transition: "transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1)",
          }}
        />
        <div
          className="absolute h-64 w-64 rounded-full bg-blue-500/5 blur-3xl"
          style={{
            top: "60%",
            left: "70%",
            transform: `translate3d(0, ${Math.sin(offset * 0.001 + 2) * 40}px, 0)`,
            transition: "transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1)",
          }}
        />
      </div>

      {/* Decorative lines */}
      <div className="absolute inset-0">
        <div
          className="absolute top-[15%] right-[10%] w-[150px] h-[1px] bg-blue-200/30 dark:bg-blue-500/30 rotate-[30deg]"
          style={{
            transform: `translateY(${offset * 0.1}px) rotate(30deg)`,
          }}
        />
        <div
          className="absolute bottom-[25%] left-[15%] w-[100px] h-[1px] bg-blue-200/30 dark:bg-blue-500/30 rotate-[-20deg]"
          style={{
            transform: `translateY(${-offset * 0.15}px) rotate(-20deg)`,
          }}
        />
      </div>

     
    </div>
  )
}

