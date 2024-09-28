import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { PaymentForm } from "@features/PaymentForm";
import { Loader } from "../Loader/ui/loader";
import { useCreatePayment } from "@shared/lib/hooks/useCreatePayment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// Initialize Stripe with your publishable key
const stripePromise = loadStripe(
  "pk_test_51Q142VRwuyHMOHJmXMXfDSCue1q8w6lFH6ifjxdP7NvCeEp2wraU4HcauvAF4YxUgCJN3ZAmlGWecz0Cu4xcv8xx00ylvLtl8B"
);

export const PaymentPage = () => {
  const [clientSecret, setClientSecret] = useState<string | null>(null); // State to store client secret
  const [amount, setAmount] = useState<number>(0); // State to store amount

  useEffect(() => {
    // Fetch the client secret when the component mounts
    const fetchClientSecret = async () => {
      try {
        const { client_secret, amount } = await useCreatePayment();

        setClientSecret(client_secret); // Set the client secret correctly
        setAmount(amount); // Set the amount to be charged correctly
        console.log(client_secret, amount); // Log the client secret and amount
      } catch (error) {
        console.error("Error fetching payment details:", error);
      }
    };

    fetchClientSecret();
  }, []);

  return (
    <div className={styles.additional_service}>
      {clientSecret ? (
        // Wrap the PaymentForm with the Elements provider
        <Elements stripe={stripePromise}>
          <PaymentForm clientSecret={clientSecret} amount={amount} />
        </Elements>
      ) : (
        <></>
      )}
    </div>
  );
};
