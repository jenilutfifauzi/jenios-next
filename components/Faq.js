import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Jenis website apa yang bisa dibuat?</AccordionTrigger>
        <AccordionContent>
          Kami membantu membuat berbagai jenis website, mulai dari company profile/branding, blog, e-commerce, hingga website custom sesuai kebutuhan Anda.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Bagaimana jika website sudah jadi dan ada perubahan/revisi?</AccordionTrigger>
        <AccordionContent>
          Kami menyediakan layanan revisi sesuai dengan paket yang Anda pilih. Untuk perubahan besar, kami akan memberikan penawaran harga baru.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Apakah ada garansi uang kembali?</AccordionTrigger>
        <AccordionContent>
          Kami memberikan garansi uang kembali 30 hari untuk semua paket berbayar.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Berapa lama proses pembuatan website?</AccordionTrigger>
        <AccordionContent>
          Rata-rata, pembuatan dan pemeliharaan sebuah website membutuhkan waktu sekitar 1-2 bulan. Namun, waktu tersebut dapat berbeda-beda tergantung pada kompleksitas proyek dan masalah yang Anda hadapi. Untuk memberikan estimasi yang lebih akurat, kami memerlukan informasi lebih lanjut mengenai lingkup pekerjaan dan kebutuhan Anda.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Bagaimana cara pengajuan pembuatan website di Jenios?</AccordionTrigger>
        <AccordionContent>
          Anda dapat mengisi formulir pengajuan di website kami atau menghubungi tim support kami melalui email atau WhatsApp. Tim kami akan segera menghubungi Anda untuk menjadwalkan konsultasi.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>Apa kelebihan layanan pembuatan website di Jenios?</AccordionTrigger>
        <AccordionContent>
          Kami telah membantu banyak klien dalam pembuatan website yang sesuai dengan kebutuhan mereka. Kami memiliki tim yang berpengalaman dan siap membantu Anda dalam setiap langkah proses pembuatan website. Selain itu, kami juga memberikan dukungan teknis dan pemeliharaan setelah website selesai dibuat.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
