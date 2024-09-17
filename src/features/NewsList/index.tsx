import {
  NewsCard,
  type INewsCardProps,
} from "@shared/ui/Card/ui/Image/image-card";
import type React from "react";
interface Props {
  items: INewsCardProps[];
}

export const NewsList: React.FC<Props> = ({ items }) => {
  return (
    <div className="flex w-full flex-wrap">
      {items.map((item, index) => {
        const simple = {
          title: item.title,
          image: item.image.data.attributes.url,
          text: item.text,
        };

        return (
          <div
            className="w-full md:w-[33.333%] flex-grow-0 flex-shrink-0"
            key={index}
          >
            <NewsCard
              {...simple}
              handleClick={() => {
                const query = new URLSearchParams(simple).toString();
                window.location.href = `/news/item?${query}`;
              }}
            />
          </div>
        );
      })}
    </div>
  );
};
