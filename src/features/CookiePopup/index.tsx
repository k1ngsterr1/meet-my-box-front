import cookie_file from "@assets/cookies_policy.pdf";
import privacy_file from "@assets/privacy_policy.pdf";
import { useState } from "react";

export const CookiePopup = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [language, setLanguage] = useState<"ru" | "en">("ru"); // Manage language state

  const handleAccept = () => {
    // Set a cookie here or perform any action on accepting
    document.cookie =
      "cookieConsent=true; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    setIsVisible(false); // Hide the popup after acceptance
  };

  const handleLanguageChange = (lang: "ru" | "en") => {
    setLanguage(lang); // Switch language
  };

  if (!isVisible) return null; // Don't render if not visible

  const text = {
    en: {
      message: (
        <>
          Our website uses cookies to ensure a comfortable browsing experience
          and all the necessary information for this purpose. By clicking
          "Accept," you confirm that you have reviewed and agree to the terms of
          our{""}
          <a
            href={cookie_file}
            target="_blank"
            aria-label="Cookie Policy"
            rel="noopener noreferrer"
            className="cursor-pointer text-main text-underline"
          >
            {""} Cookie Policy
          </a>{" "}
          and
          <a
            href={privacy_file}
            target="_blank"
            aria-label="Privacy Policy"
            rel="noopener noreferrer"
            className="cursor-pointer text-main text-underline"
          >
            {""} Privacy Policy
          </a>
          .
        </>
      ),
      accept: "Accept",
    },
    ru: {
      message: (
        <>
          Наш сайт использует файлы cookies для обеспечения удобства просмотра и
          всю необходимую для этого информацию. Нажимая «Принять», вы
          подтверждаете свое ознакомление и принимаете условия Политики
          использования файлов
          <a
            href={cookie_file}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Cookies"
            className="cursor-pointer underline ml-1 text-blue-200"
          >
            cookies
          </a>{" "}
          и
          <a
            href={privacy_file}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Политика конфиденциальности"
            className="cursor-pointer underline ml-1 text-blue-200"
          >
            Политики конфиденциальности
          </a>
          .
        </>
      ),
      accept: "Принять",
    },
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 shadow-lg flex justify-between items-center z-50">
      <p className="text-xs sm:text-sm text-white">{text[language].message} </p>

      <div className="flex items-center">
        {/* Language Switcher */}
        <button
          className={`mr-2 text-sm ${language === "en" ? "font-bold" : ""}`}
          onClick={() => handleLanguageChange("en")}
        >
          English
        </button>
        <button
          className={`mr-4 text-sm ${language === "ru" ? "font-bold" : ""}`}
          onClick={() => handleLanguageChange("ru")}
        >
          Русский
        </button>

        {/* Accept Button */}
        <button
          onClick={handleAccept}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {text[language].accept}
        </button>
      </div>
    </div>
  );
};
