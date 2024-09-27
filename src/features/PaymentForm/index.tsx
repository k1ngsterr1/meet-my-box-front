import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// Initialize Stripe with your publishable key
const stripePromise = loadStripe(
  "pk_test_51Q142VRwuyHMOHJmXMXfDSCue1q8w6lFH6ifjxdP7NvCeEp2wraU4HcauvAF4YxUgCJN3ZAmlGWecz0Cu4xcv8xx00ylvLtl8B"
);

// Create a React component that handles payment confirmation
export const PaymentForm = ({ clientSecret }: { clientSecret: string }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // Get a reference to the card element
    const cardElement = elements.getElement(CardElement);

    // Check if the card element is available
    if (!cardElement) {
      console.error("CardElement not found.");
      return;
    }

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement, // This is now safe because `cardElement` is not `null`
        billing_details: {
          name: "Test User", // Optional: Include billing details if available
        },
      },
    });

    if (result.error) {
      console.error(result.error.message);
    } else if (
      result.paymentIntent &&
      result.paymentIntent.status === "succeeded"
    ) {
      console.log("Payment successful!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay Now
      </button>
    </form>
  );
};
