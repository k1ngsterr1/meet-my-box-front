import { useState } from "react";

export const CookiePopup = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    // Set a cookie here or perform any action on accepting
    document.cookie =
      "cookieConsent=true; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    setIsVisible(false); // Hide the popup after acceptance
  };

  if (!isVisible) return null; // Don't render if not visible

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 shadow-lg flex justify-between items-center z-50">
      <p className="text-sm text-white">
        Наш сайт использует файлы cookie для обеспечения удобства просмотра и
        соответствующую информацию.
        <a href="/privacy-policy" className="underline ml-1 text-main">
          Политика использования файлов cookie и конфиденциальность.
        </a>
        .
      </p>
      <button
        onClick={handleAccept}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
      >
        Принять
      </button>
    </div>
  );
};
