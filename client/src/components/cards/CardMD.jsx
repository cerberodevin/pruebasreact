/*
Este componente es un ejemplo de como serian las cards, cada card viene con un tamaño y funcionalidad diferente
entonces existiran varios componentes cards
Ejemplo: Card1 = card mediana, Card2 = card grande, MediaCard = card de videos y fotos grandes


TODO: faltaria observar la logica de como se pueden almacenar y pintar la informacion de cada card
TODO: Cada card pertenece a un link y ese link pertenece a varios links que el usuario tiene almacenado, con su configuracion propia

* data dummie
links: [
  {link_id: '00-00, cards_order:
   [
    {card_id: '001': style: {color: 'white', bg:'#000000', cardLogo: 'lover'}, 
    {card_id: '001': style: {color: 'white', bg:'#000000'}
    ]}
  ]}
]
*/

import loyalfansLogo from "/plataformas/LOYALFANS/LOYALFANS_BLANCO.png";
import onlyfanslogo from "/plataformas/ONLYFANS/ONLYFANS_BLANCO.png";

// TODO: Componente en construcccion

// eslint-disable-next-line react/prop-types
export default function CardMD({ cardLogo }) {
  return (
    <div className="sm:h-16 sm:rounded-lg flex items-center bg-COLOR-1">
      {cardLogo == "loyal" && (
        <a href="https://www.loyalfans.com/goddess_isabela" target="_blank">
          <img className="p-2" src={loyalfansLogo} alt="" />
        </a>
      )}
      {cardLogo == "only" && (
        <a href="">
          <img className="p-2" src={onlyfanslogo} alt="" />
        </a>
      )}
    </div>
  );
}

// TODO: Componente en construcccion
