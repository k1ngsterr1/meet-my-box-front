import { CostCard } from "@features/Cards/CostCard";
import { CourierCard } from "@features/Cards/CourierCard";
import { InsuranceCard } from "@features/Cards/InsuranceCard";
// import DocumentUpload from "@features/Documents";
import { NoteCard } from "@features/NoteCard";
import { useState } from "react";

export const ApplicationPage = () => {
  const [showInsuranceCard, setShowInsuranceCard] = useState(true);
  const [showCourierCard, setShowCourierCard] = useState(false);
  const [showNoteCard, setShowNoteCard] = useState(false);
  const [showDocumentCard, setShowDocumentCard] = useState(false);
  const [showCostCard, setShowCostCard] = useState(false);
  const [insurance, setInsurance] = useState(false);
  const [caurier, setCourier] = useState(false);
  const [note, setNote] = useState("");
  const [documents, setDocuments] = useState([]);
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
    // setShowDocumentCard(true);
    setShowCostCard(true);
  };
  const handleDocumentClick = () => {
    setShowDocumentCard(false);
    console.log("setting note", note);
  };
  const handleCostClick = () => {
    setShowCostCard(false);
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
      {/* {showDocumentCard && (
        <DocumentUpload onDocumentClick={handleDocumentClick} />
      )} */}
      {showCostCard && <CostCard onCostClick={handleCostClick} />}
    </div>
  );
};
