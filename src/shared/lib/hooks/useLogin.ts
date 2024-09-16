import { axiosInstance } from "./useInterceptor";

interface IData {
  email: string;
  password: string;
}

export async function useLogin(data: IData): Promise<string> {
  const errorMessages: Record<string, string> = {
    "Invalid email address.": "У вас неправильный эмэйл.",
    "Длина пароля должна быть от 8 до 16 символов":
      "Длина пароля должна быть от 8 до 16 символов.",
    "User not found.": "Пользователь не найден.",
    "Error login the user.": "Ошибка при входе пользователя.",
    "Неверный пароль!": "Неверный пароль!",
  };

  try {
    const response = await axiosInstance.post("api/user/login", data);

    const userData = {
      id: response.data.id,
      email: response.data.email,
      access: response.data.accessToken,
      refresh: response.data.refreshToken,
    };

    localStorage.setItem("userData", JSON.stringify(userData));
    return "Success";
  } catch (error: unknown | any) {
    console.error("Failed to create data:", error);
    if (error.response) {
      const serverMessage = error.response.data.message;
      return (
        errorMessages[serverMessage] ||
        "Произошла ошибка. Пожалуйста, попробуйте позже."
      );
    } else {
      return "Произошла неожиданная ошибка";
    }
  }
}
