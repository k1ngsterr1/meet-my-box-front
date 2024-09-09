import img1 from "@assets/process_1.png";
import img2 from "@assets/process_2.png";
import img3 from "@assets/process_3.png";
import img5 from "@assets/service2.png";

export interface IImageCardItem {
  img: ImageMetadata;
  description: string;
}

export const processHelpList: IImageCardItem[] = [
  {
    img: img1,
    description: "Собрать вещи в корзину",
  },
  {
    img: img2,
    description: "Написать нам (ссылка на телеграм и вотс ап) ",
  },
  {
    img: img3,
    description:
      "Мы самостоятельно выкупаем, получаем, проверяем, переупаковываем и отправляем получателю нашей логистической службой",
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
