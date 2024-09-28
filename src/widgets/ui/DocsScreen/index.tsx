import cookie_file from "@assets/Cookies Policy ENG, RUS, ITA.pdf";
import personal_data from "@assets/PERSONAL DATA RUS, ENG, ITA (1).pdf";
import privacy_file from "@assets/Privacy Policy ENG, RUS, ITA.pdf";
import offer from "@assets/Public offer RUS, ENG, ITA.pdf";

import { IconButton } from "@shared/ui/IconButton/ui/icon-button";
import { Paragraph } from "@shared/ui/Paragraph/ui/paragraph";

export const DocsScreen = () => {
  return (
    <main className="w-full min-h-[100vh] flex flex-col items-center justify-center mb-12">
      <h1 className="text-4xl font-bold mb-8">Юридические документы</h1>
      <div className="w-[40%] flex flex-col items-center gap-4">
        <IconButton
          text="Политика конфиденциальности | Privacy Policy"
          onClick={() => window.open(privacy_file, "_blank")}
        />

        <IconButton
          text="Публичная оферта | Public Offer"
          onClick={() => window.open(offer, "_blank")}
        />

        <IconButton
          text="Соглашение на обработку персональных данных| Personal Data"
          onClick={() => window.open(personal_data, "_blank")}
        />

        <IconButton
          text="Политика использования файлов cookies | Cookies Policy"
          onClick={() => window.open(cookie_file, "_blank")}
        />
        <Paragraph margin="mt-8" isCentered>
          Ознакамливаясь с данными документы пользователь соглашается и
          принимает условия, которые в них содержатся, а также обязуется
          следовать всем применимым нормам законодательства. Измения в данном
          разделе пользователь обязуется отслеживать самостоятельно
        </Paragraph>
      </div>
    </main>
  );
};
