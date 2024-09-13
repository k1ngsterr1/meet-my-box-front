import type { PackageProps } from "@entities/Packages";
import { axiosInstance } from "./useInterceptor";

export async function useGetPackages(): Promise<PackageProps[]> {
  try {
    const response = await axiosInstance.get("/api/user/admin/applications");

    console.log("Applications got successfully:", response.data);

    return response.data.items;
  } catch (error: unknown | any) {
    console.error("Failed to get applications:", error);
    if (error.response) {
      return [];
    } else {
      return [];
    }
  }
}
