import Image from "next/image";
import {Button} from "antd";
import {MouseEventHandler} from "react";

interface IHomeSwiperCard {
  title: string;
  image: string;
  price: number;
  category: string;
  rate: number;
  count: number;
  nextOnClick: MouseEventHandler<HTMLButtonElement>;
  detailOnClick: MouseEventHandler<HTMLButtonElement>;
}

function HomeSwiperCard(props: IHomeSwiperCard) {
  const {
    price,
    image,
    category,
    title,
    rate,
    count,
    nextOnClick,
    detailOnClick,
  } = props;
  return (
    <div className="flex min-w-[400px] w-1/3 max-w-1/3 h-[250px] mr-5 last:mr-0 bg-white shadow-xl rounded-md overflow-hidden">
      <div className="relative min-w-[194px] w-[194px] h-full">
        <Image
          alt={title}
          src={image}
          width={194}
          height={250}
          className="w-full h-full object-center object-contain p-2"
          placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNUnPbZGAAEaQHfbioZ7gAAAABJRU5ErkJggg=="
        />
      </div>
      <div className="flex flex-col justify-between m-5 w-full">
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
        <div className="flex justify-end">
          <Button
            type="primary"
            className="bg-lime-700 px-5 2xl:px-8 h-10 rounded-md pt-[0.2rem] pb-0 mr-2"
            onClick={detailOnClick}
          >
            Detail
          </Button>
          <Button
            type="primary"
            className="bg-primary px-5 2xl:px-8 h-10 rounded-md pt-[0.2rem] pb-0"
            onClick={nextOnClick}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HomeSwiperCard;
