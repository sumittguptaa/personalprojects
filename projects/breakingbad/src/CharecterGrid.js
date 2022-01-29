import React from 'react'
import CharecterItem from "./CharecterItem"
import Spinner from "./Spinner"

const CharecterGrid = ({items, loading}) => {
    return loading ? (<Spinner/>) : (<section className="cards" >
        {items.map(item =>(
           <CharecterItem item={item} key={item.char_id} />
        ))}
    </section>)   
}

export default CharecterGrid
