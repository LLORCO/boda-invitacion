import React from "react";
import { GiChurch } from "react-icons/gi";
import { PiCheersThin } from "react-icons/pi";


const Detalles = () => {
  return (
    <div>
      <section className="py-10 px-4" data-aos="fade-up">
        <h2 className="text-4xl font-parisienne text-center">
          Detalles del Evento
        </h2>

        <div className="mt-6 max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          {/* Ceremonia en la iglesia */}
          <div
            className="bg-white p-6 rounded-lg shadow-lg"
            data-aos="fade-right"
          >
            <h3 className="text-2xl font-parisienne text-gray-800">
              Ceremonia en la Iglesia
            </h3>
            <p className="text-4xl font-bold text-gray-800 flex justify-center py-5">
                <GiChurch />
            </p>
            <p className="mt-4 font-cormorant italic text-gray-600">
              La ceremonia religiosa se llevará a cabo en la Iglesia de
              Guadalupe Enriquez a la 1:00 PM.
            </p>
            <p className="mt-2 text-gray-600">
              Dirección: 75475 Guadalupe Enríquez, Pue.
            </p>
          </div>

          {/* Fiesta de Celebración */}
          <div
            className="bg-white p-6 rounded-lg shadow-lg"
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-parisienne text-gray-800">
              Fiesta de Celebración
            </h3>
            <p className="text-4xl font-bold text-gray-800 flex justify-center py-5">
            <PiCheersThin />
            </p>
            <p className="mt-4 font-cormorant italic text-gray-600">
              La fiesta tendrá lugar en el Salón La Fundicion a las 3:00 PM.
            </p>
            <p className="mt-2 text-gray-600">
              Dirección: San Martin de Porres, Centro, 75480 Tecamachalco, Pue.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Detalles;
