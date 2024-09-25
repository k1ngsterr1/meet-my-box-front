import cookie_file from "@assets/Cookies Policy ENG, RUS, ITA.pdf";
import personal_data from "@assets/PERSONAL DATA RUS, ENG, ITA (1).pdf";
import privacy_file from "@assets/Privacy Policy ENG, RUS, ITA.pdf";
import offer from "@assets/Public offer RUS, ENG, ITA.pdf";

import { AccordionItemText } from "@shared/ui/Accordion/faq-accordion";

export const DocsScreen = () => {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Юридические документы</h1>
      <AccordionItemText
        question="Политика приватности | Privacy Policy"
        answer={
          <a
            className="text-main cursor-pointer"
            target="_blank"
            href={privacy_file}
          >
            Ознакомьтесь с нашей политикой приватности
          </a>
        }
      />
      <AccordionItemText
        question="Публичные оферта| Public Offer"
        answer={
          <a className="text-main cursor-pointer" target="_blank" href={offer}>
            Ознакомьтесь с нашей публичной офертой
          </a>
        }
      />
      <AccordionItemText
        question="Персональные данные| Personal Data"
        answer={
          <a
            className="text-main cursor-pointer"
            target="_blank"
            href={personal_data}
          >
            Ознакомьтесь с нашей политикой персональных данных
          </a>
        }
      />
      <AccordionItemText
        question="Политика куки | Cookies Policy"
        answer={
          <a
            className="text-main cursor-pointer"
            target="_blank"
            href={cookie_file}
          >
            Ознакомьтесь с нашей политикой куки
          </a>
        }
      />
    </main>
  );
};
