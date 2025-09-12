import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "WATT Incorporate",
  description: "WATT Incorporate - Empowering Your Business with Innovative Solutions",
  icons: {
    icon: "/logo.jpeg", // path relative to /public
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <Navbar />
        <main className="container max-w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
