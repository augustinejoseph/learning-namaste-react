import "./Header.css"
import {Link} from 'react-router-dom'

const Title = () => {
    return(
    <h2> Zumato</h2>
)};

const Logo = () => (
    <img src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4=w100-rw" />
)

const Header = () => {
    return(
        <div className ="header">
            <Link to = "/"><Logo className="logo" /> </Link>
            <Link to="/"><Title /></Link>
            <div className = "header-links">
                <ul>
                    <Link to= "/">  {<li> Home</li>} </Link>
                    <Link to ="/about" ><li> About</li></Link>
                    <Link to="/contact"><li> Contact</li></Link>
                    <Link to="/blog"><li>Blog</li> </Link>
                    <Link to = "/store"><li>Store</li></Link>
                </ul>
            </div>
        </div>
    )
};
export default Header;