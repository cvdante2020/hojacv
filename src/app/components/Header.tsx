import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center py-10 bg-gray-800 text-white shadow-md">
      <Image
        src="/profile.jpg" // 👈 Asegúrate de tener una imagen en /public
        alt="Perfil"
        width={150}
        height={150}
        className="rounded-full border-4 border-gray-500 shadow-lg hover:scale-105 transition-transform duration-300"
      />
      <h1 className="text-4xl font-bold mt-4">Tu Nombre</h1>
      <p className="text-gray-300 mt-2 text-lg">Desarrollador | Analista | Especialización</p>
    </header>
  );
}
