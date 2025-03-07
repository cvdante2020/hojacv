import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      <Header />
      <main className="w-full max-w-4xl px-5 space-y-10 py-10">
        <Section title="Sobre mí" content="Soy un desarrollador apasionado con experiencia en React, Next.js y Tailwind CSS." />
        <Section title="Experiencia" content="He trabajado en diversos proyectos web, creando aplicaciones escalables y de alto rendimiento." />
        <Section title="Proyectos" content="Algunos de mis proyectos incluyen aplicaciones interactivas, páginas web dinámicas y sistemas de gestión." />
      </main>
      <Footer />
    </div>
  );
}
