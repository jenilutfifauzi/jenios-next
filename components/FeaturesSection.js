import React from "react";
import { useId } from "react";

export function FeaturesSection() {
  return (
    
    <div className="py-0 lg:py-0">
      <div className="px-8 pb-4">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Buat Website Profesional dengan Cepat dan Terjangkau
        </h4>
 
        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          Dapatkan website berkualitas tinggi dengan harga terjangkau. Proses pengerjaan cepat dengan hasil yang maksimal untuk bisnis Anda.
        </p>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-2 max-w-7xl mx-auto">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden">
            <Grid size={20} />
            <p
              className="text-base font-bold text-neutral-800 dark:text-white relative z-20">
              {feature.title}
            </p>
            <p
              className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    title: "Desain Responsif",
    description:
      "Website yang tampil sempurna di semua perangkat - desktop, tablet, dan mobile phone.",
  },
  {
    title: "Harga Terjangkau",
    description:
      "Paket website yang sesuai dengan budget Anda, tanpa mengorbankan kualitas dan fitur.",
  },
  {
    title: "Pengerjaan Cepat",
    description:
      "Proses pembuatan website yang cepat, mulai dari 3-7 hari kerja sesuai kompleksitas.",
  },
  {
    title: "SEO Friendly",
    description:
      "Optimasi website agar mudah ditemukan di mesin pencari Google dan meningkatkan visibilitas online.",
  },
  {
    title: "Dukungan Teknis",
    description:
      "Layanan support 24/7 untuk membantu Anda dengan pertanyaan atau masalah teknis.",
  },
  {
    title: "Fitur Modern",
    description:
      "Dilengkapi fitur modern seperti form kontak, integrasi media sosial, dan sistem manajemen konten.",
  },
  {
    title: "Keamanan Tinggi",
    description:
      "Proteksi website dengan SSL dan sistem keamanan terkini untuk melindungi data Anda.",
  },
  {
    title: "Pemeliharaan Berkala",
    description:
      "Layanan maintenance rutin untuk memastikan website Anda selalu up-to-date dan berjalan optimal.",
  },
];

export const Grid = ({
  pattern,
  size
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div
        className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10" />
      </div>
    </div>
  );
};

export function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  ...props
}) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}>
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y], index) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}-${index}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height} />
          ))}
        </svg>
      )}
    </svg>
  );
}
