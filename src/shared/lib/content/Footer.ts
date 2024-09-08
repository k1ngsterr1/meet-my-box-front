export interface IFooterLink {
  name: string;
  to: string;
}
export const footerLinks: IFooterLink[] = [
  { name: "Услуги", to: "/services" },
  { name: "Тарифы", to: "/" },
  { name: "FAQ", to: "#faq" },
  { name: "Условия и правила", to: "#calculate-mob" },
  { name: "Пользовательское соглашение", to: "#calculate-mob" },
  { name: "Офферта", to: "#calculate-mob" },
  { name: "Новости", to: "#calculate-mob" },
];
