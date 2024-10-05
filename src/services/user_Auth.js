import { myAxios } from "./helper";

export const signUp = async (user) => {
  try {
    return myAxios.post("/api/user/sign-up",user).then((res) => res.data);
  } catch (error) {
    throw error.response.data;
  }
}