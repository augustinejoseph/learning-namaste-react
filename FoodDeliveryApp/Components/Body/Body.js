import RestaurantCard from "../RestaurantCard/RestaurantCard";
import "./Body.css"
import {RestaurantList} from "../../Datas/MockRestaurent.js"


const Body = () => {
    return (
        <div className="restaurantbody">
            {/* <RestaurantCard restaurantName = {RestaurantList[0]} /> */}

            {RestaurantList.map((restaurant) => {
                return <RestaurantCard {...restaurant.data} />
            })}

        </div>
    )
}
export default Body;