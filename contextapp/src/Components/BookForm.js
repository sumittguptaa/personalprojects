import React , {useContext , useState} from 'react'
import { BookContexts } from '../Contexts/BookContexts'

const BookForm = () => {
 
    const {dispatch} = useContext(BookContexts)
    const[title, setTitle] = useState('')
    const[author, setAuthor] = useState('')
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch({type : 'ADD_BOOK' , book : {
            title , author
        }})

        setTitle('');
        setAuthor('');

    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle( e.target.value)} />
                <input type="text" placeholder="Title" value={author} onChange={(e) => setAuthor( e.target.value)} />
                <button>ADD </button>
            </form>
        </div>
    )
}
export default BookForm