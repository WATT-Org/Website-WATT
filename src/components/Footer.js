
import { FaFacebookF, FaPinterest, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#1c1c1c] text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        
        {/* Our Policies */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Policies</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-red-500">Privacy</a></li>
            <li><a href="#" className="hover:text-red-500">Refund</a></li>
            <li><a href="#" className="hover:text-red-500">Shipping</a></li>
            <li><a href="#" className="hover:text-red-500">Terms of Service</a></li>
            <li><a href="#" className="hover:text-red-500">Mobile App</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-red-500">Contact Us</a></li>
            <li><a href="#" className="hover:text-red-500">About Us</a></li>
            <li><a href="#" className="hover:text-red-500">E-Waste Compliance</a></li>
            <li><a href="#" className="hover:text-red-500">Careers</a></li>
            <li><a href="#" className="hover:text-red-500">Track Your Order</a></li>
          </ul>
          {/* Social Icons */}
          <div className="flex space-x-3 mt-4">
            <a href="#" className="bg-orange-600 p-2 rounded-full"><FaFacebookF /></a>
            <a href="#" className="bg-orange-600 p-2 rounded-full"><FaXTwitter /></a>
            <a href="#" className="bg-orange-600 p-2 rounded-full"><FaPinterest /></a>
            <a href="#" className="bg-orange-600 p-2 rounded-full"><FaInstagram /></a>
            <a href="#" className="bg-orange-600 p-2 rounded-full"><FaYoutube /></a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-2">
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="mb-4">Promotions, new products and sales. Directly to your inbox.</p>
          <div className="flex items-center bg-transparent border rounded-lg overflow-hidden max-w-md">
            <input
              type="email"
              placeholder="Email address"
              className="bg-transparent px-4 py-2 w-full outline-none text-white"
            />
            <button className="bg-red-600 px-4 py-2">✔</button>
          </div>
          {/* Payment Icons */}
          <div className="flex space-x-2 mt-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Apple_Pay_logo.svg" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" className="h-6" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-10 text-gray-400 text-sm">
        © 2025, YourWebsiteName.com
      </div>

      {/* Popular Links */}
      <div className="bg-black mt-8 py-6 px-6">
        <h3 className="text-center text-xl font-semibold mb-4 text-white">Popular Links</h3>
        <p className="text-gray-400 text-center leading-relaxed">
          <a href="#" className="text-red-500 hover:underline">Arduino</a>,{" "}
          <a href="#" className="text-red-500 hover:underline">Raspberry Pi</a>,{" "}
          <a href="#" className="text-red-500 hover:underline">3D Printers</a>,{" "}
          <a href="#" className="text-red-500 hover:underline">Robotics</a>,{" "}
          <a href="#" className="text-red-500 hover:underline">AI Tools</a> ...
        </p>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        className="fixed bottom-6 left-6 bg-green-500 text-white p-4 rounded-full shadow-lg"
      >
        <FaWhatsapp size={24} />
      </a>
    </footer>
  );
}
