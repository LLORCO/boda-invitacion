import { GiChurch } from "react-icons/gi";
import { PiCheersThin } from "react-icons/pi";

import fondo from "../public/s3.jpg";
import fondoVino from "../public/fondoVino.jpg";
import brillosDorados from "../public/brillosDorados.png";
import Novios from "../public/Novios.jpg";

const BannerImg = {
  backgroundImage: `url(${fondo})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "repeat",
  backgroundSize: "cover",
  height: "100%",
  widht: "100%",
};
const BannerImgVino = {
  backgroundImage: `url(${fondoVino})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "repeat",
  backgroundSize: "cover",
  height: "100%",
  widht: "100%",
};

function App() {
  return (
    <div
      style={BannerImgVino}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Imágenes decorativas */}

      {/* Contenido principal */}
      <div
        className="relative z-10 p-8 bg-opacity-80 rounded-lg shadow-lg max-w-3xl mx-auto"
        style={BannerImg}
      >
        {/* Banner */}
        <img
          src={brillosDorados}
          alt="brillosDorados.png"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 opacity-50"
        />
        {/* Bienvenida */}
        <div>
          <section className="text-center py-10" data-aos="fade-up">
            <h1 className="font-alex-brush text-8xl text-[#916461]">
              Sarahí & Iván
            </h1>

            <div className="flex justify-center my-8">
              <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg">
                <img className="w-full" src={Novios} alt="Novios.jpg" />
              </div>
            </div>

            <h2 className="font-parisienne text-4xl text-[#b38b5a]">
              ¡Nos Casamos!
            </h2>
            <p className="font-cormorant mt-4 text-lg text-gray-600">
              ¡Hola! Somos Sarahí e Iván, y estamos muy emocionados de celebrar
              nuestra unión contigo.
            </p>

            <div className="mt-6 max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              {/* Padres de la Novia */}
              <div
                className="bg-white p-6 rounded-lg shadow-lg"
                data-aos="fade-right"
              >
                <h3 className="text-2xl font-parisienne text-[#b38b5a]">
                  Padres de la Novia
                </h3>
                <p className="mt-4 font-cormorant italic text-gray-600">
                  Lourdes Carrera Fidencio
                </p>
                <p className="mt-2 font-cormorant italic text-gray-600">
                  Israel Jimenez Reyes
                </p>
              </div>

              {/* Padres del Novio */}
              <div
                className="bg-white p-6 rounded-lg shadow-lg"
                data-aos="fade-left"
              >
                <h3 className="text-2xl font-parisienne text-[#b38b5a]">
                  Padres del Novio
                </h3>
                <p className="mt-4 font-cormorant italic text-gray-600">
                  María Isabel Castellanos Leandro
                </p>
                <p className="mt-2 font-cormorant italic text-gray-600">
                  Gumercindo Hernández Guerrero{" "}
                  <span className="text-[#b38b5a]">✝</span>
                </p>
              </div>
            </div>

            <div className="mt-6 max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-8 text-center md:max-w-[350px]">
              {/* Padrinos */}
              <div
                className="bg-white p-6 rounded-lg shadow-lg"
                data-aos="fade-up"
              >
                <h3 className="text-2xl font-parisienne text-[#b38b5a]">
                  Padrinos
                </h3>
                <p className="mt-4 font-cormorant italic text-gray-600">
                  Adriana Carrera Méndez
                </p>
                <p className="mt-2 font-cormorant italic text-gray-600">
                  Israel Castro Santos
                </p>
              </div>
            </div>

            <p className="font-cormorant italic mt-4 text-lg text-gray-600">
              ¡Estamos encantados de invitarte a nuestra boda!
            </p>
            <p className="font-nunito mt-2 text-lg">25 DE ENERO DE 2025</p>
          </section>
        </div>
        {/* Detalles */}
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
                  Guadalupe Enriquez a la 4:00 PM.
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
                  La fiesta tendrá lugar en el Salón La Fundicion a las 6:00 PM.
                </p>
                <p className="mt-2 text-gray-600">
                  Dirección: San Martin de Porres, Centro, 75480 Tecamachalco,
                  Pue.
                </p>
              </div>
            </div>

            <div className="mt-6 max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-8 text-center md:max-w-[350px]">
              {/*dress code*/}
              <div
                className="bg-white p-6 rounded-lg shadow-lg"
                data-aos="fade-left"
              >
                <h3 className="text-2xl font-parisienne text-gray-800">
                  Código de vestimenta
                </h3>
                <p className="mt-4 font-cormorant italic text-gray-600">
                  Ropa Formal/Libre de Cena
                </p>
              </div>
            </div>
          </section>
        </div>
        {/* Confirmación */}
        <div>
          <section className="py-10 text-center" data-aos="fade-up">
            <h2 className="text-3xl font-parisienne text-gray-800">
              Confirmación de Asistencia
            </h2>
            <p className="mt-4 font-cormorant text-gray-600">
              Te pedimos que confirmes tu asistencia antes del 10 de enero de
              2025 para poder organizar todo de la mejor manera posible.
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <button
                className="px-8 py-3 bg-gray-800 text-white font-cormorant italic rounded-full shadow-lg hover:bg-gray-700"
                onClick={() =>
                  (window.location.href = "https://wa.me/2221234567")
                }
              >
                Confirmar con el Novio
              </button>
              <button className="px-8 py-3 bg-gray-800 text-white font-cormorant italic rounded-full shadow-lg hover:bg-gray-700"
              onClick={() =>
                (window.location.href = "https://wa.me/2491784903")
              }
              >
                Confirmar con la Novia
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
