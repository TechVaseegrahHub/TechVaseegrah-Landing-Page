import Image from "next/image";
import logo1 from "@/assets/vv.png";
import logo2 from "@/assets/mc.jpeg";
import logo3 from "@/assets/amzf.png";

export default function SeoClients() {
  // Array of unique logos
  const logos = [logo1, logo2, logo3];

  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="section-title md:text-5xl mb-6">Trusted by <span className="text-green-700">Clients</span></h2>
          </div>
          <div className="grid grid-cols-3 gap-8 md:gap-12 items-center justify-center ">
            {logos.map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center p-4"
              >
                <Image
                  src={logo}
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