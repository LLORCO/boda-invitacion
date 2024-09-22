import React from "react";

const Confirmacion = () => {
  return (
    <div>
      <section className="py-10 bg-white text-center" data-aos="fade-up">
        <h2 className="text-3xl font-semibold text-gray-800">RSVP</h2>
        <p className="mt-4 text-gray-600">
          Por favor, confirma tu asistencia antes del 10 de enero de 2025.
        </p>
        <button className="mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
          Confirmar Asistencia
        </button>
      </section>
    </div>
  );
};

export default Confirmacion;
