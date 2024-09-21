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
          "Bearer 36a8e9db00ed298bbb653a708196a7dd1cf3c0038bb8dcdf4aba9096cacb81df6e7b33f7aea14430f9ca9e53936bc662e00268c3d5426460016eb50dcd849f3799ccb1c3dcbda8ecd27c2694bbef309107049eb171b62eee36276809ffeecbee5db635d0a7ac433876e576494ab581cace13643c028bf5299b5d41d218356ed3",
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
