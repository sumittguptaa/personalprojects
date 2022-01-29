import React , {useContext} from 'react'
import { BookContexts } from '../Contexts/BookContexts';


const Navbar  = () =>{
  const {books} =  useContext(BookContexts);
    return(
        <div className="navbar" >
            <h1>Ninja Reading List</h1>
            <p>No. of books are {books.length}</p>
        </div>
    );
}
export default Navbar