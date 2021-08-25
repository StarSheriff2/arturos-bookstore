import PropTypes from 'prop-types';

const Book = (props) => {
  const { bookData } = props;
  const { title, author, category } = bookData;

  return (
    <div className="book">
      <p className="book__category">{category}</p>
      <h3 className="book__title">{title}</h3>
      <h4 className="book__author">{author}</h4>
    </div>
  );
};

Book.propTypes = {
  bookData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default Book;
