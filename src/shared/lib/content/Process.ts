import img3 from "@assets/boxes.webp";
import img2 from "@assets/laptop.webp";
import img1 from "@assets/process_1.png";
import img4 from "@assets/process_4.png";
import img5 from "@assets/service2.png";
export interface IImageCardItem {
  img: ImageMetadata;
  description: string;
}
export const processList: IImageCardItem[] = [
  {
    img: img1,
    description: "Подготовить посылку самостоятельно: измерить, взвесить",
  },
  {
    img: img2,
    description: "Оформить заказ на нашем сайте (здесь ссылка)",
  },
  {
    img: img3,
    description: "Распечатать и наклеить этикетки",
  },
  {
    img: img4,
    description: "Передать курьеру (посылочка сразу поедет к получателю)",
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
