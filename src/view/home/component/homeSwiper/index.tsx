"use client";

import HomeSwiperCard from "@sibche-q/view/home/component/homeSwiper/HomeSwiperCard";
import {useQuery} from "@tanstack/react-query";
import {REACT_QUERY_KEYS} from "@sibche-q/utils/const";
import {getProducts} from "@sibche-q/services/getProducts";

function HomeSwiper() {
  const {data} = useQuery({
    queryKey: [REACT_QUERY_KEYS.PRODUCT_LIST],
    queryFn: () => getProducts(),
    staleTime: 10 * 60 * 1000,
  });

  console.log("data", data);

  // const finalData = useMemo(() => data?.splice(0, 3) || [], [data]);

  return (
    <div className="flex justify-between px-2 py-8 overflow-y-hidden overflow-x-auto">
      {data?.slice(0, 3).map((item) => {
        return (
          <HomeSwiperCard
            key={item.id}
            title={item.title}
            price={item.price}
            rate={item.rating.rate}
            count={item.rating.count}
            category={item.category}
            image={item.image}
          />
        );
      })}
    </div>
  );
}

export default HomeSwiper;
