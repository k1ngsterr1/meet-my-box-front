import { CourierCard } from "@features/Cards/CourierCard";
import { InsuranceCard } from "@features/Cards/InsuranceCard";
import { NoteCard } from "@features/NoteCard";
import { useState } from "react";

export const ApplicationPage = () => {
  const [showInsuranceCard, setShowInsuranceCard] = useState(true);
  const [showCourierCard, setShowCourierCard] = useState(false);
  const [showNoteCard, setShowNoteCard] = useState(false);
  const [insurance, setInsurance] = useState(false);
  const [caurier, setCourier] = useState(false);
  const [note, setNote] = useState("");
  const handleInsuranceClick = (value: boolean) => {
    setInsurance(value);
    setShowInsuranceCard(false);
    setShowCourierCard(true);
  };
  const handleCourierClick = (value: boolean) => {
    setCourier(value);
    setShowCourierCard(false);
    setShowNoteCard(true);
  };
  const handleNoteClick = (value: string) => {
    setShowNoteCard(false);
    console.log("setting note", note);
  };
  return (
    <div className="w-full flex items-center justify-center">
      {showInsuranceCard && (
        <InsuranceCard onInsuranceClick={handleInsuranceClick} />
      )}
      {showCourierCard && <CourierCard onCourierClick={handleCourierClick} />}
      {showNoteCard && (
        <NoteCard onNoteClick={handleNoteClick} setter={setNote} />
      )}
    </div>
  );
};
