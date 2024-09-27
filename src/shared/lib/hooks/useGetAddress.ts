import type { AddressProps } from "@features/AddressesCard";
import { axiosInstance } from "./useInterceptor";
import type { ApplicationProps } from "@features/ApplicationCard";

export async function useGetAddresses(): Promise<AddressProps[]> {
  try {
    const response = await axiosInstance.get("api/address/get-addresses");

    console.log("Addresses got successfully:", response.data);

    return response.data.addresses;
  } catch (error: unknown | any) {
    console.error("Failed to get addresses:", error);
    if (error.response) {
      return [];
    } else {
      return [];
    }
  }
}
