"use client";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Try again!");
      }
    } catch (error) {
      setStatus("⚠️ Error: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6 py-16">
      <div className="max-w-7xl w-full bg-gray-900 rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          
          {/* Left Section */}
          <div className="bg-gray-800 p-14 flex flex-col justify-center">
            <h2 className="text-4xl font-extrabold mb-6">Get in Touch</h2>
            <p className="mb-10 text-gray-300 leading-relaxed text-lg">
              We’d love to hear from you! Whether you have a question about projects,
              services, or anything else — our team is ready to answer your queries.
            </p>

            <div className="space-y-6 text-lg">
              <div className="flex items-start gap-3">
                <MapPin size={22} className="text-cyan-400 mt-1" />
                <div className="space-y-2">
                  <p className="font-semibold">Registered Office:</p>
                  <p>SUN ENTERPRISES</p>
                  <p>GST Number: 09ISCPS5484N1ZN</p>
                  <p>Fir. No.2, Door no.1, Industrial Estate Road, Maheshpur, Varanasi, Uttar Pradesh, 221106</p>
                  <p>(Beside Ganga Sewa Sadan Hospital)</p>
                  
                  <p className="mt-3 font-semibold">Operations & Dispatch Center:</p>
                  <p>E-6/132, Arera Colony, Bhopal, Madhya Pradesh, 462016</p>
                </div>
              </div>

              <p className="flex items-center gap-3">
                <Phone size={22} className="text-cyan-400" /> +91 83170-67738 , +91 79050-56231
              </p>
              <p className="flex items-center gap-3">
                <Mail size={22} className="text-cyan-400" /> wattincorporate@gmail.com
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
              <div className="flex space-x-5 text-2xl">
                <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
                  <FaFacebook />
                </a>
                <a href="https://www.instagram.com/watt_india" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/company/watt-incorporate/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="p-14">
            <h2 className="text-3xl font-bold mb-8">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="6"
                required
                className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-4 rounded-xl transition transform hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </form>

            {/* Status Message */}
            {status && <p className="mt-4 text-center text-gray-300">{status}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
