"use client";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    city: "",
    message: "",
    marketing: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    console.log("Form submitted:", formData);
    alert("Gracias por contactarnos. Te responderemos a la brevedad.");

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      country: "",
      city: "",
      message: "",
      marketing: false
    });
  };

  return (
    <section id="Contactanos" className="py-20 bg-primary">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-16 text-center">
          Contáctanos
        </h2>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-gray-300 mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/20 border border-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/20 border border-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-300 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-black/20 border border-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-gray-300 mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-black/20 border border-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>

              <div>
                <label htmlFor="country" className="block text-gray-300 mb-2">
                  País
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full bg-black/20 border border-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-gray-300 mb-2">
                  Ciudad
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full bg-black/20 border border-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-black/20 border border-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
              ></textarea>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="marketing"
                name="marketing"
                checked={formData.marketing}
                onChange={handleChange}
                className="mt-1 mr-2"
              />
              <label htmlFor="marketing" className="text-gray-300 text-sm">
                Suscribirse a los correos electrónicos de marketing.
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="btn-primary w-full"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
