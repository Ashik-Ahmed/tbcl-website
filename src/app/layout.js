import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


export const metadata = {
  title: "Transbangla Commodities Limited",
  description: "Global Routes to Future Roots",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <Navbar />
        <div className="mt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
