"use client"
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import SEO from "@/components/SEO";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <SEO
        title="Contact Us"
        description="Calculate the exact amount of asphalt needed for your paving project. Get accurate measurements for driveways, parking lots, and roads."
        canonical="/contact"
      />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Have questions about our calculator? Need technical support? We are
            here to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-yellow-400 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-slate-300">
                      asphaltcalculator007@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-yellow-400 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-slate-300">(+91) 8299727256</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-yellow-400 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Office</h3>
                    <p className="text-slate-300">
                      Noida Sector 135, <br />
                      Uttar Pradesh
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
              <h2 className="text-2xl font-bold mb-6">Business Hours</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-300">Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Saturday</span>
                  <span>Closed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-300 mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg py-2 px-4 text-white placeholder-slate-400 focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-300 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg py-2 px-4 text-white placeholder-slate-400 focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-300 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg py-2 px-4 text-white placeholder-slate-400 focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg py-2 px-4 text-white placeholder-slate-400 focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
