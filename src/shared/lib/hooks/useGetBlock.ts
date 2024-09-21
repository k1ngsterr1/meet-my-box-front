import axios from "axios";
export const baseUrl = "https://strapi-meet-my-box-production.up.railway.app";
export async function useGetBlock(
  url: string,
  isProcess?: boolean,
  isNews?: boolean
): Promise<any> {
  try {
    const api_url = baseUrl + url;
    let params: any = {
      populate: "*",
    };
    if (isProcess) {
      params = {
        populate: {
          image_card: { populate: "image" },
          questions: { populate: "*" },
        },
      };
    }
    if (isNews) {
      params = {
        populate: { news_card: { populate: "image" } },
        "pagination[page]": 1,
        "pagination[pageSize]": 1,
        publicationState: "preview",
      };
    }
    const response = await axios.get(api_url, {
      params: params,
      headers: {
        Authorization:
          "Bearer bfd0ef4153c8e54624980b8c5512e0f8bb428cfddd68cb880a94d6d502504e915ce6076ecbe84d29ada63f99d85a69a5cd8454853c94a8bf4ceaf223503e2ab01c199e643636f23627296773a2103e33c506b5bce70e55dc1e3450ac288a78cb31de383da9a0a6c439503078d897e42bdc441d1b60ab8972ac8e18fa8b4338ef",
      },
    });

    console.log("Block got successfully:", response.data.data.attributes);

    return response.data.data.attributes;
  } catch (error: unknown | any) {
    console.error("Failed to get block:", error);
    if (error.response) {
      return [];
    } else {
      return [];
    }
  }
}
