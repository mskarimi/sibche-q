"use client";

import HomeSwiperCard from "@sibche-q/view/home/component/homeSwiper/HomeSwiperCard";
import {useQuery} from "@tanstack/react-query";
import {REACT_QUERY_KEYS} from "@sibche-q/utils/const";
import {
  getProducts,
  IProductItems,
  TGetProductRes,
} from "@sibche-q/services/getProducts";
import {useCallback, useRef, useState} from "react";
import {useHomeProductDetailAction} from "@sibche-q/view/home/context/HomeProductDetailProvider";

interface IShowIdList {
  [x: number]: number;
}

function HomeSwiper() {
  const dispatch = useHomeProductDetailAction();
  const {data} = useQuery({
    queryKey: [REACT_QUERY_KEYS.PRODUCT_LIST],
    queryFn: () => getProducts(),
    staleTime: 10 * 60 * 1000,
  });
  const [finalData, setFinalData] = useState<TGetProductRes>(
    data?.slice(0, 3) || []
  );

  const unVisitedData = useRef<TGetProductRes>(data?.slice(3) || []);
  const visitedData = useRef<TGetProductRes>([]);

  const nextOnClick = useCallback(
    (product: IProductItems, index: number, currentData: TGetProductRes) => {
      const tmp = [...currentData];
      let nextData = unVisitedData.current[0];
      if (nextData) {
        tmp[index] = nextData;
        visitedData.current.push(product);
        unVisitedData.current.shift();
      } else {
        nextData = visitedData.current[0];
        tmp[index] = nextData;

        const tmpShowList: IShowIdList = {};
        tmp.forEach((item) => (tmpShowList[item.id] = item.id));
        unVisitedData.current =
          data?.filter((item) => !tmpShowList.hasOwnProperty(item.id)) || [];
        visitedData.current = [];
      }
      setFinalData(tmp);
    },
    [data]
  );

  const detailOnClick = useCallback(
    (product: IProductItems) => dispatch(product),
    [dispatch]
  );

  return (
    <div className="flex justify-between py-8 overflow-y-hidden overflow-x-auto px-screenSpace">
      {finalData.map((product, index) => {
        return (
          <HomeSwiperCard
            key={product.id}
            title={product.title}
            price={product.price}
            rate={product.rating.rate}
            count={product.rating.count}
            category={product.category}
            image={product.image}
            nextOnClick={() => nextOnClick(product, index, finalData)}
            detailOnClick={() => detailOnClick(product)}
          />
        );
      })}
    </div>
  );
}

export default HomeSwiper;
