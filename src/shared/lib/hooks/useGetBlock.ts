import axios from "axios";
// export const baseUrl = "https://strapi-meet-my-box-production.up.railway.app";

export const baseUrl = "http://localhost:1337";
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
          "Bearer 10e2709a91ac445c1b971a25fae69894b61b077d1531752a6591baae5741ebe7344a575b5de1779a7911b960203d17079f644f4e99b940df25187d0b6366bb48fa6c9abe5b7c3b275c7f12dc5c2a88869fdb31848c1ee586fd490d656c28e4b9625bcc549a7d37df9a40415d1bcf3be5b351f7a019c35e487daf5e1e2637daca",
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
