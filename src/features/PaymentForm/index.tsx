import { useUpdatePackage } from "@shared/lib/hooks/Packages/useUpdatePackage";
import { useSendEmail } from "@shared/lib/hooks/useSendEmail";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import "tailwindcss/tailwind.css";

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
  const [couponCode, setCouponCode] = useState<string>(""); // Track promo code input
  const [discount, setDiscount] = useState<number>(0); // Track discount

  // Handle promo code validation
  const handleApplyPromoCode = async () => {
    try {
      const response = await fetch("/api/apply-promo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ couponCode }),
      });
      const data = await response.json();

      if (data.valid) {
        setDiscount(data.discountAmount);
        setErrorMessage(null);
      } else {
        setErrorMessage("Invalid promo code.");
      }
    } catch (error) {
      setErrorMessage("Failed to apply promo code.");
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      setErrorMessage("Card information is missing.");
      return;
    }

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: { name: "Test User" },
      },
    });

    if (result.error) {
      setErrorMessage(result.error.message || "Payment failed.");
      setPaymentStatus(null);
    } else if (result.paymentIntent?.status === "succeeded") {
      setPaymentStatus("Payment successful! Thank you.");
      const packageId = JSON.parse(
        localStorage.getItem("packageId") || "{}"
      ).id;

      if (packageId) {
        await useUpdatePackage({ id: packageId, payed: true });
        await useSendEmail({ packageId });
        localStorage.removeItem("packageId");
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
            € {(amount - discount).toFixed(2)}
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
          <div className="p-3 border border-gray-300 rounded-lg shadow-sm">
            <CardElement
              options={{
                hidePostalCode: true,
                style: { base: { fontSize: "16px", color: "#32325d" } },
              }}
              className="p-1 text-base"
            />
          </div>

          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Promo code"
              value={couponCode}
              name="couponCode"
              onChange={(e) => setCouponCode(e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded-md"
            />
            <button
              type="button"
              onClick={handleApplyPromoCode}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Apply
            </button>
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

export default PaymentForm;
