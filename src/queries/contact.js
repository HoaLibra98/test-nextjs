import Api from "@/servers/api";
import { urlSubmitContact } from "@/servers/url";
const submitContact = async (data) => {
  const res = await Api.post(urlSubmitContact, new URLSearchParams(data), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  return res?.data;
};

export { submitContact };
