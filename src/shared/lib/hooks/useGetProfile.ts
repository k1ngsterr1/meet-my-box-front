import { axiosInstance } from "./useInterceptor";

export async function useGetProfile(): Promise<any> {
  try {
    const response = await axiosInstance.get("/api/user/get-profile");

    console.log("Profile got successfully:", response.data);

    return response.data.profile;
  } catch (error: unknown | any) {
    console.error("Failed to get profile:", error);
    if (error.response) {
      return [];
    } else {
      return [];
    }
  }
}
