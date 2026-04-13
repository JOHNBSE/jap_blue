"use client"

import { cn } from "@/lib/utils"
import { ImageIcon } from "lucide-react"

interface PlaceholderImageProps {
  label: string
  aspectRatio?: "square" | "video" | "portrait" | "wide"
  className?: string
  iconSize?: "sm" | "md" | "lg"
  variant?: "primary" | "secondary" | "muted"
}

const aspectRatios = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
}

const iconSizes = {
  sm: "h-8 w-8",
  md: "h-12 w-12",
  lg: "h-16 w-16",
}

const variants = {
  primary: "from-primary/20 to-primary/5 border-primary/20",
  secondary: "from-secondary/20 to-secondary/5 border-secondary/20",
  muted: "from-muted to-muted/50 border-border",
}

export function PlaceholderImage({
  label,
  aspectRatio = "video",
  className,
  iconSize = "md",
  variant = "muted",
}: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl bg-gradient-to-br border-2 border-dashed flex flex-col items-center justify-center gap-3",
        aspectRatios[aspectRatio],
        variants[variant],
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
      <ImageIcon className={cn("text-muted-foreground/40", iconSizes[iconSize])} />
      <span className="text-sm font-medium text-muted-foreground/60 text-center px-4 max-w-[80%]">
        {label}
      </span>
    </div>
  )
}
