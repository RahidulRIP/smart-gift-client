import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-zinc-50 dark:bg-[#030712] font-sans overflow-x-hidden">
      <main className="flex flex-col w-full">
        <Hero />
      </main>
    </div>
  );
}
