// services/user_Auth.js

import { myAxios } from "./helper";

export const signUp = async (user) => {
  try {
    const response = await myAxios.post("/api/user/sign-up", user);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network error');
  }
};

export const login = async (credentials) => {
  try {
    const response = await myAxios.post("/api/user/login", credentials);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network error');
  }
};