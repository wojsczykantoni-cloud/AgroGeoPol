import Hero from "@/components/home/Hero";
import Offerings from "@/components/home/Offerings";
import Audiences from "@/components/home/Audiences";
import WhyUs from "@/components/home/WhyUs";
import Stats from "@/components/home/Stats";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Offerings />
      <Audiences />
      <Stats />
      <WhyUs />
      <CTA />
    </>
  );
}
