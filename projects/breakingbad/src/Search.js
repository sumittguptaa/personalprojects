import React, { useState } from 'react'

const Search = ({getQuery}) => {
    const [text,setText] = useState()
    const handleChange = (e)=>{
            setText(e.target.value)
            getQuery(text)
    }
    return (
        <sec className="search" >
            <form>
                <input type="text" className="form-control" placeholder="search" autoFocus value={text} onChange={handleChange} />
            </form>
        </sec>
    )
}

export default Search
