import { jwtDecode } from "jwt-decode";
export const checkAuth = (): boolean => {
  const token = localStorage.getItem("userData")
    ? JSON.parse(localStorage.getItem("userData") as string).access
    : null;
  if (!token) {
    window.location.href = "/login";
    return false;
  }

  try {
    const decodedToken: { exp: number } = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    if (decodedToken.exp < currentTime) {
      localStorage.removeItem("access");
      window.location.href = "/login";
      return false;
    }
  } catch (error) {
    console.error("Ошибка при проверке токена:", error);
    window.location.href = "/login";
    return false;
  }

  return true;
};
