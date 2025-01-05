import React from "react";


const Confirmacion = () => {
  return (
    <div>
      <section className="py-10 text-center" data-aos="fade-up">
        <h2 className="text-3xl font-semibold text-gray-800">Confirmación de Asistencia</h2>
        <p className="mt-4 text-gray-600">
          Te pedimos que confirmes tu asistencia antes del 10 de enero de 2025 para poder organizar todo de la mejor manera posible.
        </p>
        <button className="mt-6 px-8 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:bg-blue-600">
          Confirmar Asistencia
        </button>
      </section>
    </div>
  );
};

export default Confirmacion;
