"use client";

import {useHomeProductDetail} from "@sibche-q/view/home/context/HomeProductDetailProvider";

function HomeProductDetail() {
  const data = useHomeProductDetail();

  if (!data) return null;
  return (
    <div className="px-screenSpace">
      <HomeProductDetailCard title="title" value={data.title} />
      <HomeProductDetailCard title="category" value={data.category} />
      <HomeProductDetailCard title="description" value={data.description} />
      <HomeProductDetailCard title="price" value={data.price} />
      <HomeProductDetailCard title="rating" value={data.rating.rate} />
      <HomeProductDetailCard title="count" value={data.rating.count} />
    </div>
  );
}

export default HomeProductDetail;

interface IHomeProductDetailCard {
  title: string;
  value: string | number;
}

function HomeProductDetailCard({title, value}: IHomeProductDetailCard) {
  return (
    <div>
      <span className="font-bold">{title}: </span>
      <span>{value}</span>
    </div>
  );
}
