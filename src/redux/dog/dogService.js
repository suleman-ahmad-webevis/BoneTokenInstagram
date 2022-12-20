import { toast } from "react-toastify";
import API from "../../utils/interceptor";

//**Base URL from Interceptor**

const getTheDogs = async () => {
  let API_URL = "/dog/dogs";
  const response = await API.get(API_URL);
  toast.success(response.data.message, { theme: "colored" });
  return response.data;
};

const postTheDog = async (dog) => {
  let API_URL = "/dog/addDog";
  const response = await API.post(API_URL, dog);
  toast.success(response.data.message, { theme: "colored" });
  return response.data;
};

const getTheDog = async (params) => {
  let API_URL = `/dog/dogById/${params.id}`;
  const response = await API.get(API_URL);
  toast.success(response.data.message, { theme: "colored" });
  return response.data;
};

const putTheDog = async (dog) => {
  let API_URL = `/dog/updateDog/${dog._id}`;
  const response = await API.put(API_URL, dog);
  toast.success(response.data.message, { theme: "colored" });
  return response.data;
};

const dogService = {
  getTheDogs,
  getTheDog,
  putTheDog,
  postTheDog,
};

export default dogService;
