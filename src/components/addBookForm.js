import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBookForm = () => {
  const dispatch = useDispatch();

  const submitBookToStore = (event) => {
    event.preventDefault();
    /* const newBook = {
        id: uuidv4(),
        title,
        author
    } */
    console.log(event);
    // dispatch(addBook(newBook));
  };

  return (
    <>
      <form action="#" className="add-book-form" onSubmit={submitBookToStore}>
        <input type="text" placeholder="Book title" required />
        <select name="book-category" id="book-category">
          <option value="" disabled selected hidden>Category</option>
          <option value="action">action</option>
          <option value="science fiction">science fiction</option>
          <option value="economy">economy</option>
        </select>
        <button type="submit">Add book</button>
      </form>
    </>
  );
};

export default AddBookForm;
