"use client";
import React from "react";
import { AnimatedTooltip } from "./AnimatedTooltip";
const people = [
  {
    id: 1,
    name: "Jeni Lutfi Fauzi",
    designation: "Software Engineer",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQEeBh4Z__61oQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1675515651177?e=1750896000&v=beta&t=BPOr49F_JT6_Awxs4GjWEgghmH49HUdexSp1JdBdpK4",
  },
  {
    id: 2,
    name: "Jenlut",
    designation: "Product Manager",
    image:
      "https://avatars.githubusercontent.com/u/61114044?v=4",
  },
 
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
