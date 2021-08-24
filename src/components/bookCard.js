import react from 'react';
import Book from './book';
import BookActions from './bookActions';

const BookCard = (props) => {
  return (
    <>
      <div className="book-card__book-container">
        <Book />
        <BookActions />
      </div>
      <div className="book-card__progress-graph-container">

      </div>
      <div className="book-card__progress-controller">

      </div>
    </>
  );
}

export default BookCard;
