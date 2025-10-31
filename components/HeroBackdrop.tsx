import { ReactNode } from "react"

import { cn } from "@/lib/utils"

type HeroBackdropProps = {
  imageSrc: string
  imageClassName?: string
  children?: ReactNode
}

export function HeroBackdrop({ imageSrc, imageClassName, children }: HeroBackdropProps) {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/80 dark:from-[#040711] dark:via-[#0B132B] dark:to-[#121b3a]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--primary)/[0.1],transparent_70%)] dark:bg-[radial-gradient(circle_at_top,rgba(23,106,157,0.25),transparent_70%)]" />
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(23,106,157,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(23,106,157,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(23,106,157,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(23,106,157,0.1)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] lg:bg-[size:50px_50px]" />
      
      {imageSrc && (
        <div className={cn(
          "absolute inset-0 opacity-40 mix-blend-luminosity dark:opacity-30 dark:mix-blend-screen",
          imageClassName,
        )}>
          <img 
            src={imageSrc} 
            alt="" 
            className="h-full w-full object-cover" 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: -1
            }} 
          />
        </div>
      )}
      {children}
    </div>
  )
}
