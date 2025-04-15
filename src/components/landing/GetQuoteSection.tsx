'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import SectionTitle from '@/components/common/TitleSection';

const GetQuotesSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    otherServiceDescription: '',
    description: '',
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null); // 添加类型注解
  const formRef = useRef(null); // 移除类型注解

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const services = [
    { id: 'website', name: 'Website Development' },
    { id: 'erp', name: 'ERP System' },
    { id: 'marketing', name: 'Digital Marketing & SEO' },
    { id: 'other', name: 'Other Services' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // 清除错误状态当用户开始输入
    if (name === 'name' && nameError) setNameError(false);
    if (name === 'email' && emailError) setEmailError(false);
  };

  const handleServiceSelect = (serviceId: string) => { // 添加类型注解
    setFormData(prev => ({ ...prev, service: serviceId }));
  };
  
  // For "Other" service type, we'll need this additional handler
  const handleOtherServiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData(prev => ({ ...prev, otherServiceDescription: value }));
  };

  const handleNext = () => {
    if (formData.service) {
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Reset error states
    setNameError(false);
    setEmailError(false);

    let hasError = false;

    if (!formData.name.trim()) {
      setNameError(true);
      hasError = true;
    }

    if (!formData.email.trim()) {
      setEmailError(true);
      hasError = true;
    }

    if (hasError) return;

    setIsSubmitting(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    // Prepare template parameters
    const templateParams = {
      service: formData.service === 'other' ? 
        `Other: ${formData.otherServiceDescription}` : 
        services.find(s => s.id === formData.service)?.name || formData.service,
      description: formData.description,
      name: formData.name,
      email: formData.email,
      phone: formData.phone || 'Not provided'
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitStatus('success');
        setIsSubmitting(false);
        
        // Reset form after successful submission
        setTimeout(() => {
          setIsPopupOpen(false);
          setStep(1);
          setFormData({
            service: '',
            otherServiceDescription: '',
            description: '',
            name: '',
            email: '',
            phone: ''
          });
          setSubmitStatus(null);
        }, 3000);
      })
      .catch((error) => {
        console.log('FAILED...', error);
        setSubmitStatus('error');
        setIsSubmitting(false);
      });
  };

  return (
    <section className="w-full pt-16 pb-24 px-4 md:px-8 lg:px-16 bg-gray-100 border-t border-gray-100 mb-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="w-full lg:w-5/12 mb-10 lg:mb-0">
            {/* Section Title */}
            <SectionTitle title="Get free quotes" textPosition='text-left'/>
            
            <p className="text-base md:text-lg text-gray-700 mb-8 max-w-lg">
            Whether you need a website, an ERP system, or digital marketing solutions, our team is ready to deliver.
            Get personalized proposals and find the perfect solution for your business.
            </p>

            {/* CTA Button */}
            <button 
              onClick={() => setIsPopupOpen(true)}
              className="inline-block bg-yellow hover:bg-darkyellow text-gray-900 font-medium text-center py-3 px-6 w-full md:w-auto md:min-w-[200px] transition-colors duration-300 rounded-sm"
            >
              Get Quotes
            </button>
          </div>

          {/* Right Image with Numbering Graphics */}
          <div className="w-4/5 lg:w-6/12 relative">
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1522273987129-4ca3c41871e2?q=80&w=3077&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Service professional with client" 
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Numbered Steps Graphic */}
              <div className="absolute -left-10 bottom-10 md:-left-20 md:-bottom-10 w-[150px] md:w-[200px] h-auto">
                {/* White Card Background */}
                <div className="bg-white rounded-lg p-4 shadow-lg">
                  {/* Step 1 */}
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-yellow flex items-center justify-center text-gray-900 font-medium mr-3">
                      1
                    </div>
                    <div className="bg-yellow h-4 w-full rounded"></div>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-800 font-medium mr-3">
                      2
                    </div>
                    <div className="bg-gray-200 h-4 w-full rounded"></div>
                  </div>
                  
                  {/* Step 3 */}
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 font-medium mr-3">
                      3
                    </div>
                    <div className="bg-gray-200 h-4 w-full rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Request Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg w-full max-w-md mx-4 overflow-hidden">
            {/* Popup Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-medium">
                {step === 1 ? 'Request a quote' : 'Your contact information'}
              </h3>
              <button 
                onClick={() => setIsPopupOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Popup Content */}
            <form ref={formRef} onSubmit={handleSubmit} className="p-4">
              {step === 1 ? (
                <>
                  <p className="text-sm text-gray-600 mb-4">
                    We use this to connect you with the right service for your needs.
                  </p>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">
                      What type of service do you need?
                    </label>
                    <div className="space-y-2">
                      {services.map(service => (
                        <div 
                          key={service.id}
                          onClick={() => handleServiceSelect(service.id)}
                          className={`
                            p-3 border rounded-md cursor-pointer transition-colors 
                            ${formData.service === service.id 
                              ? 'border-gray-300 bg-lightyellow text-gray-900' // 选中样式
                              : 'border-gray-300 bg-white hover:bg-lightyellow'} // 未选中 + hover 样式
                          `}
                        >
                          {service.name}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Additional field for "Other" service */}
                  {formData.service === 'other' && (
                    <div className="mb-4">
                      <label htmlFor="otherServiceDescription" className="block text-gray-700 font-medium mb-2">
                        Please specify what service you need *
                      </label>
                      <input
                        type="text"
                        id="otherServiceDescription"
                        name="otherServiceDescription"
                        required
                        value={formData.otherServiceDescription}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100"
                        placeholder="Tell us what service you're looking for"
                      />
                    </div>
                  )}
                  
                  <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
                      Describe your project (optional)
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={3}
                      value={formData.description}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>
                  
                  <div className='flex justify-center items-center mb-4'>
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={!formData.service || (formData.service === 'other' && !formData.otherServiceDescription)}
                      className={`w-24 py-2 px-4 rounded-md font-medium transition-colors ${
                        (formData.service && !(formData.service === 'other' && !formData.otherServiceDescription)) 
                        ? 'bg-lightyellow hover:bg-yellow text-gray-900' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      Continue
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border ${nameError ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100`}
                      placeholder="Your full name"
                    />
                    {nameError && (
                      <p className="text-sm text-red-500 mt-1">Please enter your name.</p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border ${emailError ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100`}
                      placeholder="your.email@example.com"
                    />
                    {emailError && (
                      <p className="text-sm text-red-500 mt-1">Please enter a valid email address.</p>
                    )}
                  </div>

                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100"
                      placeholder="+1 (123) 456-7890"
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <div className="mb-4 p-3 bg-green-100 text-green-800 rounded-md">
                      Your quote request has been submitted successfully!
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mb-4 p-3 bg-red-100 text-red-800 rounded-md">
                      There was a problem submitting your request. Please try again.
                    </div>
                  )}
                  
                  <div className="flex space-x-3">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="flex-1 py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md font-medium transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-2 px-4 rounded-md font-medium transition-colors bg-lightyellow hover:bg-yellow text-gray-900"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                  </div>
                </>
              )}
            </form>

            {/* Progress Indicator */}
            <div className="px-4 pb-4 flex justify-center">
              <div className="w-full max-w-xs flex items-center">
                <div className={`h-2 flex-1 rounded-full ${step >= 1 ? 'bg-lightyellow' : 'bg-gray-200'}`}></div>
                <div className="mx-2 w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs">
                  {step}
                </div>
                <div className={`h-2 flex-1 rounded-full ${step >= 2 ? 'bg-lightyellow' : 'bg-gray-200'}`}></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GetQuotesSection;