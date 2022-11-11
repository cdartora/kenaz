import { createContext } from "react";
import { Book } from "../components/Books/books";

type IBookContext = {
  recommendedBooks: Book[];
  isLoading: boolean;
};

const BookContext = createContext<IBookContext>({} as IBookContext);

export default BookContext;
