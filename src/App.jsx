import Bienvenida from "./components/Bienvenida";
import Confirmacion from "./components/Confirmacion";
import Detalles from "./components/Detalles";

import fondo from "../src/assets/s3.jpg"

const BannerImg = {
  backgroundImage: `url(${fondo})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "repeat",
  backgroundSize: "cover",
  height: "100%",
  widht: "100%",
};

function App() {
  return (
    <div style={BannerImg}>
      <Bienvenida />
      <Detalles />
      <Confirmacion />
      <h1 className="font-alex-brush text-4xl">Texto en Alex Brush</h1>
      <h2 className="font-parisienne text-3xl">Texto en Parisienne</h2>
      <p className="font-cormorant text-xl">Texto en Cormorant Garamond</p>
      <span className="font-nunito text-lg">Texto en Nunito</span>
      <p className="font-cormorant italic text-xl">Texto en Cormorant Garamond cursiva</p>
    </div>
  );
}

export default App;
