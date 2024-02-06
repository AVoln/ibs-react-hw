import axios from "axios";
import { ICard, ICardInfo } from "Project/globalTypes";
import { getUrl } from "Project/utils/getUrl";

export const getCards = () => {
  return axios.get<string, { data: { content: ICard[] } }>(getUrl("/cards"));
};

export const getCard = (id: string) => {
  return axios.get<string, { data: { content: ICardInfo } }>(
    getUrl(`/cards/${id}`)
  );
};
