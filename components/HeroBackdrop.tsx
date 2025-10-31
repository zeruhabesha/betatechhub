import { ReactNode } from "react"
import { cn } from "@/lib/utils"

type HeroBackdropProps = {
  imageSrc: string
  imageClassName?: string
  children?: ReactNode
}

export function HeroBackdrop({ imageSrc, imageClassName, children }: HeroBackdropProps) {
  return (
    <div className="relative w-full h-full z-10">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        {imageSrc && (
          <div className={cn(
            "absolute inset-0",
            imageClassName
          )}>
            <img 
              src={imageSrc} 
              alt="" 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/60 to-background/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary)/[0.03],transparent_70%)]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(23,106,157,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(23,106,157,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(23,106,157,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(23,106,157,0.1)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] lg:bg-[size:50px_50px]" />

      {/* Content */}
      <div className="relative z-20 h-full w-full">
        {children}
      </div>
    </div>
  )
}
