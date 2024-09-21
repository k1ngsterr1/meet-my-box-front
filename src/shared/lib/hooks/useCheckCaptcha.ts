import axios from "axios";

const secretKey = "6Lec6UoqAAAAAMdcYjWknHckb6X9ysmFB-E9-Y_c"; // Replace with your secret key

export async function useCheckCaptcha(captchaToken: any) {
  const response = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify`,
    null,
    {
      params: {
        secret: secretKey,
        response: captchaToken,
      },
    }
  );

  return response.data.success;
}
