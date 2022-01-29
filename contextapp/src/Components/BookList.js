import React , {useContext} from 'react'
import { BookContexts } from '../Contexts/BookContexts'
import BookDetails from './BookDetails'


const BookList = () =>{
    const {books } =  useContext(BookContexts)
    return books.length ? (
        <div className="book-list">
            <ul>
                {books.map(book =>{
                    return(
                        <BookDetails  book={book} key={book.id} />
                    )
                })}
            </ul>
        </div>
    ) : (<div className="empty" >
            no books to read , hello , free time! :)
    </div>)
}
export default BookList