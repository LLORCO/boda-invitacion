import React from 'react';

const Invitation = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sección de bienvenida */}
      <section className="text-center py-10 bg-white" data-aos="fade-up">
        <h1 className="text-5xl font-bold text-gray-800">Iván & Sarahí</h1>
        <p className="mt-4 text-lg text-gray-600">¡Estamos encantados de invitarte a nuestra boda!</p>
        <p className="mt-2 text-lg">25 de enero de 2025</p>
      </section>

      {/* Detalles de la boda */}
      <section className="py-10 bg-gray-200" data-aos="fade-up">
        <h2 className="text-3xl font-semibold text-center">Detalles del Evento</h2>

        <div className="mt-6 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ceremonia en la iglesia */}
          <div className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-right">
            <h3 className="text-2xl font-bold text-gray-800">Ceremonia en la Iglesia</h3>
            <p className="mt-4 text-gray-600">La ceremonia religiosa se llevará a cabo en la Iglesia de Guadalupe Enriquez a la 1:00 PM.</p>
            <p className="mt-2 text-gray-600">Dirección: 75475 Guadalupe Enríquez, Pue.</p>
          </div>

          {/* Fiesta de Celebración */}
          <div className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-left">
            <h3 className="text-2xl font-bold text-gray-800">Fiesta de Celebración</h3>
            <p className="mt-4 text-gray-600">La fiesta tendrá lugar en el Salón La Fundicion a las 3:00 PM.</p>
            <p className="mt-2 text-gray-600">Dirección: San Martin de Porres, Centro, 75480 Tecamachalco, Pue.</p>
          </div>
        </div>
      </section>

      {/* Sección de confirmación */}
      <section className="py-10 bg-white text-center" data-aos="fade-up">
        <h2 className="text-3xl font-semibold text-gray-800">RSVP</h2>
        <p className="mt-4 text-gray-600">Por favor, confirma tu asistencia antes del 10 de enero de 2025.</p>
        <button className="mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
          Confirmar Asistencia
        </button>
      </section>
    </div>
  );
};

export default Invitation;
