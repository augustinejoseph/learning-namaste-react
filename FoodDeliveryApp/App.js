import "./App.css"
import Header from "./Components/Header/Header.js"
import Footer from "./Components/Footer/Footer.js"
import Body from "./Components/Body/Body.js"
import RestaurantCard from "./Components/RestaurantCard/RestaurantCard.js";

const App = () => {
    return (
        <>
            <Header />
            <Body />
            {/* <RestaurantCard /> */}
            <Footer />
        </>
    )
};
export default App;