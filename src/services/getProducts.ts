import {axiosService} from "@sibche-q/lib/axios/axiosService";
import {API} from "@sibche-q/utils/const";

export type TGetProductRes = IProductItems[];

export interface IProductItems {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

type TGetProducts = (isServer?: boolean) => Promise<TGetProductRes>;

export const getProducts: TGetProducts = async (isServer) => {
  const url = isServer ? API.DOMAIN + API.products : API.products;
  return axiosService<TGetProductRes>({url, method: "get"}).then(
    (res) => res.data
  );
};
