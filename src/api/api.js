import axios from "axios";

const url = "https://json-service-x1zg.onrender.com";

export const callGetAllItems = async () => {
  const response = await axios.get(`${url}/items`);
  return response.data;
};

export const callShortlistedItems = async () => {
  const response = await axios.get(`${url}/items?shortlisted=true`);
  return response.data;
};

export const updateItemStatus = async (item)=>{
  const response = await axios.put(`${url}/items/${item.id}`,item)
}