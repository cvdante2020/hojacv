"use client";
import { motion } from "framer-motion";

const skills = [
  { name: "CPO", color: "text-blue-400" },
  { name: "CEO", color: "text-gray-400" },
  
{ name: "CISO", color: "text-teal-400" },
];

export default function Skills() {
  return (
    <section id="skills" className="text-center py-10">
      <h2 className="text-3xl font-bold mb-6">Habilidades</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.1,
              color: "#ffffff",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`px-4 py-2 rounded-full shadow-lg transition text-lg font-semibold ${skill.color}`}
          >
            {skill.name}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

