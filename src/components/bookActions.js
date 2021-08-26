import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { removeBookFromAPI } from '../redux/books/books';

const BookActions = (props) => {
  const dispatch = useDispatch();

  const { bookId } = props;

  const removeBookFromStore = () => {
    dispatch(removeBookFromAPI(bookId));
  };

  return (
    <ul className="book-actions">
      <li className="book-actions__action">
        <button type="button" className="book-actions__action__btn">Comments</button>
      </li>
      <li className="book-actions__action">
        <button type="button" className="book-actions__action__btn" onClick={removeBookFromStore}>Remove</button>
      </li>
      <li className="book-actions__action">
        <button type="button" className="book-actions__action__btn">Edit</button>
      </li>
    </ul>
  );
};

BookActions.propTypes = {
  bookId: PropTypes.string.isRequired,
};

export default BookActions;
