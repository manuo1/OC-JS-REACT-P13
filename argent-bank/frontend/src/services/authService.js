import axios from "axios";

const API_URL = "http://localhost:3001/api/v1/user";

export async function loginUserAPI(credentials) {
  const response = await axios.post(`${API_URL}/login`, credentials);
  return response.data.body.token;
}

export async function getUserProfileAPI(token) {
  const response = await axios.post(
    `${API_URL}/profile`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.body;
}

export async function updateUserProfileAPI(token, data) {
  const response = await axios.put(
    "http://localhost:3001/api/v1/user/profile",
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.body;
}
