const AddBookForm = () => (
  <>
    <form action="#" className="add-book-form">
      <input type="text" placeholder="Book title"/>
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

export default AddBookForm;
