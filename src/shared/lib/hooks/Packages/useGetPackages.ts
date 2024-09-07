import type { PackageProps } from "@entities/Packages";
import { axiosInstance } from "../useInterceptor";

export async function useGetPackages(): Promise<PackageProps[]> {
  try {
    const userData = JSON.parse(localStorage.getItem("userData") || "{}");

    const response = await axiosInstance.get("/api/packages/get-packages", {
      headers: {
        Authorization: `Bearer ${userData.access}`,
      },
    });

    console.log("Packages got successfully:", response.data);

    return response.data.items;
  } catch (error: unknown | any) {
    console.error("Failed to get packages:", error);
    if (error.response) {
      return [];
    } else {
      return [];
    }
  }
}
