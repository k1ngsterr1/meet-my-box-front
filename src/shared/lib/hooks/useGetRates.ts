import { axiosInstance } from "./useInterceptor";

export async function useGetRates(data: any): Promise<any> {
  try {
    const response = await axiosInstance.post("/api/rates/get-rates", data);

    console.log("Profile got successfully:", response.data);

    return response.data.rates;
  } catch (error: unknown | any) {
    console.error("Failed to get rates:", error);
    if (error.response) {
      return "Error";
    } else {
      return "Error";
    }
  }
}
