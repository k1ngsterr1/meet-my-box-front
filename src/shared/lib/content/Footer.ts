export interface IFooterLink {
  name: string;
  to: string;
}
export const footerLinks: IFooterLink[] = [
  { name: "Услуги", to: "/services" },
  { name: "Тарифы", to: "/pricing" },
  { name: "FAQ", to: "/faq" },
  { name: "Условия и правила", to: "/terms" },
  { name: "Пользовательское соглашение", to: "/user-agreement" },
  { name: "Офферта", to: "/offer" },
];
