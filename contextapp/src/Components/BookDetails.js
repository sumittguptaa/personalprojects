import React ,{useContext}from 'react'
import { BookContexts } from '../Contexts/BookContexts'

const BookDetails = ({book}) =>{
    const {dispatch} = useContext(BookContexts)
   
    return(
        <li onClick={() => dispatch({type: 'REMOVE_BOOK' , id : book.id}) }>
        <div className="title">{book.title}</div>
        <div className="author">{book.author}</div>
        
        </li>
    )
}

export default BookDetails