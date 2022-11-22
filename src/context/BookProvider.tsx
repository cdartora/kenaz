import { PropsWithChildren, useEffect, useState } from "react";
import { requestRecommendedBooks } from "../services/requests";
import BookContext from "./BookContext";

function BookProvider({ children }: PropsWithChildren) {
  const [isLoading, setIsLoading] = useState(true);
  const [recommendedBooks, setRecommendedBooks] = useState([]);

  const fetchBooks = async () => {
    const books = await requestRecommendedBooks();
    console.log("-------------recommended books-------------", books);
    setRecommendedBooks(books);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = { recommendedBooks, isLoading };

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
}

export default BookProvider;
