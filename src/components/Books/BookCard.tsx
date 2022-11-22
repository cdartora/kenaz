import { Book } from "./books";

import "./Books.css";

interface BookCardProps {
  book: Book;
  index: number;
}

function BookCard({ book, index }: BookCardProps) {
  return (
    <a className={index > 1 ? "overflow" : ""} href={book.url}>
      <div className="book-card-container">
        <img
          className="cover"
          src={book.cover}
          alt={`capa do livro ${book.title}`}
        />
        <h2>{book.title}</h2>
        <h3>{book.author}</h3>
      </div>
    </a>
  );
}

export default BookCard;
