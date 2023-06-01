import react, { createElement } from "react";
import ReactDOM from "react-dom/client";
import HeaderCompo, {SubHeading} from "./Component/Header.js"

const App = () => {
    return(
        
        <div>
            <HeaderCompo />
            {HeaderCompo()}
            {SubHeading()}
            {element}   
        </div>
       
        
    )
};

const element = react.createElement("h1", {id:"component"}, "It is a component")
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);