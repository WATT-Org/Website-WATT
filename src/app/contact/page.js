import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6 py-16">
      <div className="max-w-7xl w-full bg-gray-900 rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          
          {/* Left Section - Contact Info */}
          <div className="bg-gray-800 p-14 flex flex-col justify-center">
            <h2 className="text-4xl font-extrabold mb-6">Get in Touch</h2>
            <p className="mb-10 text-gray-300 leading-relaxed text-lg">
              We’d love to hear from you! Whether you have a question about projects,
              services, or anything else — our team is ready to answer your queries.
            </p>

            <div className="space-y-6 text-lg">
              <p className="flex items-center gap-3">
                <MapPin size={22} className="text-cyan-400" />
                E-6/132,Arera Colony,Bhopal 462016
              </p>
              <p className="flex items-center gap-3">
                <Phone size={22} className="text-cyan-400" /> +91 83170-67738
              </p>
              <p className="flex items-center gap-3">
                <Mail size={22} className="text-cyan-400" /> enquiry@thewatt.in
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
              <div className="flex space-x-5 text-2xl">
                <FaFacebook className="hover:text-cyan-400 cursor-pointer transition" />
                <FaTwitter className="hover:text-cyan-400 cursor-pointer transition" />
                <FaInstagram className="hover:text-cyan-400 cursor-pointer transition" />
                <FaLinkedin className="hover:text-cyan-400 cursor-pointer transition" />
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="p-14">
            <h2 className="text-3xl font-bold mb-8">Send us a message</h2>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <textarea
                placeholder="Your Message"
                rows="6"
                className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-4 rounded-xl transition transform hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
