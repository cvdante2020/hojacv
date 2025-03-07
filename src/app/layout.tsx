import "./globals.css";

export const metadata = {
  title: "Mi Portafolio",
  description: "Este es mi portafolio profesional",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
