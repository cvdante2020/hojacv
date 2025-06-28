"use client";
import { motion } from "framer-motion";

const experiences = [
   {
    jobTitle: "CPO - CISO",
    company: "Kimobill",
    period: "2018 - presente",
    description: "Responsable de la creación de nuevos productos y de implmentar en el ecosistema Cooperativo del País el sistema QR DeUna de Banco Pichincha, lidero todo el frente técnico de implementación, mantenimiento y producción.",
    logo: "/kimobill.png",
  },
  {
    jobTitle: "Gerente de TI",
    company: "Partners Group",
    period: "2006 - 2015",
    description: "Responsable del Desarrollo de los sistemas que la empresa, en gestion de campañas comerciales y de servicios para empresas del sistema financiero, ademas de mantener el uptime del equipo activo de conmutación y telecomunicaciones",
    logo: "/partners.png",
  },
  {
    jobTitle: "Gerente de TI - Lider Comercial",
    company: "Plus Wireless",
    period: "2015 - 2018",
    description: "Responsable de crear un stack tecnologico que permita a la Empresa ser competitiva en servicios para el ecosistema financiero, contact center y sistemas de monitoreo y anomalias transaccionales",
    logo: "/plus.png",
  }
 
  
];

export default function Experience() {
  return (
    <section id="experience" className="py-12 px-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-10 text-center">Experiencia</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-gray-800 p-6 rounded-xl flex items-start gap-6 shadow-md"
          >
<div className="relative w-14 h-14 flex-shrink-0">
  {/* Glow detrás del logo */}
  <div className="absolute inset-0 rounded-xl bg-cyan-400 opacity-40 blur-[6px]"></div>

  {/* Logo principal */}
  <img
    src={exp.logo}
    alt={exp.company}
    className="relative w-full h-full object-cover rounded-xl border border-cyan-500 shadow-[0_0_15px_#06b6d4] bg-white"
  />
</div>



            <div>
              <h3 className="text-xl font-semibold">{exp.jobTitle}</h3>
              <p className="text-gray-400">{exp.company}</p>
              <p className="text-sm text-gray-500">{exp.period}</p>
              <p className="mt-2 text-gray-300">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
