export interface IFooterLink {
  name: string;
  to: string;
}
export const footerLinks: IFooterLink[] = [
  { name: "Услуги", to: "/service" },
  { name: "Тарифы", to: "/" },
  { name: "FAQ", to: "#faq" },
  { name: "Отзывы", to: "#feedback-pc" },
  { name: "Условия и правила", to: "/rules" },
  { name: "Пользовательское соглашение", to: "#calculate-mob" },
  { name: "Офферта", to: "#calculate-mob" },
  { name: "Новости", to: "#calculate-mob" },
];
