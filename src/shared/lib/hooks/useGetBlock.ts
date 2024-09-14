import axios from "axios";
export const baseUrl = "http://localhost:1337";
export async function useGetBlock(
  url: string,
  isProcess?: boolean
): Promise<any> {
  try {
    const api_url = baseUrl + url;
    const params = {
      populate: isProcess
        ? { image_card: { populate: "image" }, questions: { populate: "*" } }
        : "*",
    };
    const response = await axios.get(api_url, {
      params: params,
      headers: {
        Authorization:
          "Bearer 3745ab41282b954cad08e723fe57c338f17705fff0d408e754d4701dbc6885dbe804025db9382d19f8d5be97c48d512022560d1e742d11f6c40be490f389c8a4037169f4accea23e1a74ae21fc2890d1ae0177fb5d65bcd4ab8752f260e17130f1971643ded6791af388f1b3bdd1f1c95f56c3f8e292b4e6f6bbd49d535d4147",
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
