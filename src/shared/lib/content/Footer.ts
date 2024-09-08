export interface IFooterLink {
  name: string;
  to: string;
}
export const footerLinks: IFooterLink[] = [
  { name: "Главная", to: "/main" },
  { name: "Услуги", to: "/services" },
  { name: "Как это работает?", to: "#faq" },
  { name: "Узнать стоимость", to: "#calculate-mob" },
];
