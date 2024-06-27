/* eslint-disable react/prop-types */
/*
* Componente de toda la data del link
- diseño e informacion de los links

*/
import CardMD from "../cards/CardMD";
import SocialMedia from "../cards/SocialMedia";

export default function DefaultLink({ userData }) {
  return (
    <div className="sm:pt-9 sm:m-auto sm:w-[100%] bg-COLOR-2">
      <div className="sm:flex sm:flex-col sm:items-center">
        <img
          className="sm:h-16 sm:w-16 sm:rounded-lg"
          src="https://e7.pngegg.com/pngimages/981/645/png-clipart-default-profile-united-states-computer-icons-desktop-free-high-quality-person-icon-miscellaneous-silhouette.png"
          alt=""
        />
        <p>{userData.userName}</p>
        <p>User description</p>
      </div>

      <div className="sm:flex sm:justify-center gap-2">
        <div className="sm:flex sm:flex-col gap-2 w-36">
          <SocialMedia socialData={userData.links.socialMedia} />
          <CardMD cardLogo={userData.links.card.logo} />

          <div className="bg-COLOR-1">3</div>
          <div className="bg-COLOR-1">3</div>
          <div className="bg-COLOR-1">3</div>
        </div>
        <div className="sm:flex sm:flex-col gap-2 w-36">
          <div className="h-20 bg-COLOR-1">4</div>
          <div className="bg-COLOR-1">5</div>
          <CardMD cardLogo={userData.links.card.logo} />
          <CardMD cardLogo={userData.links.card.logo} />
        </div>
      </div>
    </div>
  );
}
