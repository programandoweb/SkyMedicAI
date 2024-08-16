import React from 'react';

import { Button } from "@/components/ui/button"

interface ModalProps {
  isOpen: boolean; // Estado para controlar si el modal está abierto o cerrado
  onClose: () => void; // Función para cerrar el modal
  title?: string; // Título opcional del modal
  children: React.ReactNode; // Contenido del modal
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-50" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg w-3/4 h-3/4 max-w-4xl max-h-4xl">
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="text-lg font-semibold">{title}</h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="p-4 h-full overflow-auto">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
