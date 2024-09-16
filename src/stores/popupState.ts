// popupStore.js
import { atom } from "nanostores";

// Create an atom store for popup visibility
export const isPopupOpen = atom(false);

// Function to toggle popup state
export const togglePopup = () => {
  isPopupOpen.set(!isPopupOpen.get());
};

// Function to close popup
export const closePopup = () => {
  isPopupOpen.set(false);
};
