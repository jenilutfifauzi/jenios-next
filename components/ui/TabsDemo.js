"use client";

import Image from "next/image";
import { Tabs } from "../ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "WebDev",
      value: "webdev",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#1a1a1a] to-gray-500">
          {/* <p>Custom Website Development</p> */}
          <Image src="/assets/img/tabs/webdev.png"
            alt="dummy image"
            width={1000}
            height={1000}
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "CMS",
      value: "cms",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#1a1a1a] to-gray-500">
          {/* <p>Content Management Systems</p> */}
          <Image
            src="/assets/img/tabs/wp.png"
            alt="dummy image"
            width={1000}
            height={1000}
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "UI/UX",
      value: "design",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#1a1a1a] to-gray-500">
          {/* <p>Modern Interface Design</p> */}
          <Image
            src="/assets/img/tabs/ui3.png"
            alt="dummy image"
            width={1000}
            height={1000}
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
   
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto px-0 w-full items-start justify-start my-40">
      <div className="">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto tracking-tight font-medium text-black dark:text-white px-0">
          Kebutuhan Website Anda, Kami Penuhi
        </h4>
        <p className="text-sm px-0 lg:text-base py-4 text-neutral-500 font-normal dark:text-neutral-300">
          Mulai dari website sederhana hingga kompleks, kami siap membantu Anda
        </p>
      </div>
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/linear.webp"
      alt="dummy image"
      width={1000}
      height={1000}
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
