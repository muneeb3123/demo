import React from 'react';
import BookCard from './cards';
import BookForm from './adbook';
import { useSelector } from 'react-redux';

const Book = () => {
  const {items} = useSelector((state) => state.book)
  return (
    <>
    {items.map((item) => (
  <BookCard title={item.title} author={item.author} category={item.category} key={item.id} id={item.id} />
))}
      {<BookForm />}
    </>
  )
};
export default Book;
