"use client";

import  { useState } from "react";
import { motion } from "framer-motion";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="section-padding" id="contact">
      <motion.h1 
        className="heading text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Final <span className="text-red-500 font-mono">Extraction</span>
      </motion.h1>
      
      <div className="container-max">
        <motion.div
          className="max-w-2xl mx-auto puzzle-border p-8 bg-black/60 backdrop-blur-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8 text-center">
            <p className="text-red-500 font-mono text-xs uppercase tracking-widest mb-2">Secure Channel Established</p>
            <p className="text-white/60 font-mono text-sm">Transmit your request to reach the exit.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-red-500 font-mono text-xs uppercase mb-2">
                Ident-ID
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/40 border border-red-500/20 rounded-lg text-white font-mono placeholder-white/20 focus:border-red-500 focus:outline-none transition-colors"
                placeholder="Alias..."
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-red-500 font-mono text-xs uppercase mb-2">
                Comm-Link
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/40 border border-red-500/20 rounded-lg text-white font-mono placeholder-white/20 focus:border-red-500 focus:outline-none transition-colors"
                placeholder="Secure email..."
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-red-500 font-mono text-xs uppercase mb-2">
                Encrypted Data
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-black/40 border border-red-500/20 rounded-lg text-white font-mono placeholder-white/20 focus:border-red-500 focus:outline-none transition-colors resize-none"
                placeholder="Provide mission details..."
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold font-mono rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed border-b-4 border-red-900 shadow-lg"
            >
              {isSubmitting ? "TRANSMITTING..." : "INITIATE EXTRACTION"}
            </button>
            
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-400 text-center p-3 bg-green-900/20 rounded-lg border border-green-500/20"
              >
                Message sent successfully! I&apos;ll get back to you soon.
              </motion.div>
            )}
            
            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-center p-3 bg-red-900/20 rounded-lg border border-red-500/20"
              >
                Failed to send message. Please try again or contact me directly.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm; 