"use client";
import { useState, useEffect } from "react";
import emailjs, { init } from '@emailjs/browser';
import { FaUser, FaEnvelope, FaPhone , FaComment} from 'react-icons/fa';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
 }
 
 const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
 const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
 const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export default function ContactSection() {

  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY) {
      init(EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });


  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server

    if (!formData.fullName || !formData.email) {
      setSubmitStatus('error');
      return;
    }
 
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const templateParams = {
        from_name: formData.fullName,
        to_name: "Qixin tech",
        fullName: formData.fullName,
        contactNumber: formData.phone,
        email: formData.email,
        comments: formData.message
      };
 
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID!,
        EMAILJS_TEMPLATE_ID!,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
 
      if (result.text === 'OK') {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          message: ""
        });
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
      if (error instanceof Error) {
        console.error('Error details:', error.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section id="ContactUs" className="py-10 bg-white shadow-2xl">
      <div className="container-custom">
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">
          Leave a message
        </h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              <div className="flex items-center space-x-3">
                <FaUser className="text-gray-500" />
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Your name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-200 text-black p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
                <span className="text-red-500 text-sm ml-2">*</span>
              </div>

              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-gray-500" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-200 text-black p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
                <span className="text-red-500 text-sm ml-2">*</span>
              </div>

              <div className="flex items-center space-x-3"> 
                <FaPhone className="text-gray-500" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-gray-200 text-black p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
                <span className="text-white text-sm ml-2">*</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <FaComment className="text-gray-500"  />
              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-gray-200 text-black p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
              ></textarea>
              <span className="text-white text-sm ml-2">*</span>
            </div>
                   {/* 提交状态提示 */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-100 text-green-700 rounded-lg">
                Submitted
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-100 text-red-700 rounded-lg">
                Submiting failed
              </div>
            )}

            <div className="flex items-center space-x-3">

              <span className="text-white text-sm ml-2">*</span>
              <button
                type="submit"
                disabled={isSubmitting}
                // className="btn-primary w-full bg-darkyellow hover:bg-yellow"
                className={`w-full ${
                  isSubmitting ? 'bg-gray-400' : 'bg-yellow hover:bg-darkyellow'
                } text-black py-2 md:py-3 rounded-lg text-sm md:text-base transition-colors duration-300`}
              
              >
                {isSubmitting? "Submiting" : "Submit"}
              </button>
              <span className="text-white text-sm ml-2">*</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
