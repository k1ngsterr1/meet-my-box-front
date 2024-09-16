export interface IAboutCard {
  title: string;
  description: any;
}
export const aboutCard: IAboutCard[] = [
  {
    title: "Доставка в Россию из любой страны ЕС",
    description:
      "Мы доставляем посылки в Россию и страны СНГ практически из всех стран Европы.",
  },
  {
    title: "Лучшие условия сотрудничества",
    description:
      "Самые приятные предложения на тарифы и скидки для постоянных клиентов.",
  },
  {
    title: "Страхование",
    description: "Каждая посылка застрахована на 200EUR.",
  },
  {
    title: "Поддержка оператора 24/7",
    description: (
      <span>
        При возникновении любых вопросов, напишите нам {""}
        <a className="text-main" target="_blank" href="http://t.me/meetmbox">
          Telegram
        </a>{" "}
        /{""}
        {""}
        <a
          className="text-main"
          href="https://wa.me/393931577805"
          target="_blank"
        >
          {""} WhatsApp
        </a>{" "}
        , мы обязательно оперативно ответим на ваш вопрос.
      </span>
    ),
  },
];
