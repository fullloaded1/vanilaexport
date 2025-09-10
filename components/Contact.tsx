'use client'

import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin } from 'lucide-react'
import { ScrollReveal, ScaleOnHover } from './ScrollAnimations'
import { CheckCircle, Send } from 'lucide-react'

export default function Contact() {
  const { t } = useTranslation('common');
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState('whatsapp'); // whatsapp or email

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    const formData = new FormData(form.current);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', Object.fromEntries(formData));
      setIsSuccess(true);
      form.current.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/6285144920078', '_blank');
  };

  return (
    <section id="contact" className="relative py-16 md:py-24 bg-gradient-to-b from-warm-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-display text-warm-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('contact.title')}
          </motion.h2>
          <motion.p 
            className="text-lg text-warm-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Contact Methods Tabs */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Tabs */}
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab('whatsapp')}
                className={`flex-1 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'whatsapp'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.1-.473-.148-.673.15-.197.295-.771.961-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.136-.135.298-.354.446-.471.149-.148.198-.248.298-.413.098-.165.05-.31-.025-.434-.075-.122-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.516-.173-.008-.371-.01-.57-.01-.2 0-.523.074-.797.36-.273.3-1.046 1.02-1.046 2.475s1.07 2.865 1.219 3.075c.149.195 2.101 3.195 5.1 4.485.714.3 1.27.489 1.704.625.713.226 1.36.195 1.871.118.57-.085 1.758-.718 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.345m-5.446 7.443h-.016a9.17 9.17 0 01-4.868-1.4l-.347-.202-3.565.94.948-3.491-.227-.36a9.23 9.23 0 01-1.413-4.848 9.21 9.21 0 011.5-5.01 9.32 9.32 0 014.06-3.4 9.33 9.33 0 015.034-.9 9.24 9.24 0 015.544 3.554 9.1 9.1 0 012.152 5.82 9.2 9.2 0 01-2.7 6.52 9.3 9.3 0 01-6.67 2.717z" fillRule="evenodd" clipRule="evenodd"/>
                  </svg>
                  <span>WhatsApp</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('email')}
                className={`flex-1 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'email'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="w-5 h-5 text-gray-600" />
                  <span>Email</span>
                </div>
              </button>
            </div>

            {/* Tab Panels */}
            <div className="p-6 md:p-8">
              {/* WhatsApp Panel */}
              {activeTab === 'whatsapp' && (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                      <svg className="h-8 w-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.1-.473-.148-.673.15-.197.295-.771.961-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.136-.135.298-.354.446-.471.149-.148.198-.248.298-.413.098-.165.05-.31-.025-.434-.075-.122-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.516-.173-.008-.371-.01-.57-.01-.2 0-.523.074-.797.36-.273.3-1.046 1.02-1.046 2.475s1.07 2.865 1.219 3.075c.149.195 2.101 3.195 5.1 4.485.714.3 1.27.489 1.704.625.713.226 1.36.195 1.871.118.57-.085 1.758-.718 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.345m-5.446 7.443h-.016a9.17 9.17 0 01-4.868-1.4l-.347-.202-3.565.94.948-3.491-.227-.36a9.23 9.23 0 01-1.413-4.848 9.21 9.21 0 011.5-5.01 9.32 9.32 0 014.06-3.4 9.33 9.33 0 015.034-.9 9.24 9.24 0 015.544 3.554 9.1 9.1 0 012.152 5.82 9.2 9.2 0 01-2.7 6.52 9.3 9.3 0 01-6.67 2.717z" fillRule="evenodd" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Chat with Us on WhatsApp</h3>
                    <p className="text-gray-600 mb-6">We are available 24/7 to answer your questions</p>
                  </div>
                  
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.1-.473-.148-.673.15-.197.295-.771.961-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.136-.135.298-.354.446-.471.149-.148.198-.248.298-.413.098-.165.05-.31-.025-.434-.075-.122-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.516-.173-.008-.371-.01-.57-.01-.2 0-.523.074-.797.36-.273.3-1.046 1.02-1.046 2.475s1.07 2.865 1.219 3.075c.149.195 2.101 3.195 5.1 4.485.714.3 1.27.489 1.704.625.713.226 1.36.195 1.871.118.57-.085 1.758-.718 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.345m-5.446 7.443h-.016a9.17 9.17 0 01-4.868-1.4l-.347-.202-3.565.94.948-3.491-.227-.36a9.23 9.23 0 01-1.413-4.848 9.21 9.21 0 011.5-5.01 9.32 9.32 0 014.06-3.4 9.33 9.33 0 015.034-.9 9.24 9.24 0 015.544 3.554 9.1 9.1 0 012.152 5.82 9.2 9.2 0 01-2.7 6.52 9.3 9.3 0 01-6.67 2.717z" fillRule="evenodd" clipRule="evenodd"/>
                    </svg>
                    <span>Start Chat on WhatsApp</span>
                  </button>
                  
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Or save our number: +62 851 4492 0078</p>
                  </div>
                </div>
              )}

              {/* Email Panel */}
              {activeTab === 'email' && (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-4">
                      <Mail className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Send us an Email</h3>
                    <p className="text-gray-600 mb-6">We will get back to you within 24 hours</p>
                  </div>

                  {isSuccess ? (
                    <div className="p-4 mb-6 bg-green-50 text-green-700 rounded-lg flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                      <span>Your message has been sent successfully! We will get back to you soon.</span>
                    </div>
                  ) : (
                    <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          {t('contact.form.name')}
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          {t('contact.form.email')}
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          placeholder="How can we help?"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          {t('contact.form.message')}
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          placeholder="Your message..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-3 px-6 rounded-lg font-medium text-white transition-all ${
                          isSubmitting
                            ? 'bg-primary-400 cursor-not-allowed'
                            : 'bg-primary-600 hover:bg-primary-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                        }`}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center">
                            <Send className="w-5 h-5 mr-2" />
                            {t('contact.form.submit')}
                          </span>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              )}
            </div>
          </motion.div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            <motion.div 
              className="bg-white rounded-2xl shadow-xl p-6 md:p-8 h-full"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Office</h3>
              
              <div className="space-y-6">
                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden bg-gray-100">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.375883789774!2d106.8225005154291!3d-6.39992839537053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ebd7d8d1b7c5%3A0x3e9e9e9e9e9e9e9e9!2sJl.%20Keadilan%20Ujung%20No.74%2C%20Depok%2C%20Jawa%20Barat!5e0!3m2!1sen!2sid!4v1647858284477!5m2!1sen!2sid" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    className="w-full h-64 rounded-lg"
                    title="Natura Vanilla Office Location"
                  ></iframe>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Our Location</h4>
                      <p className="text-gray-600">Jl. Keadilan Ujung No.74, Depok, Jawa Barat, Indonesia</p>
                    </div>
                  </div>

                  <a 
                    href="https://wa.me/6285144920078" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.1-.473-.148-.673.15-.197.295-.771.961-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.136-.135.298-.354.446-.471.149-.148.198-.248.298-.413.098-.165.05-.31-.025-.434-.075-.122-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.516-.173-.008-.371-.01-.57-.01-.2 0-.523.074-.797.36-.273.3-1.046 1.02-1.046 2.475s1.07 2.865 1.219 3.075c.149.195 2.101 3.195 5.1 4.485.714.3 1.27.489 1.704.625.713.226 1.36.195 1.871.118.57-.085 1.758-.718 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.345m-5.446 7.443h-.016a9.17 9.17 0 01-4.868-1.4l-.347-.202-3.565.94.948-3.491-.227-.36a9.23 9.23 0 01-1.413-4.848 9.21 9.21 0 011.5-5.01 9.32 9.32 0 014.06-3.4 9.33 9.33 0 015.034-.9 9.24 9.24 0 015.544 3.554 9.1 9.1 0 012.152 5.82 9.2 9.2 0 01-2.7 6.52 9.3 9.3 0 01-6.67 2.717z" fillRule="evenodd" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">WhatsApp</h4>
                      <p className="text-gray-600">+62 851 4492 0078</p>
                    </div>
                  </a>

                  <a 
                    href="mailto:indo@naturavanilla.net" 
                    className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Email Us</h4>
                      <p className="text-gray-600">indo@naturavanilla.net</p>
                    </div>
                  </a>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-4">
                    Business Hours
                  </h4>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
