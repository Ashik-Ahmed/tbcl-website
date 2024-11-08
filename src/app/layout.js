import "./globals.css";
import Navbar from "./components/Navbar/Navbar";


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
        {children}
      </body>
    </html>
  );
}
