import { AgreeCard } from "@features/Cards/AgreeCard";
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
  const [showAgreeCard, setShowAgreeCard] = useState(false);
  const [insurance, setInsurance] = useState(false);
  const [caurier, setCourier] = useState(false);
  const [note, setNote] = useState("");
  const [documents, setDocuments] = useState([]);
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);
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
    setShowAgreeCard(true);
  };
  const handleAgreeClick = () => {
    if (!agree1 || !agree2) {
      alert("Вы должны согласиться с обеими условиями!");
      return;
    } else {
      setShowAgreeCard(false);
    }
  };
  const toggle1 = () => {
    setAgree1(!agree1);
  };
  const toggle2 = () => {
    setAgree2(!agree2);
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
      {showAgreeCard && (
        <AgreeCard
          onAgreeClick={handleAgreeClick}
          toggle1={toggle1}
          toggle2={toggle2}
        />
      )}
    </div>
  );
};
