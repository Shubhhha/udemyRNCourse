import axios from "axios";
const API_KEY = "AIzaSyD9WVbiUA1fe_SGDJdUvl64i3Xr6U53wSY";

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  const token = response?.data?.idToken;
  return token;
  console.log("response: ", response.data);
}

export const createUser = async (email, password) => {
  return await authenticate("signUp", email, password);
};

export const login = async (email, password) => {
  return await authenticate("signInWithPassword", email, password);
};
