"use client";

import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";
import {IProductItems} from "@sibche-q/services/getProducts";

type THomeProductDetail = IProductItems | null;

const HomeProductDetailContext = createContext<THomeProductDetail>(null);
const HomeProductDetailAction = createContext<
  Dispatch<SetStateAction<THomeProductDetail>>
>(() => null);

function HomeProductDetailProvider({children}: PropsWithChildren) {
  const [state, dispatch] = useState<THomeProductDetail>(null);
  return (
    <HomeProductDetailContext.Provider value={state}>
      <HomeProductDetailAction.Provider value={dispatch}>
        {children}
      </HomeProductDetailAction.Provider>
    </HomeProductDetailContext.Provider>
  );
}

export default HomeProductDetailProvider;

export function useHomeProductDetail() {
  return useContext(HomeProductDetailContext);
}

export function useHomeProductDetailAction() {
  return useContext(HomeProductDetailAction);
}
