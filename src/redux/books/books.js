// Actions
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

// Initial State
const initialState = {
  bookList: [
    {
      titleInfo: {
        id: 1,
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
        id: 2,
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
        id: 3,
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

// Action Creators
export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return { bookList: [...state.bookList, action.payload] };
    case REMOVE_BOOK:
      return { bookList: state.bookList.filter((book) => book.titleInfo.id !== action.payload) };
    default:
      return state;
  }
};

export default reducer;
