import { useState } from 'react';
import '../SearchBar/SearchBar.css'
import {RestaurantList} from "../../Constants/MockRestaurent.js"

const SearchBar = () => {
    const [restaurants, setRestaurants] = useState(RestaurantList)
    // console.log(RestaurantList)
    const searchResult = function filterData(searchInput, RestaurantList) {
        const filterData = RestaurantList.filter(( restaurants) => {
            
        }

        )
    
    }
    const [searchInput, setSearchInput] = useState('')
    console.log(searchInput)
    const searchChange = (e) => {
        setSearchInput(e.target.value)
    }
    function SearchButtonClick() {

    }
    function filterData() {
        
    }
    
    return (
        <div style={{display:"flex", alignItems:'center',justifyContent:"center"}}>
        <input className='searchInputField' type= 'text' value = {searchInput} placeholder = 'search' onChange={searchChange} />
        <button className='searchButton' type='submit' onClick={filterData(searchInput, RestaurantList)}> Search</button>
        < h1>{searchInput}</h1>
        </div>
    )
}
export default SearchBar;