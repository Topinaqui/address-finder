import axios from "axios";
const SERVICE_BASE_URL = "http://localhost:3333";

const getMap = async function getMap(address = { isEmpty: true }) {
  if (address.isEmpty) {
    return address;
  }

  let { data } = await axios.post(`${SERVICE_BASE_URL}/get-map`, address);

  return data;
};

export { getMap };
