// HelpPopup.js
import { useStore } from "@nanostores/react";
import { Paragraph } from "@shared/ui/Paragraph/ui/paragraph";
import { closePopup } from "@stores/popupState";
import { closeRequestPopup, isRequestPopupOpen } from "@stores/requestState";
import { Fade } from "react-awesome-reveal";

export const RequestPopup = () => {
  // Subscribe to the popup state using useStore
  const isOpen = useStore(isRequestPopupOpen);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeRequestPopup}
        >
          <Fade direction="up">
            <div
              className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="text-3xl absolute top-2 right-2 text-main hover:text-hover"
                onClick={closeRequestPopup}
              >
                ×
              </button>
              <h2 className="text-lg font-semibold mb-4">Отправить посылку</h2>
              <Paragraph>
                Здесь собраны разделы, которые помогут вам отправить посылку
              </Paragraph>
              <div className="flex flex-col gap-2 mt-2">
                <a className="text-main" href="/profile" onClick={closePopup}>
                  Личный кабинет
                </a>
                <a
                  className="text-main"
                  href="#calculate-pc"
                  onClick={closePopup}
                >
                  Калькулятор
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
