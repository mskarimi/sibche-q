import React from "react";
import Image from "next/image";

interface IHomeSwiperCard {
  title: string;
  image: string;
  price: number;
  category: string;
  rate: number;
  count: number;
}

function HomeSwiperCard(props: IHomeSwiperCard) {
  const {price, image, category, title, rate, count} = props;
  return (
    <div className="flex min-w-[400px] w-1/3 max-w-1/3 h-[250px] mr-5 bg-white shadow-xl rounded-md overflow-hidden">
      <div className="relative w-[175px] h-full">
        <Image
          alt={title}
          src={image}
          width={175}
          height={250}
          className="w-full h-full object-center object-cover"
          placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNUnPbZGAAEaQHfbioZ7gAAAABJRU5ErkJggg=="
        />
      </div>
      <div className="m-2 w-full">
        <div>{title}</div>
        <div>
          <span>category:</span>
          <span>{category}</span>
        </div>
        <div>
          <span>price: </span>
          <span>{price}</span>
        </div>
        <div>
          <span>rate: </span>
          <span>{rate}</span>
          <span className="ml-5">count:</span>
          <span>{count}</span>
        </div>
      </div>
    </div>
  );
}

export default HomeSwiperCard;
