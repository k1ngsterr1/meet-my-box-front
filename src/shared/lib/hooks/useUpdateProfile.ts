import { axiosInstance } from "./useInterceptor";

interface IProfileData {
  lastName: string;
  firstName: string;
  lastNameLatin: string;
  firstNameLatin: string;
  phoneNumber: string;
  email: string;
  postalCode: string;
  country: string;
  city: string;
  street: string;
  building: string;
  apartment: string;
  intercomName: string;
  whatsapp: string;
}

export async function useUpdateProfile(data: IProfileData): Promise<string> {
  try {
    const response = await axiosInstance.patch("api/user/update/profile", data);

    const updatedData = {
      ...response.data,
    };

    localStorage.setItem("userProfile", JSON.stringify(updatedData));
    return "Profile updated successfully";
  } catch (error: unknown | any) {
    console.error("Failed to update profile:", error);
    if (error.response) {
      return error.response.data.message;
    } else {
      return "An unexpected error occurred while updating the profile";
    }
  }
}
