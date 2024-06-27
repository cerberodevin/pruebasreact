interface ILinkData {
  link_image: string;
  link_url: string;
  name: string;
}

interface ICardsData {
  image: string;
  link_data: ILinkData;
  bg_color: string;
  blur: string;
}

interface ICardsContent {
  card_1: ICardsData;
  card_2: ICardsData;
  card_3: ICardsData;
  card_4: ICardsData;
  card_5: ICardsData;
  card_6: ICardsData;
}

interface ICards {
  card_id: string;
  cards_content: ICardsContent;
}

interface ISiteStyle {
  bg: string;
  bg_icon: string;
}

interface ISites {
  id: string;
  site_name: string;
  site_style: ISiteStyle;
  cards: ICards;
}

interface IUser {
  id: string;
  sites: ISites;
}

let user: IUser;
