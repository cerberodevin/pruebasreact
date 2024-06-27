/*
Este componente es el que reenderiza las redes sociales
TODO: faltaria implementar una funcion que me traiga la imagen dependiendo de los parametros enviados
TODO: deveria de haber un limite de iconos en el componente y que se puedan eliminar y agregar las redes sociales
TODO: faltaria organizar los datos de los iconos separados por su estilo, y que se puedan llamar de una manera mas sencilla
*/

import { useState, useEffect } from "react";
import faceBookIcon1 from "/iconos_social_media/2/FACEBOOK_ICON2.svg";
import xIcon1 from "/iconos_social_media/2/X_ICON2.svg";
import instagramIcon1 from "/iconos_social_media/2/INSTAGRAM_ICON2.svg";

// TODO: Componente en construcccion

const icons1 = {
  facebook: faceBookIcon1,
  x: xIcon1,
  instagram: instagramIcon1,
};

// eslint-disable-next-line react/prop-types
export default function SocialMedia({ socialData }) {
  /*
	este componente contiene las redes sociales
	se debe de hacer la logica de un limite de redes, tambien que se vaya agregando a medida que se van seleccionando
	*/
  const [socialMedia, setSocialMedia] = useState([]);

  useEffect(() => {
    if (socialData) {
      setSocialMedia(socialData);
    }
  }, [socialData]);

  return (
    <div className="sm:h-12 sm:flex sm:items-center justify-center sm:rounded-lg bg-COLOR-1">
      {socialMedia.map((social, index) => (
        <div key={index}>
          <img
            src={icons1[social.name]}
            alt={`${social.name} Icon`}
            className="w-5"
          />
        </div>
      ))}
    </div>
  );
}

// TODO: Componente en construcccion
