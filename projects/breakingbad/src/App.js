import axios from "axios";
import React,{useState,useEffect} from "react"
import './App.css';
import Header from "./Header"
import CharecterGrid from './CharecterGrid'
import Search from "./Search";
const App=()=> {
  const [items,setItems] = useState([])
  const [loading,setLoading] = useState(true)
  const [query,setQuery] = useState("")
  useEffect(() =>{
    const fetchItems = async() =>{
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      console.log(result.data);
      setItems(result.data)
      setLoading(false)
    }
    fetchItems();
  },[query])
  return (
    <div className="App">
     <Header/>
     <Search getQuery={(text)=> setQuery(text)} />
     <CharecterGrid items={items} loading={loading} />
    </div>
  );
}

export default App;
