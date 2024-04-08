import { appConfig } from "@/config";
import { ResponseNytApi } from "@/types/article";
import axios from "axios";

const URLS = {
  nytUrl: (key: string) => `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${key}`,
};
function createApiClient() {
  const axiosConfig = {
    withCredentials: false,
  };
  const acxiosClient = axios.create(axiosConfig);
  return acxiosClient;
}

export const api = {
  async getArticles() {
    try {
      const { data } = await createApiClient().get<ResponseNytApi>(
        URLS.nytUrl(appConfig.nykt_api_key)
      );
      if (data.results) return data.results;
      throw new Error("No articles found");
    } catch (error) {
      console.log("Error in the getArticles service", error);
      return [];
    }
  },
};
