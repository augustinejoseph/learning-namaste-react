import "./Header.css"

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
            <Logo className="logo" />
            <Title />
            <div className = "header-links">
                <ul>
                    <li> Home</li>
                    <li> About</li>
                    <li> Contact</li>
                </ul>
            </div>
        </div>
    )
};
export default Header;