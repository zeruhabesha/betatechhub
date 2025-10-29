import { ReactNode } from "react"

import { cn } from "@/lib/utils"

type HeroBackdropProps = {
  imageSrc: string
  imageClassName?: string
  children?: ReactNode
}

export function HeroBackdrop({ imageSrc, imageClassName, children }: HeroBackdropProps) {
  return (
    <>
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 opacity-40 hero-grid" />
      <div className="absolute inset-0 opacity-20 hero-dots" />
      <div
        className={cn(
          "absolute inset-0 opacity-40 mix-blend-luminosity dark:opacity-30 dark:mix-blend-screen",
          imageClassName,
        )}
      >
        <img src={imageSrc} alt="" className="h-full w-full object-cover" />
      </div>
      {children}
    </>
  )
}
