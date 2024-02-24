import { BASE_URL } from "Project/constants";

export const getUrl = (url: string) => {
  const newUrl = new URL(url, BASE_URL);

  return newUrl.href;
};
