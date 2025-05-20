import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import Image from "next/image";

export function CodeScroll() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F]w-full">
      <MacbookScroll
        title={
          <span>
            Website Anda dibuat dengan teknologi modern. <br /> Cepat, aman, dan responsif.
          </span>
        }
        badge={
          <a href="https://api.whatsapp.com/send?phone=6281388050997&text=halo+kak+saya+ingin+berdiskusi+terkait+pembuatan+website">
            <Badge className="h-10 w-10 transform -rotate-12" />
          </a>
        }
        src={`/assets/img/tabs/vscode.png`}
        showGradient={false} />
    </div>
  );
}
// Peerlist logo
const Badge = ({
  className
}) => {
  return (
    <Image src="assets/img/logo-jenios.svg" alt="logo" width={100} height={100} className={`h-10 w-10 ${className}`} />
  );
};
