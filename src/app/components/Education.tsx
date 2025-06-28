import React from "react";

const educationData = [
  {
    logo: "/utpl.png",
    institution: "Universidad Técnica Particular de Loja",
    degree: "Ingeniería en Ciencias de la Computación",
    year: "2012 - 2016",
  },
  {
    logo: "/barcelona.png",
    institution: "Universitat de Barcelon",
    degree: "Master en Bussines Intelligent",
    year: "2019 - 2020",
  },
  {
    logo: "/politecnica.png",
    institution: "Escuela Politécnica Nacional",
    degree: "Certificacion ITIL",
    year: "2014",
  },
   {
    logo: "/aws.png",
    institution: "AWS - Azure",
    degree: "Devops",
    year: "2023",
  },
  {
    logo: "/espe.png",
    institution: "Universidad de las Fuerzas Armadas - ESPE",
    degree: "CCNA Networking",
    year: "2013",
  },
];
const shortCourses = [
  "/python.png",
  "/react.png",
  "/node.png",
  "/angular.png",
  "/tailwin.png",
];

const Education = () => {
  return (
    <section
      className="relative py-16 px-6 text-white"
      style={{
        backgroundImage: "url('/fondo-amg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay para oscurecer fondo y mejorar legibilidad */}
      <div className="absolute inset-0 bg-black opacity-70" />

      {/* Contenido */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-cyan-300 drop-shadow-md">
          Educación
        </h2>

        <ul className="space-y-6">
          {educationData.map((edu, index) => (
            <li
              key={index}
              className="flex items-center gap-5 bg-slate-800/80 p-5 rounded-xl shadow-md hover:shadow-cyan-500/30 transition backdrop-blur-sm"
            >
              {/* Logo con glow */}
              <div className="relative w-12 h-12 flex-shrink-0">
                <div className="absolute inset-0 bg-cyan-400 blur-sm opacity-25 rounded-lg"></div>
                <img
                  src={edu.logo}
                  alt={edu.institution}
                  className="relative w-full h-full object-contain bg-white rounded-md p-1"
                />
              </div>

              {/* Texto */}
              <div>
                <h3 className="text-lg font-semibold">{edu.institution}</h3>
                <p className="text-cyan-300">{edu.degree}</p>
                <span className="text-sm text-gray-300">{edu.year}</span>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-12">
  <h3 className="text-2xl font-semibold text-center text-cyan-200 mb-6">
    Cursos Cortos
  </h3>

  <div className="flex flex-wrap justify-center items-center gap-6">
    {shortCourses.map((logo, idx) => (
      <div key={idx} className="w-16 h-16 bg-white p-2 rounded-lg shadow-md">
        <img
          src={logo}
          alt={`Curso ${idx + 1}`}
          className="w-full h-full object-contain"
        />
      </div>
    ))}
  </div>
</div>
      </div>
    </section>
  );
};

export default Education;
