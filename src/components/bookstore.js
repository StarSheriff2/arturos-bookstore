import react from 'react';
import AddBookForm from './addBookForm';
import BookCard from './bookCard';

const Bookstore = (props) => {
  return (
    <>
      <section className="books-section">
        <h2 className="hidden">Books Collection</h2>
        <ul className="booklist">
          <li className="book-card">
            <BookCard />
          </li>

        </ul>
      </section>
      <section className="add-book-section">
        <h2 className="">Add New Book</h2>
        <AddBookForm />
      </section>
    </>
  );
}

export default Bookstore;
