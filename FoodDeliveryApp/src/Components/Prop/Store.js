import {useState } from 'react';

export function Section({info, style, buttonDesign}){
    const [isVisible, setIsVisible] = useState(false)
    function buttonFunction() {
        setIsVisible(!isVisible)
    } 
    return(
        <div>
            <h2 style={style}>{info.about}</h2>
            { isVisible && <h4 style ={style}>{info.description}</h4>}
            <button style={buttonDesign} onClick={buttonFunction}>{isVisible ? "Hide" : "Show"}</button>


        </div>
    )
}


const Store = () => {
    const data = {

        about : "This is the about page",
        description : "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
    }
    const buttonDesign={
        color : "white",
        backgroundColor : "black",
        justifyContent: "center",
        textAlign: "center",
        alignItems : "center"
    }
    const design = {
        display : "flex",
        justifyContent : "center",
        // minHeight : "60vh"


    }
    return(
        <div>
            <h1 style={{ textAlign : "center" , padding : "20px", border:"1px solid red"}}>Store Page</h1>
            <Section info = {data} style= {design} buttonDesign= {buttonDesign}/>
            <Section info = {data} style= {design} buttonDesign= {buttonDesign}/>
        </div>
    )
}
export default Store;