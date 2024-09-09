export interface ISidePanelLink {
  name: string;
  to: string;
}
export const sidePanelLinks: ISidePanelLink[] = [
  { name: "Главная", to: "/" },
  { name: "Мой аккаунт", to: "/packages" },
  { name: "Новая посылка", to: "/packages/add" },
  { name: "Мои адреса", to: "/address" },
  { name: "Мои посылки", to: "/packages" },
];
