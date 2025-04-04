"use client";
import Image from "next/image";

export default function ClientsSection() {
  const clientLogos = [
    {
      src: "https://ext.same-assets.com/935318559/4293129981.png",
      alt: "AcerBrag Logo",
      width: 120,
      height: 50,
    },
    {
      src: "https://ext.same-assets.com/935318559/553181155.png",
      alt: "Client Logo",
      width: 120,
      height: 50,
    },
    {
      src: "https://ext.same-assets.com/935318559/2913640064.png",
      alt: "Client Logo",
      width: 120,
      height: 50,
    },
    {
      src: "https://ext.same-assets.com/935318559/697834478.png",
      alt: "Coca-Cola Logo",
      width: 120,
      height: 50,
    },
    {
      src: "https://ext.same-assets.com/935318559/2104565303.png",
      alt: "Client Logo",
      width: 120,
      height: 50,
    },
  ];

  return (
    <section id="AlgunoDeNuestrosClientes" className="py-20 bg-gray-100">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-16 text-center">
          Algunos de nuestros clientes:
        </h2>
        <div className="flex flex-wrap justify-center gap-12 md:gap-16">
          {clientLogos.map((logo, index) => (
            <div
              key={index}
              className="relative w-24 h-12 md:w-32 md:h-16 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
