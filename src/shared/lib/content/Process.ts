import img1 from "@assets/process_1.png";
import img2 from "@assets/process_2.png";
import img3 from "@assets/process_3.png";
import img4 from "@assets/process_4.png";
import img5 from "@assets/service2.png";
export interface IImageCardItem {
  img: ImageMetadata;
  description: string;
}
export const processList: IImageCardItem[] = [
  {
    img: img1,
    description: "Подготовить посылку, взвесить и измерить.",
  },
  {
    img: img2,
    description: "Оформить заказ на нашем сайте и оплатить",
  },
  {
    img: img3,
    description:
      "Получить этикетки на мейл, распечатать и наклеить их на посылку",
  },
  {
    img: img4,
    description: "Передать посылку курьеру",
  },
];
export const serviceList: IImageCardItem[] = [
  {
    img: img2,
    description: "Cервис доставки посылок из Европы в Россию и страны СНГ",
  },
  {
    img: img5,
    description: "Покупки в интернет-магазина Европы",
  },
];
