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

interface IShowIdList {
  [x: number]: number;
}

function HomeSwiper() {
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

  const onClick = useCallback(
    (product: IProductItems, index: number, finalData: TGetProductRes) => {
      const tmp = [...finalData];
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

  return (
    <div className="flex justify-between px-2 py-8 overflow-y-hidden overflow-x-auto">
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
            onClick={() => onClick(product, index, finalData)}
          />
        );
      })}
    </div>
  );
}

export default HomeSwiper;
