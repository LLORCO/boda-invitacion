import React from "react";

const Bienvenida = () => {
  return (
    <div>
      <section className="text-center py-10" data-aos="fade-up">
        <h1 className="font-alex-brush text-8xl text-gray-800">Sarahí & Iván</h1>
        
        <div className="flex justify-center my-8">
          <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg">
            <img className="w-full" src="/src/assets/Novios.jpg" alt="Novios" />
          </div>
        </div>
       
        <h2 className="font-parisienne text-4xl text-gray-800">
          ¡Nos Casamos!
        </h2>
        <p className="font-cormorant mt-4 text-lg text-gray-600">
          ¡Hola! Somos Sarahí e Iván, y estamos muy emocionados de celebrar
          nuestra unión contigo.
        </p>
        <p className="font-cormorant italic mt-4 text-lg text-gray-600">
          ¡Estamos encantados de invitarte a nuestra boda!
        </p>
        <p className="font-nunito mt-2 text-lg">25 DE ENERO DE 2025</p>
      </section>
    </div>
  );
};

export default Bienvenida;
