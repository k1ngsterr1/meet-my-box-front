import React, { useEffect, useState } from "react";
import PricingTable from "@entities/AdditionalServiceTable";
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

  useEffect(() => {
    // Fetch the client secret when the component mounts
    const fetchClientSecret = async () => {
      const secret = await useCreatePayment();
      setClientSecret(secret); // Set the client secret
    };
    fetchClientSecret();
  }, []);

  return (
    <div className={styles.additional_service}>
      {clientSecret ? (
        // Wrap the PaymentForm with the Elements provider
        <Elements stripe={stripePromise}>
          <PaymentForm clientSecret={clientSecret} />
        </Elements>
      ) : (
        <Loader />
      )}
    </div>
  );
};
