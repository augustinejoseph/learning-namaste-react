import { useEffect } from "react";


export function RestaurantDetail()    {
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=3369&submitAction=ENTER")
        const cards = data.cards;
        
    };

    useEffect( () => {

        fetchData()
    });

    return(
        <div>
            <h1>Res Detail</h1>
        </div>
    )
}
