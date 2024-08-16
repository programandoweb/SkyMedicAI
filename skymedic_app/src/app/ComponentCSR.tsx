'use client';

// Importamos el ícono MdCheckCircle de react-icons para usarlo como indicador visual de "cumplido"
import { MdCheckCircle } from 'react-icons/md';
import BasicTable from "@/components/tables";
import { ComponentCSRProps } from "@/ts/post";
import { columns } from "@/ts/columns";
import { Button } from "@/components/ui/button";

export default function ComponentCSR({ dataSet }: ComponentCSRProps) {

  // Función para abrir WhatsApp con un mensaje predefinido para contratar al programador
  const handleHire = () => {
    window.open("https://api.whatsapp.com/send?phone=573115000926&text=Lo%20lograste,%20demostraste%20ser%20el%20mejor%20perfil%20*Jorge%20M%C3%A9ndez*,%20est%C3%A1s%20contratado...");
  };

  return (
    <main className="min-h-screen bg-gray-100">
      {/* Cabecera de la página con el título principal */}
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Prueba Técnica: Desarrollo de Aplicación Web</h1>
        </div>
      </header>

      {/* Sección de descripción del proyecto */}
      <section className="container mx-auto p-6">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Descripción de la Prueba</h2>
          <p className="mb-4">
            Desarrolle una pequeña aplicación web utilizando Next.js 14 (con App Directory), Tailwind CSS y Shadcn.
          </p>

          {/* Lista de requisitos del proyecto con íconos de checklist al final de cada ítem */}
          <h3 className="text-xl font-semibold mb-2">Requisitos del Proyecto:</h3>
          <ul className="list-disc pl-6 mb-4">
            {/* Cada <li> muestra un requisito y un ícono de checklist si se cumple */}
            <li className="flex items-center justify-between">
              Crear una aplicación Next.js 14 con App Directory
              <MdCheckCircle className="text-green-500 ml-2" /> {/* Ícono verde para indicar cumplimiento */}
            </li>
            <li className="flex items-center justify-between">
              Implementar una única página que muestre una lista de elementos
              <MdCheckCircle className="text-green-500 ml-2" /> {/* Ícono verde para indicar cumplimiento */}
            </li>
            <li className="flex items-center justify-between">
              Utilizar Tailwind CSS para el diseño
              <MdCheckCircle className="text-green-500 ml-2" /> {/* Ícono verde para indicar cumplimiento */}
            </li>
            <li className="flex items-center justify-between">
              Integrar al menos un componente de Shadcn
              <MdCheckCircle className="text-green-500 ml-2" /> {/* Ícono verde para indicar cumplimiento */}
            </li>
            <li className="flex items-center justify-between">
              Realizar fetching de datos desde una API pública de su elección
              <MdCheckCircle className="text-green-500 ml-2" /> {/* Ícono verde para indicar cumplimiento */}
            </li>
          </ul>

          {/* Especificaciones adicionales del proyecto */}
          <h3 className="text-xl font-semibold mb-2">Especificaciones:</h3>
          <ul className="list-disc pl-6">
            <li>Página Principal:</li>
            <ul className="list-disc pl-6 mb-4">
              <li className="flex items-center justify-between">
                Mostrar una lista de elementos obtenidos de la API
                <MdCheckCircle className="text-green-500 ml-2" /> {/* Ícono verde para indicar cumplimiento */}
              </li>
              <li className="flex items-center justify-between">
                Implementar un diseño responsivo con Tailwind CSS
                <MdCheckCircle className="text-green-500 ml-2" /> {/* Ícono verde para indicar cumplimiento */}
              </li>
              <li className="flex items-center justify-between">
                Usar un componente de Shadcn (por ejemplo, un botón o una tarjeta)
                <MdCheckCircle className="text-green-500 ml-2" /> {/* Ícono verde para indicar cumplimiento */}
              </li>
              <li className="flex items-center justify-between">
                Implementar Server Side Rendering (SSR) para la carga inicial de datos
                <MdCheckCircle className="text-green-500 ml-2" /> {/* Ícono verde para indicar cumplimiento */}
              </li>
            </ul>
          </ul>

          {/* Botón para contratar al programador */}
          <Button onClick={handleHire}>Conoce este programador</Button>
        </div>
      </section>
      
      {/* Sección de la tabla con datos */}
      <section>
        <BasicTable data={dataSet} columns={columns} perPage={5} />
      </section>

      {/* Pie de página con la información del desarrollador */}
      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">Desarrollado por Jorge Méndez / Dosquebradas-Colombia</p>
          <p className="text-sm">Celular: +573115000926</p>
          <p className="text-sm">Correo: lic.jorgemendez@gmail.com</p>
        </div>
      </footer>
    </main>
  );
}
