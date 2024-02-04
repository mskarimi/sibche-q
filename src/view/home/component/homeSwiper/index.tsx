import HomeSwiperCard from "@sibche-q/view/home/component/homeSwiper/HomeSwiperCard";

function HomeSwiper() {
  return (
    <div className="flex justify-between px-2 py-8 overflow-y-hidden overflow-x-auto">
      {new Array(3).fill(1).map((item, index) => {
        return (
          <HomeSwiperCard
            key={index}
            title="title"
            price={20000}
            rate={10}
            category="category"
            image="https://picsum.photos/250/175"
            count={200}
          />
        );
      })}
    </div>
  );
}

export default HomeSwiper;
