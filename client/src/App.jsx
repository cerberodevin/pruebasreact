/*
Componente App principal

- Componentes principales en la aplicacion
- Rutas de redireccion a otros componentes
*/

import { Routes, Route } from "react-router-dom";

import Landing from "./components/Landing/Landing";
import PublicLinkContainer from "./components/PublicLinkContainer/PublicLinkContainer";
import Error404 from "./components/Error/Error404";

export default function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* 
        Con esta ruta se nos pinta la informacion publica del link que el usuario comparte
        NOTA: Son datos y componentes dummies que aun estan en construccion
        http://localhost:5173/link/01/01


        */}
        <Route path="/link/:userId/:linkId" element={<PublicLinkContainer />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}
