import process1 from "@assets/process_1.png";
import process2 from "@assets/process_2.png";
import process3 from "@assets/process_3.png";
import process4 from "@assets/process_4.png";
export interface IProcessItem {
  img: ImageMetadata;
  description: string;
}
export const processList: IProcessItem[] = [
  {
    img: process1,
    description: "Подготовить посылку, взвесить и измерить.",
  },
  {
    img: process2,
    description: "Оформить заказ на нашем сайте и оплатить",
  },
  {
    img: process3,
    description:
      "Получить этикетки на мейл, распечатать и наклеить их на посылку",
  },
  {
    img: process4,
    description: "Передать посылку курьеру",
  },
];
