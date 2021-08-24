import React, { useState } from 'react';
import AddBookForm from './addBookForm';
import BookCard from './bookCard';

const Bookstore = () => {
  const initialObj = {
    bookList: [
      {
        titleInfo: {
          title: 'The Hunger Games',
          author: 'Suzanne Collins',
          category: 'action',
        },
        progress: {
          chapterNumber: 17,
          chapterTitle: null,
          completion: 0.65,
        },
      },
      {
        titleInfo: {
          title: 'Dune',
          author: 'Frank Herbert',
          category: 'science fiction',
        },
        progress: {
          chapterNumber: 3,
          chapterTitle: 'A Lesson Learned',
          completion: 0.8,
        },
      },
      {
        titleInfo: {
          title: 'Capital in the 21st Century',
          author: 'Suzanne Collins',
          category: 'economy',
        },
        progress: {
          chapterNumber: null,
          chapterTitle: 'Introduction',
          completion: 0,
        },
      },
    ],
  };

  const [bookstore, setBookstore] = useState(initialObj);

  const addBook = (newBook) => setBookstore((bookStore) => {
    const { bookList } = bookStore;

    return { bookList: bookList.concat(newBook) };
  });

  return (
    <>
      <section className="books-section page-section">
        <h2 className="hidden">Books Collection</h2>
        <ul className="bookList">
          <li className="book-card">
            <BookCard book={bookstore.bookList[0]} />
          </li>
          <li className="book-card">
            <BookCard book={bookstore.bookList[1]} />
          </li>
          <li className="book-card">
            <BookCard book={bookstore.bookList[2]} />
          </li>
        </ul>
      </section>
      <section className="add-book-section page-section">
        <h2>Add New Book</h2>
        <AddBookForm addBook={addBook} />
      </section>
    </>
  );
};

export default Bookstore;
