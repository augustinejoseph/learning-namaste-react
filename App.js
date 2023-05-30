const children = React.createElement("h3", {id: "children"}, "child data")
const data = React.createElement("h1", {style:{color : "red"}}, ["heading one@", children])
const home = ReactDOM.createRoot(document.getElementById("home"))
home.render(data)