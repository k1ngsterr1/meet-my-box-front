import { AccordionItemText } from "@shared/ui/Accordion/faq-accordion";

export const LinksScreen = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center w-full h-[65.2799999vh]">
        <h1 className="text-4xl font-bold mb-8">Полезная информация</h1>
        <AccordionItemText
          question="Международные почтовые отправления. Гид от таможенной службы."
          answer={
            <a
              className="text-main cursor-pointer"
              href="https://customs.gov.ru/fiz/mezhdunarodnye-pochtovye-otpravleniya/normy-besposhlinnogo-vvoza-tovarov-dlya-lichnogo-pol-zovaniya,-dostavlyaemyx-iz-za-rubezha-v-mezhdunarodnyx-pochtovyx-otpravleniyax-ili-perevozchikom"
            >
              Открыть ссылку
            </a>
          }
        />
        <AccordionItemText
          question="Санкционные ограничения."
          answer={
            <>
              <a
                className="text-main cursor-pointer"
                target="_blank"
                href="https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32014R0833&from=EN"
              >
                Ссылка #1
              </a>
              <br />
              <a
                className="text-main cursor-pointer"
                target="_blank"
                href="https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022R0428&from=EN"
              >
                Ссылка #2
              </a>
              <br />
              <a
                className="text-main cursor-pointer"
                target="_blank"
                href="https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022R1904&from=EN"
              >
                Ссылка #3
              </a>
              <br />
              <a
                className="text-main cursor-pointer"
                target="_blank"
                href="https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022R2474&from=EN"
              >
                Ссылка #4
              </a>
              <br />
              <a
                className="text-main cursor-pointer"
                target="_blank"
                href="https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32023R0427&qid=1681818109431&from=EN"
              >
                Ссылка #5
              </a>
              <br />
              <a
                className="text-main cursor-pointer"
                target="_blank"
                href="https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32023R1214&qid=1687857212540"
              >
                Ссылка #6
              </a>
            </>
          }
        />
      </main>
    </>
  );
};
