import Image from "next/image";
import Hero from "./components/Hero/Hero";
import ServicesGrid from "./components/Services/ServicesGrid";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesGrid />
    </main>
  );
}
