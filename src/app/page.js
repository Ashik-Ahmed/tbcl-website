import Image from "next/image";
import Hero from "./components/Hero/Hero";
import ServicesGrid from "./components/Services/ServicesGrid";
import Partners from "./components/Partners/Partners";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesGrid />
      <Partners />
    </main>
  );
}
