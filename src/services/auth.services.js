import axios from "axios";
import { api } from "../config";

const LOGIN_URL = api + '/auth/login';
const REGISTER_URL = api + '/auth/register';

export const register = async ({ name, email, password }) => {
  try {
    const { data } = await axios.post(REGISTER_URL, { name, email, password });
    return data;
  } catch (e) {
    throw new Error(e?.response?.data?.message || 'unknown error');
  }
};

export const login = async ({ email, password }) => {
  try {
    const { data } = await axios.post(LOGIN_URL, { email, password });
    return data;
  } catch (e) {
    throw new Error(e?.response?.data?.message || 'unknown error');
  }
};
