import axios from "axios";

interface IData {
  email: string;
  password: string;
}

export async function useRegister(data: IData): Promise<string> {
  try {
    const response = await axios.post(
      "https://meet-my-box-production.up.railway.app/api/user/register",
      data
    );

    const userData = {
      id: response.data.details.id,
      email: response.data.details.email,
      access: response.data.accessToken,
      refresh: response.data.refreshToken,
    };

    localStorage.setItem("userData", JSON.stringify(userData));
    return "Success";
  } catch (error: unknown | any) {
    console.error("Failed to create data:", error);
    if (error.response) {
      return error.response.data.message;
    } else {
      return "An unexpected error occurred";
    }
  }
}
