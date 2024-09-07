export interface IFooterLink {
  name: string;
  to: string;
}
export const footerLinks: IFooterLink[] = [
  { name: "Главная", to: "/services" },
  { name: "Услуги", to: "/pricing" },
  { name: "Как это работает?", to: "/faq" },
  { name: "Узнать стоимость", to: "/cost" },
];
