import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBooktoAPI } from '../redux/books/books';

const AddBookForm = () => {
  const dispatch = useDispatch();

  const submitBookToStore = (event) => {
    event.preventDefault();

    const title = event.target[0].value;
    const author = event.target[1].value;
    const category = event.target[2].value;

    event.target.reset();

    const newBook = {
      titleInfo: {
        id: uuidv4(),
        title,
        author,
        category,
      },
      progress: {
        chapterNumber: Math.floor(Math.random() * 10),
        chapterTitle: null,
        completion: Math.floor(Math.random() * 100) / 100,
      },
    };

    dispatch(addBooktoAPI(newBook));
  };

  return (
    <>
      <form action="POST" className="add-book-form" onSubmit={submitBookToStore}>
        <input type="text" placeholder="Book title" required />
        <input type="text" placeholder="Author" required />
        <select name="book-category" id="book-category" className="add-book-form__dropdown">
          <option value="action">action</option>
          <option value="science fiction">science fiction</option>
          <option value="economy">economy</option>
          <option value="economy">adventure</option>
          <option value="economy">non-fiction</option>
        </select>
        <button type="submit" className="add-book-form__submit">Add book</button>
      </form>
    </>
  );
};

export default AddBookForm;
