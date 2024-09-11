import { CourierCard } from "@features/Cards/CourierCard";
import { InsuranceCard } from "@features/Cards/InsuranceCard";
import { useState } from "react";

export const ApplicationPage = () => {
  const [showInsuranceCard, setShowInsuranceCard] = useState(true);
  const [showCourierCard, setShowCourierCard] = useState(false);
  const [insurance, setInsurance] = useState(false);
  const [caurier, setCourier] = useState(false);
  const handleInsuranceClick = (value: boolean) => {
    setInsurance(value);
    setShowInsuranceCard(false);
    setShowCourierCard(true);
  };
  const handleCourierClick = (value: boolean) => {
    setCourier(value);
    setShowCourierCard(false);
  };
  return (
    <div className="w-full flex items-center justify-center">
      {showInsuranceCard && (
        <InsuranceCard onInsuranceClick={handleInsuranceClick} />
      )}
      {showCourierCard && <CourierCard onCourierClick={handleCourierClick} />}
    </div>
  );
};
