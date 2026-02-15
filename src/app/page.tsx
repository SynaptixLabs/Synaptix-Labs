import { Nav } from "@/modules/nav";
import { Hero } from "@/modules/hero";
import { Philosophy } from "@/modules/philosophy";
import { Products } from "@/modules/products";
import { Advisory } from "@/modules/advisory";
import { About } from "@/modules/about";
import { CTA } from "@/modules/cta";
import { Footer } from "@/modules/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Philosophy />
        <Products />
        <Advisory />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
