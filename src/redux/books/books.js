// Actions
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const BOOKS_SUCCESS = 'BOOKS_SUCCESS';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

// API
const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/DtCeReylHfRRGmnkWwvK/';

// Initial State
/* const initialState = {
  bookList: [
    {
      titleInfo: {
        id: '1',
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
        id: '2',
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
        id: '3',
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
}; */

// booklist['bookid'].titleInfo
// booklist['bookid'].progress
/* const initialState = {
  bookList: {
    '1': {
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
    '2': {
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
    '3': {
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
  },
}; */

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
  return -1;
};

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
    case BOOKS_SUCCESS:
      return {
        bookList: Object.keys(action.payload).map((key) => (
          {
            titleInfo: {
              id: key,
              title: action.payload[key][0].title,
              author: null,
              category: action.payload[key][0].category,
            },
            progress: {
              chapterNumber: null,
              chapterTitle: null,
              completion: 0,
            },
          }
        )),
      };
    case ADD_BOOK:
      return { bookList: [...state.bookList, action.payload] };
    case REMOVE_BOOK:
      return { bookList: state.bookList.filter((book) => book.titleInfo.id !== action.payload) };
    default:
      return state;
  }
};

export default reducer;

// API Stuff
/*

App id: DtCeReylHfRRGmnkWwvK

Create Book:
https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/DtCeReylHfRRGmnkWwvK/books/

1st book:
{
    "item_id": "jXX988cjjsdi",
    "title": "House of Suns",
    "category": "Science Fiction"
}

Get books:

https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/DtCeReylHfRRGmnkWwvK/books/

Delete book (Use DELETE in action)

https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/DtCeReylHfRRGmnkWwvK/books/jXX988cjjsdi
*/

/* Example result from GET to API
  {
  "jXoiudf2cjjsdi": [
    {
      "category": "Fantasy",
      "title": "Lord of the Rings"
    }
  ],
  "jXX988cjjsdi": [
    {
      "title": "House of Suns",
      "category": "Science Fiction"
    }
  ]
} */
