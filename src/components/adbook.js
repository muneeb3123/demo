import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/books/bookSlice";


function BookForm() {
  const dispatch = useDispatch();
  const [title, settitle] = useState('');
  const [author, setauthor] = useState('');
  const [category, setCategory] = useState('');

  const addbook = (e) => {
    e.preventDefault();
    const id = Date.now();
    dispatch(addBook({ title, author, id , category}));
    settitle('');
    setauthor('');
    setCategory('');
  };

  return (
    <form
      onSubmit={(e) => addbook(e)}
    >
      <h3 className="form-title">Add new Book</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => settitle(e.target.value)}
        className="title"
        placeholder="Add title"
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setauthor(e.target.value)}
        className="author"
        placeholder="Add Author"
      />
       <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="category"
        placeholder="Add Category"
      />
      <button type="submit" className="submit">
        Add Book
      </button>
    </form>
  );
}

export default BookForm;
