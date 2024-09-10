import { axiosInstance } from "./useInterceptor";

interface IEmailData {
  name: string;
  phone: string;
  question: string;
}

export async function useMail(data: IEmailData): Promise<void> {
  try {
    const response = await axiosInstance.post("/api/send-email", data);

    console.log("Email sent successfully:", response.data);
  } catch (error: unknown | any) {
    console.error("Failed to send email:", error);
  }
}
