import React , {createContext , useState , useReducer} from 'react';
import {uuid} from 'uuidv4';
import { BookReducer } from '../Reducer/BookReducer';

 export const BookContexts = createContext();

const BookContextsProvider = (props) =>{
   const [books , dispatch] =  useReducer(BookReducer,[
        // {title : "abcbg" , author : 'sdfoioisd' , id : '1'},
        // {title : "zxcvbnm" , author : 'qwertyuiuytr' , id : '2'}
    ])
    
    return(
        <BookContexts.Provider value={{books ,dispatch}} >
            {props.children}
        </BookContexts.Provider>
    )
}
export default BookContextsProvider;
