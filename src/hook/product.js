const { fetchProduct } = require("@/queries/product");
const { urlListProduct } = require("@/servers/url");
const { default: useSWR } = require("swr");

const useProduct = () => {
  const { data, error, isLoading } = useSWR(urlListProduct, (url) =>
    fetchProduct(url)
  );
  return {
    data: data || [],
    error,
    isLoading,
  };
};

export default useProduct;
