import {useLocation} from 'react-router-dom'

const Error = () => {
    var error = useLocation()
    console.log(error)
    return (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center", height:"60vh"}}>
            <h1 style={{display:"flex", flexDirection:"column"}}>Oops...!</h1>
            <h2>Something went wrong...on </h2>
            <p>{error.pathname}</p>

        </div>
    )
}
export default Error;