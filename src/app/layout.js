import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "My Portfolio",
  description: "A portfolio website built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <Navbar />
        <main className="container mx-auto px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
