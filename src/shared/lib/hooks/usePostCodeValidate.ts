import axios from "axios";

export const validatePostcode = async (
  country: string,
  postcode: string | number
) => {
  try {
    const response = await axios.get(
      `https://app.zipcodebase.com/api/v1/search?apikey=d25cf550-74c4-11ef-96f2-038e3c212ee9&codes=${postcode}&country=${country}`
    );

    if (
      response.data &&
      response.data.results &&
      response.data.results[postcode] &&
      response.data.results[postcode].length > 0
    ) {
      console.log("Valid postcode:", postcode);
      return true;
    } else {
      console.log("Invalid postcode:", postcode);
      return false; // Postcode is not valid
    }
  } catch (error) {
    console.error("Error validating postcode:", error);
    return false; // Handle error case
  }
};
