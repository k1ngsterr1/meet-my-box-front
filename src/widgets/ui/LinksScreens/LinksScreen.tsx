import file from "@assets/Запрещено отправлять RUS, ENG, ITA.pdf";
import { faGlobe, faLock } from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "@shared/ui/IconButton/ui/icon-button";
import { Paragraph } from "@shared/ui/Paragraph/ui/paragraph";

export const LinksScreen = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center w-full h-[65.2799999vh]">
        <h1 className="text-4xl font-bold mb-8">Полезная информация</h1>
        <IconButton
          text="Международные почтовые отправления. Гид от таможенной службы."
          onClick={() =>
            window.open(
              "https://customs.gov.ru/fiz/mezhdunarodnye-pochtovye-otpravleniya/normy-besposhlinnogo-vvoza-tovarov-dlya-lichnogo-pol-zovaniya,-dostavlyaemyx-iz-za-rubezha-v-mezhdunarodnyx-pochtovyx-otpravleniyax-ili-perevozchikom",
              "_blank"
            )
          }
          icon={faGlobe}
        />
        <IconButton
          className="text-main cursor-pointer mt-2 hover:text-underline"
          text="COUNCIL REGULATION (EU) No 833/2014"
          onClick={() =>
            window.open(
              "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32014R0833&from=EN",
              "_blank"
            )
          }
          icon={faLock}
        />
        <br />
        <IconButton
          text="COUNCIL REGULATION (EU) 2022/428"
          className="text-main cursor-pointer mt-2 hover:text-underline"
          icon={faLock}
          onClick={() =>
            window.open(
              "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022R0428&from=EN",
              "_blank"
            )
          }
        />
        <br />
        <IconButton
          text="COUNCIL REGULATION (EU) 2022/1904"
          className="text-main cursor-pointer mt-2 hover:text-underline"
          icon={faLock}
          onClick={() =>
            window.open(
              "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022R1904&from=EN",
              "_blank"
            )
          }
        />
        <br />
        <IconButton
          className="text-main cursor-pointer mt-2"
          icon={faLock}
          onClick={() =>
            window.open(
              "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022R2474&from=EN",
              "_blank"
            )
          }
          text="COUNCIL REGULATION (EU) 2022/2474"
        />
        <br />
        <IconButton
          className="text-main cursor-pointer mt-2"
          icon={faLock}
          text="COUNCIL REGULATION (EU) 2023/427"
          onClick={() =>
            window.open(
              "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32023R0427&qid=1681818109431&from=EN",
              "_blank"
            )
          }
        />
        <br />
        <IconButton
          className="text-main cursor-pointer mt-2"
          icon={faLock}
          text="COUNCIL REGULATION (EU) 2023/1214"
          onClick={() =>
            window.open(
              "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32023R1214&qid=1687857212540",
              "_blank"
            )
          }
        />
        <IconButton
          text="Запрещенные к отправке предметы"
          onClick={() => window.open(file, "_blank")}
          icon={faLock}
          margin="mt-2"
        />
        <Paragraph margin="mt-8" width="w-1/2" isCentered>
          Данный раздел не содержит исчерпывающий перечень применимых норм
          законодательства. Используя услуги Meet my Box, пользователь обязуется
          следовать всем применимым нормам и отслеживать любые изменения
          самостоятельно.
        </Paragraph>
      </main>
    </>
  );
};
