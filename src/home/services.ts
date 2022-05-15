import banner from "app/data/banner.json";
import Axios, { AxiosRequestConfig } from "axios";

const api = Axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL });

const requestConfig: AxiosRequestConfig = {
  headers: {
    Accept: "application/json",
  },
  responseType: "json",
};

export const getHomeBanner = async () => {
  return new Promise((resolve) => {
    resolve(banner);
  });
};

export const getHomeNews = async () => {
  return api.get("", requestConfig);
};

export const structureHomeData = (response: any[]) => {
  const [bannerResponse, newsResponse] = response;
  const newsData = newsResponse.data.News as any[];
  const homeNews = newsData.filter((item) => item.showOnHomepage === "yes");
  const data = {
    ...bannerResponse,
    news: [...homeNews],
  };
  return data;
};
