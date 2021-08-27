// Actions
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const BOOKS_SUCCESS = 'BOOKS_SUCCESS';
const BOOKS_FAILURE = 'BOOKS_FAILURE';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

// API
const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/DtCeReylHfRRGmnkWwvK/';

// Initial State

const initialState = {
  bookList: [],
};

// Action Creators
export const booksSuccess = (payload) => ({
  type: BOOKS_SUCCESS,
  payload,
});

export const fetchBooks = () => async (dispatch) => {
  const response = await fetch(`${baseURL}books/`, {
  });
  const responseStatus = await response.ok;
  if (responseStatus) {
    const books = await response.json();
    return dispatch(booksSuccess(books));
  }
  return dispatch(BOOKS_FAILURE());
};

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const addBooktoAPI = (payload) => async (dispatch) => {
  const response = await fetch(`${baseURL}books/`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: payload.titleInfo.id,
      title: payload.titleInfo.title,
      category: payload.titleInfo.category,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const responseStatus = await response.ok;
  if (responseStatus) {
    return dispatch(addBook(payload));
  }
  return dispatch(BOOKS_FAILURE());
};

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const removeBookFromAPI = (payload) => async (dispatch) => {
  const response = await fetch(`${baseURL}books/${payload}`, {
    method: 'DELETE',
  });
  const responseStatus = await response.ok;
  if (responseStatus) {
    return dispatch(removeBook(payload));
  }
  return dispatch(BOOKS_FAILURE());
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKS_SUCCESS:
      return {
        bookList: Object.keys(action.payload).map((key) => (
          {
            titleInfo: {
              id: key,
              title: action.payload[key][0].title,
              author: 'unknown',
              category: action.payload[key][0].category,
            },
            progress: {
              chapterNumber: Math.floor(Math.random() * 10),
              chapterTitle: null,
              completion: Math.floor(Math.random() * 100) / 100,
            },
          }
        )),
      };
    case BOOKS_FAILURE:
      return state;
    case ADD_BOOK:
      return { bookList: [...state.bookList, action.payload] };
    case REMOVE_BOOK:
      return { bookList: state.bookList.filter((book) => book.titleInfo.id !== action.payload) };
    default:
      return state;
  }
};

export default reducer;
