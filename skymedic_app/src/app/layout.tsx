import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prueba técnica de Jorge Méndez con Dataset Público: Conectividad Educativa en Colombia",
  description: "Visualización de datos de conectividad en instituciones educativas colombianas",
  keywords: "educación, conectividad, Colombia, Next.js, Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}        
      </body>
    </html>
  );
}