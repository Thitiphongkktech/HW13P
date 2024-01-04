import React , {useState} from "react";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";

function App() {
  const [searchText,setSearchText] = useState('')
  return (
  <><center><br/>
  <h1>Product Search</h1>
  <SearchBar searchText={searchText} setSearchText={setSearchText}/>
  <ProductList searchText={searchText}/>
  </center>
  </>
  )
};

export default App;
