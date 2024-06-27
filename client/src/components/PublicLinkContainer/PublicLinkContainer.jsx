/*
Componente que contiene los links publicos
Se contiene en un componente aparte para poder modificar el background de cada link
*/

import { useParams } from "react-router-dom";
import DefaultLink from "../Links/DefaultLink";

export default function PublicLinkContainer() {
  /*
  este componente hace la peticion de la API para traer los estilos de los links
  se reenderizan los links dependiendo del id
  */
  const { linkId } = useParams();
  /*
  se busca con los parametros en la DB y se extrae la info necesaria
  */

  // * Dumie Data

  let userData = {
    id: "00-00",
    userName: "Juan",
    links: {
      linkId: "01",
      linkName: "My link",
      linkDesign: {
        bg: "default",
        logo: "loyal",
        blur: false,
      },
      card: {
        bg: "",
        logo: "only",
      },
      socialMedia: [{ name: "x" }, { name: "facebook" }],
    },
  };

  // * Dumie Data

  return (
    <div className="sm:flex sm:m-auto">
      {linkId == "01" && <DefaultLink userData={userData} />}
    </div>
  );
}
