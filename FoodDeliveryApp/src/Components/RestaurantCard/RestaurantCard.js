import Shimmer from "../Shimmer/Shimmer";
import "./RestaurantCard.css"



const RestaurantCard = ({name, avgRating, cusines, cloudinaryImageId, person}) => {

    return  (
        <div className="restaurantcard">
            <img className="restaurantcardimage" src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`} />
            <h3 className="restaurantcard-name">{name}</h3>
            <h4 className="restaurantcard-rating">{avgRating} stars</h4>
            <p className="restaurantcard-rating">{person.name}</p>
        </div>
    )
}
export default RestaurantCard;
// cloudinaryImageId