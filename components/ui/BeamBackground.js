import { cn } from "@/lib/utils";
import React from "react";

export function BeamBackground({ children, className }) {
  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <div
        className="absolute inset-0 bg-[url('https://res.cloudinary.com/do2aavqun/image/upload/f_auto,q_auto/v1/jenios/beams-basic-transparent_kee8t3')] bg-cover bg-center bg-no-repeat opacity-70"
      />
      {/* Radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black/50"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
