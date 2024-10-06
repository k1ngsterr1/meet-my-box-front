import { useUpdatePackage } from "@shared/lib/hooks/Packages/useUpdatePackage";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import "tailwindcss/tailwind.css";

// Create a React component that handles payment confirmation
export const PaymentForm = ({
  clientSecret,
  amount,
}: {
  clientSecret: string;
  amount: number;
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      setErrorMessage("Card information is missing.");
      return;
    }

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: "Test User",
        },
      },
    });

    localStorage.removeItem("weight");
    localStorage.removeItem("rates");
    localStorage.removeItem("packageID");
    localStorage.removeItem("packageId");

    if (result.error) {
      setErrorMessage(result.error.message || "Payment failed.");
      setPaymentStatus("");
    } else if (
      result.paymentIntent &&
      result.paymentIntent.status === "succeeded"
    ) {
      setPaymentStatus("Payment successful! Thank you for your purchase.");
      setErrorMessage("");

      const packageData = localStorage.getItem("packageId");
      const packageId = packageData ? JSON.parse(packageData).id : null;

      // Make sure `packageId` is valid before using it
      if (packageId) {
        console.log(packageId);
        await useUpdatePackage({
          id: packageId, // Use the parsed package ID here
          payed: true,
        });
        localStorage.removeItem("packageId"); // Clear the package ID from localStorage after successful payment
      }
      window.location.href = "/packages";
    }
  };

  return (
    <div className="flex items-center justify-center w-[50%]">
      <div className="w-full max-w-sm p-6 bg-white shadow-md rounded-2xl">
        <h1 className="text-xl font-bold mb-4 text-center">Delivery</h1>
        <p className="text-sm text-gray-600 text-center mb-2">
          Delivery payment with Meet My Box
        </p>
        <div className="flex justify-center items-center mb-6">
          <span className="text-2xl font-semibold text-gray-700">
            € {amount.toFixed(2)}
          </span>
        </div>
        {/* Add autocomplete="off" to the form */}
        <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
          <div className="p-3 border border-gray-300 rounded-lg shadow-sm">
            <CardElement
              options={{
                hidePostalCode: true,
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#32325d",
                    "::placeholder": {
                      color: "#a0aec0",
                    },
                  },
                },
              }}
              className="p-1 text-base"
            />
          </div>
          <button
            type="submit"
            disabled={!stripe}
            className="w-full py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-300 ease-in-out"
          >
            Pay Now
          </button>
        </form>
        {paymentStatus && (
          <p className="text-green-600 text-center mt-4">{paymentStatus}</p>
        )}
        {errorMessage && (
          <p className="text-red-600 text-center mt-4">{errorMessage}</p>
        )}
      </div>
    </div>
  );
};
