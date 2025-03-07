"use client"; // 👈 IMPORTANTE: Añadir esto si usas Next.js 13 o 14

import { motion } from "framer-motion";

interface SectionProps {
  title: string;
  content: string;
}

export default function Section({ title, content }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 p-6 rounded-lg shadow-lg text-white hover:scale-105 transition-transform duration-300"
    >
      <h2 className="text-2xl font-semibold border-b border-gray-600 pb-2">{title}</h2>
      <p className="mt-3 text-gray-300">{content}</p>
    </motion.section>
  );
}
