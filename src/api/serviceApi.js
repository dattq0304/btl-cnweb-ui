import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;
console.log(baseUrl);

const login = async ({ username, password }) => {
  const formData = new FormData();
  formData.append("name", username);
  formData.append("password", password);
  const urlencoded = new URLSearchParams(formData).toString();

  const res = await axios.post(`http://localhost:8080/auth/login`, urlencoded,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  return res.data;
};

const register = async ({ username, password }) => {
  const formData = new FormData();
  formData.append("name", username);
  formData.append("password", password);
  const urlencoded = new URLSearchParams(formData).toString();

  const res = await axios.post(`http://localhost:8080/auth/register`, urlencoded,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  return res.data;
};

const getDirectMessages = async (toId) => {
  try {
    const res = await axios.get(`http://localhost:8080/chat/direct-message/${toId}`);
    return res.data;
  } catch (err) {
    console.log(err);
    return { status: 0 };
  }
}

export {
  login,
  register,
  getDirectMessages
};