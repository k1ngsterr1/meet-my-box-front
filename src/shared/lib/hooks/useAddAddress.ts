import { axiosInstance } from "./useInterceptor";

interface IAddressData {
  userId?: number;
  type: "receiver" | "sender";
  full_name: string;
  mobile_number: string;
  street: string;
  house: string;
  building: string;
  apartment: string;
  city: string;
  postal_code: string;
}

export async function useAddAddress(data: IAddressData): Promise<string> {
  try {
    const userData = JSON.parse(localStorage.getItem("userData") || "{}");
    console.log(userData.id);
    data.userId = userData.id;
    console.log(data);

    const response = await axiosInstance.post("/api/address/add", data, {
      headers: {
        Authorization: `Bearer ${userData.access}`,
      },
    });

    console.log("Address added successfully:", response.data);

    return "Success";
  } catch (error: unknown | any) {
    console.error("Failed to add address:", error);
    if (error.response) {
      return error.response.data.message;
    } else {
      return "An unexpected error occurred";
    }
  }
}
