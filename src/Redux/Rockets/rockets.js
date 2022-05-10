import ApiClient from '../../service/Apiclient';

const FETCHED_BOOKS = 'bookstore/books/FETCHED_BOOKS';
const ADD_NEW_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

export function addNewBook(newBook) {
  return {
    type: ADD_NEW_BOOK,
    newBook,
  };
}

export function removeBook(book) {
  return {
    type: REMOVE_BOOK,
    book,
  };
}

export function fetchedBooks(books) {
  const formattedBooks = Object.entries(books).map(([key, value]) => ({ ...value[0], id: key }));
  return {
    type: FETCHED_BOOKS,
    books: formattedBooks,
  };
}

export const fetchBooks = () => async (dispatch) => {
  const response = await ApiClient.fetchAPIBooks();
  dispatch(fetchedBooks(response));
};

export const AddNewBooks = (newBook) => async (dispatch) => {
  await ApiClient.addBook(newBook);
  dispatch(addNewBook({ ...newBook, id: newBook.item_id }));
};

export const removeBooks = (book) => async (dispatch) => {
  await ApiClient.removeBook(book);
  dispatch(removeBook({ ...book }));
};

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_NEW_BOOK:
      return [
        ...state,
        action.newBook,
      ];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.id !== action.book.id)];
    case FETCHED_BOOKS:
      return [...action.books];
    default:
      return state;
  }
}
