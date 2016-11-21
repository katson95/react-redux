export function selectBook(book:Book) {
  console.log(book);
  return{
    type:'BOOK_SELECTED',
    payload:book,
  };
}
