export interface IFooterLink {
  name: string;
  to: string;
}
export const footerLinks: IFooterLink[] = [
  { name: "О компании", to: "/service" },
  { name: "Юридические документы", to: "/" },
  { name: "FAQ", to: "#faq" },
  { name: "Отзывы", to: "#feedback-pc" },
  { name: "Условия и правила", to: "/rules" },
  { name: "Полезные ссылки", to: "/links" },
  { name: "Новости", to: "/news" },
];
