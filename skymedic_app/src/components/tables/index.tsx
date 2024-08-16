import React, { useState } from 'react';
// Importamos íconos de react-icons para navegación y acciones
import { MdArrowBackIos } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";
import { IoMdOpen } from "react-icons/io";
import Modal from '../modal'; // Importa el componente Modal para mostrar detalles
import { Button } from '../ui/button';

// Definición de la interfaz para los datos de la tabla
interface Data {
  [key: string]: any; // Define una estructura flexible para los datos, donde cada clave puede tener cualquier valor
}

// Definición de las props para el componente
interface BasicTableProps {
  data: Data[]; // Array de objetos que contiene los datos a mostrar en la tabla
  columns: { Header: string; accessor: string }[]; // Define las columnas de la tabla, con un encabezado y un accesor para identificar la clave de los datos
  perPage: number; // Número de resultados a mostrar por página
}

const BasicTable: React.FC<BasicTableProps> = ({ data, columns, perPage }) => {
  const [currentPage, setCurrentPage] = useState(1); // Estado para rastrear la página actual
  const [selectedRow, setSelectedRow] = useState<Data | null>(null); // Estado para almacenar la fila seleccionada para ver detalles

  // Calcula el índice de inicio y fin de los datos para la página actual
  const indexOfLastItem = currentPage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem); // Obtiene los elementos de la página actual

  // Calcula el número total de páginas
  const totalPages = Math.ceil(data.length / perPage);

  // Función para cambiar de página
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page); // Actualiza la página actual si está dentro de los límites
    }
  };

  // Manejador de clic para el botón "Abrir" que abre el modal con los detalles de la fila seleccionada
  const handleOpen = (row: Data) => {
    setSelectedRow(row); // Establece la fila seleccionada en el estado
  };

  // Manejador para cerrar el modal
  const handleClose = () => {
    setSelectedRow(null); // Limpia la fila seleccionada al cerrar el modal
  };

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Tabla de Datos</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                {/* Nueva columna de Acción para contener botones de interacción */}
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acción
                </th>
                {/* Genera las columnas dinámicamente basado en el array columns */}
                {columns.map(column => (
                  <th
                    key={column.accessor}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {column.Header} {/* Muestra el encabezado de la columna */}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Mapea cada fila de los elementos actuales (página actual) */}
              {currentItems.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {/* Celda de la columna de Acción con un botón para abrir el modal */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    <Button
                      onClick={() => handleOpen(row)} // Llama a handleOpen cuando se hace clic en el botón
                      className="px-4 py-2 bg-blue-500 text-white rounded"
                    >
                      <IoMdOpen /> {/* Ícono para indicar que la acción abrirá detalles */}
                    </Button>
                  </td>
                  {/* Mapea las celdas de datos según las columnas definidas */}
                  {columns.map(column => (
                    <td
                      key={column.accessor}
                      className={`px-6 py-4 whitespace-pre-wrap text-sm font-medium text-gray-900 ${
                        column.accessor === 'body' ? 'break-words' : ''
                      }`}
                    >
                      {row[column.accessor]} {/* Muestra el valor correspondiente de la fila */}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Navegación entre páginas */}
        <div className="mt-4 flex justify-between items-center">
          <Button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1} className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 w-1/5 flex items-center justify-center">
            <MdArrowBackIos className="mr-2" /> <span>Anterior</span> {/* Botón de página anterior */}
          </Button>
          <span className="text-sm">
            Página {currentPage} de {totalPages} {/* Muestra la página actual y el total */}
          </span>
          <Button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages} className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 w-1/5 flex items-center justify-center">
            <span>Siguiente</span> <MdNavigateNext className="ml-2" /> {/* Botón de página siguiente */}
          </Button>
        </div>
      </div>

      {/* Modal que muestra los detalles de la fila seleccionada */}
      <Modal
        isOpen={selectedRow !== null} // Abierto si hay una fila seleccionada
        onClose={handleClose} // Llama a handleClose para cerrar el modal
        title="Detalles del Dataset" // Título del modal
      >
        {/* Renderiza los detalles de la fila seleccionada o un mensaje si no hay datos */}
        {selectedRow ? (
          <div>
            <h4 className="text-lg font-semibold">Detalle:</h4>
            <pre>{JSON.stringify(selectedRow, null, 2)}</pre> {/* Muestra los detalles en formato JSON */}
            <div>Dataset: <b>https://www.datos.gov.co/en/Ciencia-Tecnolog-a-e-Innovaci-n/INSTITUCIONES-EDUCATIVAS-OFICIALES-DE-MUNICIPIOS-D/xrdq-pb8b/about_data</b></div>
          </div>
        ) : (
          <p>No hay datos disponibles.</p>
        )}
      </Modal>
    </div>
  );
};

export default BasicTable;
