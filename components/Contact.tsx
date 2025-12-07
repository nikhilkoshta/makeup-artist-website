import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    type: 'Bridal',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('Thank you for your inquiry! Shalini will get back to you shortly.');
    setFormData({ name: '', email: '', date: '', type: 'Bridal', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-stone-50 dark:bg-stone-950 relative transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h3 className="text-rose-700 dark:text-rose-500 font-medium tracking-widest uppercase mb-4">Get in Touch</h3>
            <h2 className="text-5xl font-playfair text-stone-900 dark:text-stone-100 mb-8">Let's Create Magic Together</h2>
            <p className="text-stone-600 dark:text-stone-300 mb-12 text-lg leading-relaxed">
              Based in Pimpri-Chinchwad, available for travel. Secure your date early to avoid disappointment.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-white dark:bg-stone-800 p-3 rounded-full shadow-sm border border-stone-100 dark:border-stone-700">
                  <Phone className="w-6 h-6 text-stone-800 dark:text-stone-200" />
                </div>
                <div>
                  <h4 className="font-playfair text-xl mb-1 text-stone-900 dark:text-stone-100">Phone / WhatsApp</h4>
                  <p className="text-stone-600 dark:text-stone-400">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white dark:bg-stone-800 p-3 rounded-full shadow-sm border border-stone-100 dark:border-stone-700">
                  <Mail className="w-6 h-6 text-stone-800 dark:text-stone-200" />
                </div>
                <div>
                  <h4 className="font-playfair text-xl mb-1 text-stone-900 dark:text-stone-100">Email</h4>
                  <p className="text-stone-600 dark:text-stone-400">hello@shalinikoshta.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white dark:bg-stone-800 p-3 rounded-full shadow-sm border border-stone-100 dark:border-stone-700">
                  <MapPin className="w-6 h-6 text-stone-800 dark:text-stone-200" />
                </div>
                <div>
                  <h4 className="font-playfair text-xl mb-1 text-stone-900 dark:text-stone-100">Studio Location</h4>
                  <p className="text-stone-600 dark:text-stone-400">Pimpri-Chinchwad, Pune, Maharashtra 411017</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white dark:bg-stone-900 p-8 md:p-12 rounded-3xl shadow-lg border border-stone-100 dark:border-stone-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 dark:border-stone-700 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all bg-stone-50 dark:bg-stone-800 focus:bg-white dark:focus:bg-stone-900 text-stone-900 dark:text-stone-100"
                  placeholder="Jane Doe"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">Event Date</label>
                  <input 
                    type="date" 
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 dark:border-stone-700 focus:ring-2 focus:ring-rose-500 outline-none bg-stone-50 dark:bg-stone-800 focus:bg-white dark:focus:bg-stone-900 text-stone-900 dark:text-stone-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">Event Type</label>
                  <select 
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 dark:border-stone-700 focus:ring-2 focus:ring-rose-500 outline-none bg-stone-50 dark:bg-stone-800 focus:bg-white dark:focus:bg-stone-900 text-stone-900 dark:text-stone-100"
                  >
                    <option>Bridal</option>
                    <option>Engagement</option>
                    <option>Reception</option>
                    <option>Party/Guest</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 dark:border-stone-700 focus:ring-2 focus:ring-rose-500 outline-none bg-stone-50 dark:bg-stone-800 focus:bg-white dark:focus:bg-stone-900 text-stone-900 dark:text-stone-100"
                  placeholder="jane@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">Message</label>
                <textarea 
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 dark:border-stone-700 focus:ring-2 focus:ring-rose-500 outline-none bg-stone-50 dark:bg-stone-800 focus:bg-white dark:focus:bg-stone-900 text-stone-900 dark:text-stone-100"
                  placeholder="Tell me about your look preference or any specific requirements..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-medium rounded-lg hover:bg-rose-900 dark:hover:bg-rose-200 transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                Send Inquiry <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;