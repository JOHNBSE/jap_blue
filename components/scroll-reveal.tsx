"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"

type AnimationVariant = 
  | "fade-up" 
  | "fade-down" 
  | "fade-left" 
  | "fade-right" 
  | "zoom-in" 
  | "zoom-out"
  | "flip-up"
  | "flip-down"

interface ScrollRevealProps {
  children: ReactNode
  variant?: AnimationVariant
  delay?: number
  duration?: number
  className?: string
  threshold?: number
}

const animationClasses: Record<AnimationVariant, { hidden: string; visible: string }> = {
  "fade-up": {
    hidden: "opacity-0 translate-y-8",
    visible: "opacity-100 translate-y-0",
  },
  "fade-down": {
    hidden: "opacity-0 -translate-y-8",
    visible: "opacity-100 translate-y-0",
  },
  "fade-left": {
    hidden: "opacity-0 translate-x-8",
    visible: "opacity-100 translate-x-0",
  },
  "fade-right": {
    hidden: "opacity-0 -translate-x-8",
    visible: "opacity-100 translate-x-0",
  },
  "zoom-in": {
    hidden: "opacity-0 scale-95",
    visible: "opacity-100 scale-100",
  },
  "zoom-out": {
    hidden: "opacity-0 scale-105",
    visible: "opacity-100 scale-100",
  },
  "flip-up": {
    hidden: "opacity-0 rotate-x-12",
    visible: "opacity-100 rotate-x-0",
  },
  "flip-down": {
    hidden: "opacity-0 -rotate-x-12",
    visible: "opacity-100 rotate-x-0",
  },
}

export function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 700,
  className,
  threshold = 0.1,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold })
  const animation = animationClasses[variant]

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all will-change-transform",
        isVisible ? animation.visible : animation.hidden,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </div>
  )
}

// Staggered children wrapper
interface StaggeredRevealProps {
  children: ReactNode[]
  variant?: AnimationVariant
  staggerDelay?: number
  duration?: number
  className?: string
  childClassName?: string
}

export function StaggeredReveal({
  children,
  variant = "fade-up",
  staggerDelay = 100,
  duration = 700,
  className,
  childClassName,
}: StaggeredRevealProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <ScrollReveal
          key={index}
          variant={variant}
          delay={index * staggerDelay}
          duration={duration}
          className={childClassName}
        >
          {child}
        </ScrollReveal>
      ))}
    </div>
  )
}
