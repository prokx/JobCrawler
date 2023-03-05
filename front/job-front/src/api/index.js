import axios from "axios";

export const loginRequest = async (input) => {
  const res = await axios.post("http://localhost:8082/members/login", input);
  return res;
};

export const joinRequest = async (input) => {
  const res = await axios.post("http://localhost:8082/members/join", input);
  return res;
};

export const getJobRequest = async (input) => {
  const res = await axios.get("http://localhost:8082/jobs", {
    headers: { Authorization: "Bearer " + input.accessToken },
  });

  return res;
};
