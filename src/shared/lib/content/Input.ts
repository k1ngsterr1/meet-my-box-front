export interface ICalculateInput
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  margin?: string;
}
export interface IContactInput
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  margin?: string;
  width?: string;
}
export const calculateInputs: ICalculateInput[] = [
  {
    placeholder: "Вес",
  },
  {
    placeholder: "Ширина",
  },
  {
    placeholder: "Длина",
  },
  {
    placeholder: "Высота",
  },
];

export const contactInputs: IContactInput[] = [
  {
    placeholder: "Ваше имя",
  },
  {
    placeholder: "Ваш телефон",
  },
  {
    placeholder: "Ваш вопрос",
  },
];
