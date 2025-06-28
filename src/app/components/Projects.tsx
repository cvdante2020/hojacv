import React from "react";

const projects = [
  {
    logo: "/deuna.png",
    title: "QR DeUna",
    description: "Sistema de pagos inmediato mediante el escaneo de un QR, llevamos la solución al ecosistema de entidades financieras Cooperativas",
    url:"https://deuna.app/",
  },
  {
    logo: "/aig.png",
    title: "CRM de Contact Center y Gestión de Clientes",
    description: "Sistema de Gestión y Administrador de clientes para el recaudo del SOAP - Ecuador asi como la automatización en el contacto telefónico, cuidando el embudo de marketing y su respectivo CTR",
    url:"https://www.aig.com.ec/",
   // description: "Es una plataforma que mediante analitica de datos y estandares internacionales evalua un precio mas justo para los dueños de un vehículo, creamos un núcleo de IA que permita guardar y comparar con cientos de vehículos",
   
  },
   {
    logo: "/rueda.png",
    title: "Plataforma de cotización vehicular con redes neuronales y Big data",
   // description: "Sistema de Gestión y Administrador de clientes para el recaudo del SOAP - Ecuador asi como la automatización en el contacto telefónico, cuidando el embudo de marketing y su respectivo CTR",
   
   description: "Es una plataforma que mediante analitica de datos y estandares internacionales evalua un precio mas justo para los dueños de un vehículo, creamos un núcleo de IA que permita guardar y comparar con cientos de vehículos",
    url:"https://www.ruedajusta.com/",
  },
  {
    logo: "/gpt.png",
    title: "Plataforma de automatizacion de procesos mediante IA",
    description: "Es una plataforma que automatiza procesos en varias verticales, empleando núcleos de IA, realizamos chatbots, voicebots, crm de envio masivo de whastapp, asi como la automatizacion de la venta en punta",
    url:"https://www.gptrobotic.com/",
  },
  {
    logo: "/aclass.png",
    title: "Empresa Consultora de Educación Superior",
    description: "Es una empresa dedicada a llevar a estudiantes de bachillerato a su siguiente nivel en universidades locales y de los EEUU, asi como un proceso ágil en la educación y la enseñanza del idioma ingles, cursos de Matemática nivel superior y avanzada",
    url: "https://aclassblog.com/",
  },
    {
    logo: "/urbano.png",
    title: "Empresa de logistica y Courier",
    description: "Desarrolamos e implementamos el sistema de telecomunicaciones asi como la adecuación de su data center llevando al sigueinte nivel Tier 3",
    url: "https://www.urbano.com.ec/",
  },
   {
    logo: "/tienda.png",
    title: "Sistema integrado a la red de pagos digitales del país",
    description: "Es una plataforma que permite a micro y tiendas pequeñas agilizar la venta en punta, registrando su venta, contabilizando y conciliando la venta, permite predecir el stock que necesita una tienda",
    url: "https://tiendago.app/",
  },
 
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0f172a] py-16 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-cyan-300">Proyectos más Importantes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="flex items-start gap-5 bg-slate-800 p-6 rounded-2xl border border-cyan-800 shadow-md hover:shadow-cyan-500/20 transition"
            >
              {/* Logo sin glow */}
              <div className="w-16 h-16 flex-shrink-0 bg-white p-2 rounded-md border border-cyan-500">
                <img src={proj.logo} alt={proj.title} className="w-full h-full object-contain" />
              </div>

              {/* Contenido */}
              <div>
                <h3 className="text-xl font-semibold mb-1">{proj.title}</h3>
                <p className="text-gray-300 mb-2">{proj.description}</p>
               <a
  href={proj.url}
  target="_blank"
  rel="noopener noreferrer"
  className="text-cyan-400 hover:underline text-sm font-medium"
>
  Visitar sitio →
</a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
