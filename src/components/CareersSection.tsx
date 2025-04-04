"use client";
import Link from "next/link";
import Image from "next/image";

export default function CareersSection() {
  return (
    <section className="py-20 bg-black relative">
      <div className="container-custom">
        <div className="bg-black/70 backdrop-blur-sm p-8 md:p-12 rounded-lg max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Estamos buscando<br />nuevos horizontes<br />¿y tú?
          </h2>

          <p className="text-lg text-gray-300 mb-8">
            Somos un grupo experimentado de analistas de datos y estamos orgullosos de nuestra capacidad
            para poder resolver tus desafíos más complejos. Lo hacemos poniendo a las personas en primer lugar.
            Invertimos nuestro tiempo para encontrar personas que quieran crecer en su capacidad de escucha
            y ayudar a las empresas a superar sus desafíos tecnológicos con éxito.
          </p>

          <div className="text-center">
            <Link
              href="mailto:rrhh@tech-bi.com"
              className="text-secondary hover:underline"
            >
              Envíanos tu cv a: rrhh@tech-bi.com
            </Link>
          </div>

          <div className="flex justify-center mt-10">
            <div className="w-20 h-20 relative">
              <Image
                src="https://ext.same-assets.com/935318559/1179399180.svg"
                alt="TechBI Certification Badge"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
