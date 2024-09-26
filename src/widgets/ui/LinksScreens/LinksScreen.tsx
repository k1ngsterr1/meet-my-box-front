import file from "@assets/Запрещено отправлять RUS, ENG, ITA.pdf";
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
              target="_blank"
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
                COUNCIL REGULATION (EU) No 833/2014
              </a>
              <br />
              <a
                className="text-main cursor-pointer"
                target="_blank"
                href="https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022R0428&from=EN"
              >
                COUNCIL REGULATION (EU) 2022/428
              </a>
              <br />
              <a
                className="text-main cursor-pointer"
                target="_blank"
                href="https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022R1904&from=EN"
              >
                COUNCIL REGULATION (EU) 2022/1904
              </a>
              <br />
              <a
                className="text-main cursor-pointer"
                target="_blank"
                href="https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022R2474&from=EN"
              >
                COUNCIL REGULATION (EU) 2022/2474
              </a>
              <br />
              <a
                className="text-main cursor-pointer"
                target="_blank"
                href="https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32023R0427&qid=1681818109431&from=EN"
              >
                COUNCIL REGULATION (EU) 2023/427
              </a>
              <br />
              <a
                className="text-main cursor-pointer"
                target="_blank"
                href="https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32023R1214&qid=1687857212540"
              >
                COUNCIL REGULATION (EU) 2023/1214
              </a>
            </>
          }
        />
        <AccordionItemText
          question="Запрещенные к отправке предметы"
          answer={
            <a className="text-main cursor-pointer" target="_blank" href={file}>
              Посмотреть запрещенные предметы
            </a>
          }
        />
      </main>
    </>
  );
};
