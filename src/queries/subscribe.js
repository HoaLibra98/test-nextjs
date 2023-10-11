import Api from "@/servers/api";
import { urlLSubmitSubscribe } from "@/servers/url";
const submitSubscribe = async (data) => {
  const res = await Api.post(urlLSubmitSubscribe, new URLSearchParams(data), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  return res?.data;
};

export { submitSubscribe };
