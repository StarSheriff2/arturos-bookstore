import PropTypes from 'prop-types';

// Components
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
        <Book bookData={titleInfo} />
        <BookActions bookId={titleInfo.id} />
      </div>
      <div className="book-card__progress-graph-container">
        <ProgressGraph progress={progress} />
      </div>
      <div className="book-card__progress-controller">
        <ProgressController progress={progress} />
      </div>
    </>
  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
    titleInfo: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string,
      category: PropTypes.string,
    }),
    progress: PropTypes.shape({
      chapterNumber: PropTypes.number,
      chapterTitle: PropTypes.string,
      completion: PropTypes.number,
    }),
  }).isRequired,
};

export default BookCard;
