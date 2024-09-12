import axios from "axios";

interface IData {
  email: string;
  password: string;
}

export async function useLogin(data: IData): Promise<string | void> {
  try {
    const response = await axios.post(
      "https://meet-my-box-production.up.railway.app/api/user/login",
      data
    );

    const userData = {
      id: response.data.id,
      email: response.data.email,
      access: response.data.accessToken,
      refresh: response.data.refreshToken,
    };

    localStorage.setItem("userData", JSON.stringify(userData));
  } catch (error: unknown | any) {
    console.error("Failed to create data:", error);
    if (error.response) {
      return error.response.data.message;
    } else {
      return "An unexpected error occurred";
    }
  }
}
