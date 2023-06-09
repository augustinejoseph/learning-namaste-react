import { useEffect, useState } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import "./Body.css"
import { RestaurantList } from "../../Constants/MockRestaurent.js"
import Shimmer from "../Shimmer/Shimmer";




const Body = ({user}) => {
    const [swiggyRestaurantList, setSwiggyRestaurantList] = useState('')

    async function swiggyApiCall() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING")
        // console.log(data)
        const json = await data.json();
        setSwiggyRestaurantList(json.data.cards[2].data.data.cards)
        console.log("api from swiggy ", json.data.cards[2].data.data.cards)
        console.log("print prop ",user.name)
    }


    useEffect(() => {
        swiggyApiCall()
    }, []);

    return (swiggyRestaurantList.length === 0) ? <Shimmer /> : (
        <div className="restaurantbody">

            {Object.keys(swiggyRestaurantList).map((key) => {
                const restaurant = swiggyRestaurantList[key];
                return <RestaurantCard {...restaurant.data} person = {user} />;
            })}

        </div>
    )
}
export default Body;