import Categories from "@/components/home/Categories";
import FAQ from "@/components/home/FAQ";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import ProductGrid from "@/components/home/ProductGrid";
import Promotion from "@/components/home/Promotion";
import Statistics from "@/components/home/Statistics";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-zinc-50 dark:bg-[#030712] font-sans overflow-x-hidden">
      <main className="flex flex-col w-full">
        <Hero />
        <Statistics />
        <Features />
        <Categories />
        <ProductGrid />
        <Promotion/>
        <Testimonials />
        <FAQ />
      </main>
    </div>
  );
}
