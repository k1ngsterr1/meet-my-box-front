export interface ISidePanelLink {
  name: string;
  to: string;
}
export const sidePanelLinks: ISidePanelLink[] = [
  { name: "Главная", to: "/" },
  { name: "Мой аккаунт", to: "/profile" },
  { name: "Новая посылка", to: "/calculate" },
  { name: "Мои адреса", to: "/address" },
  { name: "Мои посылки", to: "/packages" },
];
