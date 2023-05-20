import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookSlice';

const BookCard = ({ author, title, category, id }) => {
  const dispatch = useDispatch()

  return (
    <>
    <div className="bookCont">
      <div className="title">
        <p>{category}</p>
        <p>{title}</p>
        <p>{author}</p>
        <ul className="buttons">
          <li><button type="button">Comments</button></li>
          <li><button type="button" onClick={() => dispatch(removeBook(id))}>Remove</button></li>
          <li><button type="button">Edit</button></li>
        </ul>
      </div>
      <div className="bChart">
        <div>Chart</div>
        <div>
          <p>64% progress</p>
          <p>COMPLETED</p>
        </div>
      </div>
      <div className="bookChap">
        <p>Current Chapter</p>
        <p>Chapter 4</p>
        <button type="button">Update Progress</button>
      </div>
    </div>
  </>
  );
};
export default BookCard;
