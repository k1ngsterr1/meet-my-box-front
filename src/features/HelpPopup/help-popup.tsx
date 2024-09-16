// HelpPopup.js
import { useStore } from "@nanostores/react";
import { Paragraph } from "@shared/ui/Paragraph/ui/paragraph";
import { closePopup, isPopupOpen } from "@stores/popupState";
import { Fade } from "react-awesome-reveal";

export const HelpPopup = () => {
  // Subscribe to the popup state using useStore
  const isOpen = useStore(isPopupOpen);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closePopup}
        >
          <Fade direction="up">
            <div
              className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="text-3xl absolute top-2 right-2 text-main hover:text-hover"
                onClick={closePopup}
              >
                ×
              </button>
              <h2 className="text-lg font-semibold mb-4">Помощь с покупкой</h2>
              <Paragraph>
                Здесь собраны разделы, которые помогут вам разобраться со
                стоимостью
              </Paragraph>
              <div className="flex flex-col gap-2 mt-2">
                <a className="text-main" href="#faq" onClick={closePopup}>
                  FAQ
                </a>
                <a
                  className="text-main"
                  href="#process-pc"
                  onClick={closePopup}
                >
                  Процессы работы
                </a>
                <a className="text-main" href="/profile" onClick={closePopup}>
                  Личный кабинет
                </a>
                <a
                  className="text-main"
                  href="#contacts-pc"
                  onClick={closePopup}
                >
                  Контакты
                </a>
              </div>
            </div>
          </Fade>
        </div>
      )}
    </>
  );
};
