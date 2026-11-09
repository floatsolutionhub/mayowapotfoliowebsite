import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import { About, Contact, Credentials, Footer, Process, Services, Stack, Testimonials, Work } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <Process />
        <Stack />
        <Credentials />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
