import react from 'react';
import Book from './book';
import BookActions from './bookActions';
import ProgressController from './progressController';
import ProgressGraph from './progressGraph';

const BookCard = (props) => {
  const { book } = props;
  const { titleInfo, progress } = book;

  return (
    <>
      <div className="book-card__book-container">
        <Book bookData={titleInfo}/>
        <BookActions />
      </div>
      <div className="book-card__progress-graph-container">
        <ProgressGraph progress={progress}/>
      </div>
      <div className="book-card__progress-controller">
        <ProgressController progress={progress}/>
      </div>
    </>
  );
}

export default BookCard;