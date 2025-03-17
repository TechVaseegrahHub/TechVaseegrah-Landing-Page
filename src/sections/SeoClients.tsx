import Image from "next/image";
import logo1 from "@/assets/vv.webp";
import logo2 from "@/assets/amzfarmcol.png";
import logo3 from "@/assets/magizham.jpeg";

export default function SeoClients() {
  // Create an array of logos
  const logos = [logo1, logo2, logo3];

  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="section-title mb-6">Trusted by Industry Leaders</h2>
            <p className="section-description mb-8">
                We&apos;re proud to work with some of the most innovative companies across the globe.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center justify-center mt-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                 key={i}
                className="flex items-center justify-center p-4 grayscale transition-all hover:grayscale-0 hover:scale-110"
              >
                <Image
                  // Choose a logo from the array based on index modulo the array length
                  src={logos[i % logos.length]}
                  alt={`Client logo ${i + 1}`}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
