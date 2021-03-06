import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { fetchBooks } from '../redux/books/books';
import AddBookForm from './addBookForm';
import BookCard from './bookCard';

const Bookstore = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const bookList = useSelector((state) => state.booksReducer.bookList, shallowEqual);

  let content;

  if (bookList.length === 0) {
    content = <li>Add a book</li>;
  } else {
    content = bookList.map((book) => (
      <li key={book.titleInfo.id} className="book-card">
        <BookCard book={book} />
      </li>
    ));
  }

  return (
    <>
      <section className="books-section page-section">
        <h2 className="hidden">Books Collection</h2>
        <ul className="bookList">
          { content }
        </ul>
      </section>
      <section className="add-book-section page-section">
        <hr className="add-book-section__hr d-none" />
        <h2>Add New Book</h2>
        <AddBookForm />
      </section>
    </>
  );
};

export default Bookstore;
