import { axiosInstance } from "./useInterceptor";

interface IData {
  email: string;
  password: string;
}

export async function useRegister(data: IData): Promise<string> {
  const errorMessages: Record<string, string> = {
    "All fields are required.": "Все поля обязательны для заполнения.",
    "Invalid email address.": "У вас неправильный эмэйл.",
    "Длина пароля должна быть от 8 до 16 символов":
      "Длина пароля должна быть от 8 до 16 символов.",
    "User with this email already exists.":
      "Пользователь с таким эмэйлом уже существует.",
    "Error registering the user.": "Ошибка при регистрации пользователя.",
  };

  try {
    const response = await axiosInstance.post("api/user/register", data);

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
