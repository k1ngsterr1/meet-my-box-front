import axios from "axios";

export const validatePostcode = async (
  country: string,
  postcode: number | string
) => {
  try {
    const response = await axios.get(
      `https://api.zippopotam.us/${country}/${postcode}`
    );
    return true;
  } catch (error) {
    return false;
  }
};
