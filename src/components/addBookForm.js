import { useDispatch } from 'react-redux';

import { addBook } from './redux/books/books';

import { v4 as uuidv4 } from "uuid";

const dispatch = useDispatch();

const submitBookToStore = () => {
  const newBook = {
      id: uuidv4(),
      title,
      author
  }
  dispatch(addBook(newBook));
}

const AddBookForm = () => (
  <>
    <form action="#" className="add-book-form">
      <input type="text" placeholder="Book title" />
      <select name="book-category" id="book-category">
        <option value="" disabled selected hidden>Category</option>
        <option value="action">action</option>
        <option value="science fiction">science fiction</option>
        <option value="economy">economy</option>
      </select>
      <button type="submit" onClick={submitBookToStore}>Add book</button>
    </form>
  </>
);

export default AddBookForm;
