import Home from "@sibche-q/view/home";
import getQueryClient from "@sibche-q/lib/reactQuery/getQueryClient";
import {REACT_QUERY_KEYS} from "@sibche-q/utils/const";
import {getProducts} from "@sibche-q/services/getProducts";
import {dehydrate} from "@tanstack/query-core";
import Hydrate from "@sibche-q/lib/reactQuery/hydrate.client";

async function HomePage() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: [REACT_QUERY_KEYS.PRODUCT_LIST],
    queryFn: () => getProducts(true),
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <Home />
    </Hydrate>
  );
}

export default HomePage;
