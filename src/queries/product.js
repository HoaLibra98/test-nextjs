import Api from "@/servers/api";
const fetchProduct = async (url, params) => {
  const res = await Api.get(url, {
    params,
  });
  return res?.data;
};

export { fetchProduct };
