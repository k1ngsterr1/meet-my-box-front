import file from "@assets/forbidden.pdf";
import { IconButton } from "@shared/ui/IconButton/ui/icon-button";
import { Paragraph } from "@shared/ui/Paragraph/ui/paragraph";

export const LinksScreen = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center w-full min-h-[90vh]">
        <h1 className="text-4xl font-bold mb-8">Полезная информация</h1>
        <div className="flex flex-col items-center justify-start">
          <IconButton
            text="Международные почтовые отправления. Гид от таможенной службы."
            onClick={() =>
              window.open(
                "https://customs.gov.ru/fiz/mezhdunarodnye-pochtovye-otpravleniya/normy-besposhlinnogo-vvoza-tovarov-dlya-lichnogo-pol-zovaniya,-dostavlyaemyx-iz-za-rubezha-v-mezhdunarodnyx-pochtovyx-otpravleniyax-ili-perevozchikom",
                "_blank"
              )
            }
            // icon={faGlobe}
          />
          <br />
          <IconButton
            className="text-main cursor-pointer mt-4 hover:text-underline"
            text="Санкционные ограничения от 31-го июля 2014-го года"
            onClick={() =>
              window.open(
                "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32014R0833&from=EN",
                "_blank"
              )
            }
            // icon={faLock}
          />
          <br />
          <IconButton
            text="Санкционные ограничения от 15-го марта 2022-го года"
            className="text-main cursor-pointer mt-2 hover:text-underline"
            // icon={faLock}
            onClick={() =>
              window.open(
                "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022R0428&from=EN",
                "_blank"
              )
            }
          />
          <br />
          <IconButton
            text="Санкционные ограничения от 6-го октября 2022-го года"
            className="text-main cursor-pointer mt-2 hover:text-underline"
            // icon={faLock}
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
            // icon={faLock}
            onClick={() =>
              window.open(
                "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022R2474&from=EN",
                "_blank"
              )
            }
            text="Санкционные ограничения от 15-го декабря 2022-го года"
          />
          <br />
          <IconButton
            className="text-main cursor-pointer mt-2"
            // icon={faLock}
            text="Санкционные ограничения от 25-го февраля 2023-го года"
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
            // icon={faLock}
            text="Санкционные ограничения от 23-го июня 2023-го года"
            onClick={() =>
              window.open(
                "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32023R1214&qid=1687857212540",
                "_blank"
              )
            }
          />
          <br />
          <IconButton
            text="Запрещенные к отправке предметы"
            className="text-main cursor-pointer mt-2"
            onClick={() => window.open(file, "_blank")}
            // icon={faLock}
          />
        </div>
        <Paragraph margin="mt-8 mb-8" width="w-1/2" isCentered>
          Данный раздел не содержит исчерпывающий перечень применимых норм
          законодательства. Используя услуги Meet my Box, пользователь обязуется
          следовать всем применимым нормам и отслеживать любые изменения
          самостоятельно.
        </Paragraph>
      </main>
    </>
  );
};
