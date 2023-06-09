import "./App.css"
import Header from "./src/Components/Header/Header.js"
import Footer from "./src/Components/Footer/Footer.js"
import Body from "./src/Components/Body/Body.js"
// import RestaurantCard from "./src/Components/RestaurantCard/RestaurantCard.js";
import SearchBar from "./src/Components/SearchBar/SearchBar";
import About from './src/Components/Static-Pages/About'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Blog } from "./src/Components/Static-Pages/Blog";
import {Contact} from './src/Components/Static-Pages/Contact'
import Error from "./src/Components/Static-Pages/Error";
import { RestaurantDetail } from "./src/Components/RestaurantDetail.js/RestaurantDetail";
import Store from "./src/Components/Prop/Store";

const App = () => {

    const user = {
        name: "augustine",
        email : "augu@gmail.com"
    }
    return (

        <Router >
            <Header />
            <SearchBar />
            <Routes>
                <Route path="/" element={<Body user={user} />} />
                <Route path="/about" Component={About} />
                <Route path="/blog" Component={Blog} />
                <Route path ="/contact" Component={Contact} />
                <Route path ="*" Component={Error} />
                <Route path = "/restaurant/:id" Component={RestaurantDetail} />
                <Route path = "/store" Component={Store} />
            </Routes>
            <Footer />
        </ Router >

    )
};
export default App;