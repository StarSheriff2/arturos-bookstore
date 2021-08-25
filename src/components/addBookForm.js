import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBookForm = () => {
  const dispatch = useDispatch();

  const submitBookToStore = (event) => {
    event.preventDefault();
    const title = event.target[0].value;
    const category = event.target[1].value;
    const author = null;
    event.target.reset();

    const newBook = {
      titleInfo: {
        id: uuidv4(),
        title,
        author,
        category,
      },
      progress: {
        chapterNumber: null,
        chapterTitle: null,
        completion: null,
      },
    };

    dispatch(addBook(newBook));
  };

  return (
    <>
      <form action="POST" className="add-book-form" onSubmit={submitBookToStore}>
        <input type="text" placeholder="Book title" required />
        <select name="book-category" id="book-category">
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
