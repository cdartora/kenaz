import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:3001`,
});

export const requestBooks = async () => {
  const { data } = await api.get("/books");
  return data;
};

export const requestRecommendedBooks = async () => {
  const { data } = await api.get("/books/recommended");
  return data;
};
