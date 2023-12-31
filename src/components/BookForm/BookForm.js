import { useState } from 'react';
import { useDispatch } from 'react-redux';

const BookForm = props => {

    const dispatch = useDispatch(); 

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_BOOK', payload: {title, author}});
        setTitle('');
        setAuthor('');
    }

    return (
        <form>
            Title: <input type="text"  value={title} onChange={e => setTitle(e.target.value)} />
            Author: <input type="text" value={author} onChange={e => setAuthor(e.target.value)} />
            <button onClick={handleSubmit}>Add book</button>
        </form>
    )
}

export default BookForm;