export interface ISidePanelLink {
  name: string;
  to: string;
}
export const sidePanelLinks: ISidePanelLink[] = [
  { name: "Главная", to: "/main" },
  { name: "Мой аккаунт", to: "/" },
  { name: "Новая посылка", to: "" },
  { name: "Мои адреса", to: "" },
];
