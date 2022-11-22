import { useContext } from "react";
import { Link } from "react-router-dom";

import BookContext from "../../context/BookContext";
import BookCard from "./BookCard";
import { Book } from "./books";

import "./Books.css";
import Loading from "./Loading";

function BooksSection() {
  const { recommendedBooks, isLoading } = useContext(BookContext);

  return (
    <div className="container">
      <div className="title-container">
        <h1 className="title">Livros</h1>
        <Link to="/livros" className="more-anchor">
          ver mais
        </Link>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="books-container">
          {recommendedBooks.map((book: Book, index: number) => (
            <BookCard key={book.title} book={book} index={index} />
          ))}
        </div>
      )}
    </div>
  );
}

export default BooksSection;
