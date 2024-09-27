import cookie_file from "@assets/Cookies Policy ENG, RUS, ITA.pdf";
import personal_data from "@assets/PERSONAL DATA RUS, ENG, ITA (1).pdf";
import privacy_file from "@assets/Privacy Policy ENG, RUS, ITA.pdf";
import offer from "@assets/Public offer RUS, ENG, ITA.pdf";

import { AccordionItemText } from "@shared/ui/Accordion/faq-accordion";
import { IconButton } from "@shared/ui/IconButton/ui/icon-button";

export const DocsScreen = () => {
  return (
    <main className="w-full flex flex-col items-center justify-center mb-12">
      <h1 className="text-4xl font-bold mb-8">Юридические документы</h1>
      <div className="w-[40%] flex flex-col items-start gap-4">
        <IconButton
          text="Политика конфиденциальности | Privacy Policy"
          onClick={() => window.open(privacy_file, "_blank")}
        />

        <IconButton
          text="Публичные оферта | Public Offer"
          onClick={() => window.open(offer, "_blank")}
        />

        <IconButton
          text="Персональные данные | Personal Data"
          onClick={() => window.open(personal_data, "_blank")}
        />

        <IconButton
          text="Политика куки | Cookies Policy"
          onClick={() => window.open(cookie_file, "_blank")}
        />
      </div>
    </main>
  );
};
