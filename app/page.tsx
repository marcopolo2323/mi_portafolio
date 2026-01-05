import { Header } from '@/app/components/layout/Header';
import { Hero } from '@/app/components/sections/Hero';
import { About } from '@/app/components/sections/About';
import { Projects } from '@/app/components/sections/Projects';
import { Experience } from '@/app/components/sections/Experience';
import { Contact } from '@/app/components/sections/Contact';
import { Footer } from '@/app/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
