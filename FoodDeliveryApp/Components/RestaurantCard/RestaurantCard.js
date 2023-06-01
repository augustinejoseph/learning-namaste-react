import "./RestaurantCard.css"



const RestaurantCard = ({name, avgRating, cusines, cloudinaryImageId}) => {

    return(
        <div className="restaurantcard">
            <img className="restaurantcardimage" src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`} />
            <h2>{name}</h2>
            <h4>{avgRating} stars</h4>
            {/* <h4>{cusines.join(", ")}</h4> */}
        </div>
    )
}
export default RestaurantCard;
// cloudinaryImageId