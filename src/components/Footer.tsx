import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-center py-5 border-t border-gray-700 mt-10"
    >
      <p className="text-gray-400">
        Contacto:{" "}
        <a href="mailto:correo@ejemplo.com" className="text-blue-400 hover:underline">
          correo@ejemplo.com
        </a>
      </p>
    </motion.footer>
  );
}
