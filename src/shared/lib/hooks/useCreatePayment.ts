import { axiosInstance } from "./useInterceptor";

export async function useCreatePayment(): Promise<any> {
  try {
    // Step 1: Retrieve the packageId from localStorage
    const packageId = localStorage.getItem("packageId");
    if (!packageId) {
      return "Package ID not found in localStorage";
    }

    // Parse the packageData from localStorage
    const parsedPackage = JSON.parse(packageId);

    // Step 3: Calculate the total amount from the `items` array
    const totalAmount = parsedPackage.items.reduce(
      (sum: number, item: { cost: number }) => {
        return sum + item.cost;
      },
      0
    ); // Initialize sum to 0

    // Step 4: Send a POST request to create a new payment order with the calculated amount
    const response = await axiosInstance.post("/api/user/payment/create", {
      amount: totalAmount, // Pass the total amount in the request body
    });
    console.log(
      "Worked",
      response.data.result.client_secret,
      response.data.result.amount
    );
    // ! Поставить на место
    //  amount: response.data.result.amount / 100,
    return {
      client_secret: response.data.result.client_secret,
      amount: response.data.result.amount / 100,
    }; // Return the response from the backend
  } catch (error: unknown) {
    console.error("Failed to create payment:", error);

    return "Error";
  }
}
