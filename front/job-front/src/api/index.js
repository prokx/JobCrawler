import axios from "axios";

export const loginRequest = async (input) => {
  const res = await axios.post("http://localhost:8082/members/login", input);
  return res.data;
};

export const joinRequest = async (input) => {
  const res = await axios.post("http://localhost:8082/members/join", input);
  console.log(res);
  return res.data;
};
