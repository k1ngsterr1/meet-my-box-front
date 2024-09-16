import { atom } from "nanostores";

export const isRequestPopupOpen = atom(false);

// Function to toggle popup state
export const toggleRequestPopup = () => {
  isRequestPopupOpen.set(!isRequestPopupOpen.get());
};

// Function to close popup
export const closeRequestPopup = () => {
  isRequestPopupOpen.set(false);
};
