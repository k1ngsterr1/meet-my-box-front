export interface IFooterLink {
  name: string;
  to: string;
}
export const footerLinks: IFooterLink[] = [
  { name: "О компании", to: "/service" },
  { name: "Юридические документы", to: "/" },
  { name: "FAQ", to: "#faq" },
  { name: "Полезная информация", to: "/links" },
];
