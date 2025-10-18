import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import cn from "../lib/utils";
import toast, { Toaster } from "react-hot-toast";
import React, { useState } from "react";

const ContactSection = () => {
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Handle form submission logic here
    setTimeout(() => {
      toast("Thank you for your message.");
      setSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="container py-24 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Get in <span className="text-primary">Touch</span>
        </h2>
        <p className="mb-12 max-w-2xl text-center mx-auto">
          Have a project in mind or just want to say hello? Feel free to reach
          out! I'm always open to discussing new opportunities, collaborations,
          or just a friendly chat.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:sharkarzishan@gmail.com"
                    className="hover:text-primary transition-colors duration-300"
                  >
                    sharkarzishan@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+8801796357683"
                    className="hover:text-primary transition-colors duration-300"
                  >
                    +8801796357683
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a className="hover:text-primary transition-colors duration-300">
                    Dhaka, Bangladesh
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/khalilurrahmanzishan/"
                  target="_blank"
                  className="transition-colors duration-300 hover:text-primary"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://www.facebook.com/k.r.zishan.17/"
                  target="_blank"
                  className="transition-colors duration-300 hover:text-primary"
                >
                  <Facebook />
                </a>
                <a
                  href="https://www.instagram.com/k.r.zishan/"
                  target="_blank"
                  className="transition-colors duration-300 hover:text-primary"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 font-medium" htmlFor="name">
                  Your Name
                </label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Khalilur Rahman..."
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-medium" htmlFor="email">
                  Your Email
                </label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="sharkarzishan@gamil.com..."
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-medium" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I would like to..."
                  type="text"
                  id="message"
                  name="message"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {submitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
              <Toaster
                toastOptions={{
                  style: {
                    backgroundColor: "hsl(var(--card))",
                    color: "hsl(var(--foreground))",
                  },
                }}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
