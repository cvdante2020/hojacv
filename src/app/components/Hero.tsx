"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedin, FaBuilding } from "react-icons/fa";

export default function Hero() {



  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-20 px-8 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center md:items-start text-center md:text-left"
      >
       <motion.div
  whileHover={{
    scale: 1.05,
    boxShadow: "0 0 20px rgba(6, 182, 212, 0.4)", // glow cyan
  }}
  transition={{ duration: 0.3, ease: "easeOut" }}
  className="overflow-hidden rounded-xl border-4 border-cyan-500 shadow-lg bg-white"
>
  <Image
    src="/profile.png"
    alt="Perfil"
    width={220}
    height={280}
    className="object-cover w-[220px] h-[280px]"
  />
</motion.div>

        <h1 className="text-4xl font-extrabold mt-4">Christian Villarreal C.</h1>
        <p className="text-gray-400 text-lg">Founder and CPO/CISO at Kimobill/ Data Science/ IA</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg mt-10 md:mt-0"
      >
        <h2 className="text-4xl font-extrabold mt-4">Un Poco de mí</h2>
        <p className="text-gray-500 text-sm md:text-base">
       Soy un emprendedor apasionado por la innovación tecnológica y el crecimiento sostenible de los negocios. Como cofundador de Kimobill, transformé la manera en que las personas acceden a soluciones digitales en Ecuador, impulsando la inclusión financiera y la adopción de tecnologías de pago seguras y confiables. Mi visión se centra en crear soluciones inteligentes y escalables que impacten de manera positiva en la vida de las personas y las empresas.

Con más de 25 años liderando proyectos de automatización y desarrollo de productos digitales, combino la creatividad con un enfoque estratégico para identificar oportunidades de mejora, optimizar procesos y conectar necesidades reales con soluciones tecnológicas.

Me especializo en el diseño de ecosistemas de software, la creación de sistemas inteligentes en servicio y atencion al cliente combinando herramientas que transforman la forma en que las empresas interactúan con sus clientes. Cada proyecto que lidero refleja mi compromiso con la excelencia, la innovación y el desarrollo de soluciones prácticas y de alto impacto </p>
        <div className="flex items-center gap-4 mt-6">
          <Link href="www.linkedin.com/in/christianvillarrealkmb" target="_blank" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition">
            <FaLinkedin size={20} /> LinkedIn
          </Link>
          <Link href="https://kimobill.com" target="_blank" className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition">
            <FaBuilding size={20} /> Kimobill
          </Link>
        </div>
      </motion.div>
    </section>
  );
  
}

