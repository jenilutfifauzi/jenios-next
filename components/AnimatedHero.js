"use client";

import { motion } from "framer-motion";
import { Cover } from "@/components/ui/Cover";
import { AnimatedTooltipPreview } from "./ui/AnimatedTooltipPreview";

export function AnimatedHero() {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="relative w-full min-h-screen flex flex-col gap-4 items-center justify-center"
    >
      <AnimatedTooltipPreview />
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold text-center relative z-20 py-0 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Wujudkan Website Impian Anda <Cover>Cepat & Terjangkau</Cover>
      </h1>
      <div className="relative z-20 text-center gap-2 flex items-center">
      <a
        href="#features"
        className="mt-4 inline-block px-6 py-3 text-sm font-semibold text-white bg-neutral-900 rounded-lg shadow-md hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-700 focus:ring-opacity-50"
      >
        Booking Sekarang
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=6281388050997&text=halo+kak+saya+ingin+berdiskusi+terkait+pembuatan+website"
        className="mt-4 inline-block px-6 py-3 text-sm font-semibold text-white bg-neutral-900 rounded-lg shadow-md hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-700 focus:ring-opacity-50"
      >
        Konsultasi Gratis
      </a>
      </div>
    </motion.div>
  );
}
