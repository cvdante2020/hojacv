import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center py-10">
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
        <Image
          src="/profile.jpg"
          alt="Perfil"
          width={150}
          height={150}
          className="rounded-full border-4 border-gray-500 shadow-lg"
        />
      </motion.div>
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl font-bold mt-4">
        Tu Nombre
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-gray-400 mt-2 text-lg">
        Desarrollador | Analista | Especialización
      </motion.p>
    </header>
  );
}
