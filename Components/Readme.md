# Element and Component

```jsx
// React Element
const elementHeader = {
	<h1> React Element </h1>
}

// React Component
const ComponenetHeader = () => {
	<h1> React Component </h1>
}
```

- React Element is an Object.
- Functional Component is Function.

```jsx
// Rendering
// React Element
root.render(elementHeader);

// React Component
//use < name />
root.render(<ComponentHeader />
```

<br>

# Arrow Functions

```jsx
// Traditional function expression
const sum1 = function (a, b) {
  return a + b;
};

// Arrow function
const sum2 = (a, b) => a + b;
```

```jsx
const arrowFnName = () => {
  return <div></div>;
};

// is same as:

const arrowFnName = () => <div></div>;
```

# Named Export and Default Export
```jsx
// named export
export const SubHeading = () => (
    <h3> This is a Subheading(Subheading Component)</h3>
);
```
```jsx
// default export
const HeaderComponent = () => {
    return (
    <div> 
        <h1> Header Component is Loading... </h1> 
        <h2> This is another Sub Header inside Header</h2>
        </div>
)};
export default HeaderComponent;
```
### Calling it in another Component
```jsx
import HeaderComponent, {SubHeading} from "./Component/Header.js"
```
Here, **SubHeading** is exported as a named export, while **HeaderComponent** is exported as the default export.

When importing named exports, you need to use the specific name within curly braces { }. In this case, { SubHeading } is used because SubHeading is a named export.

On the other hand, the default export can be imported using **any name of your choice.** You can omit the curly braces and assign the imported value to any variable name you prefer.

# These are Same 
```jsx
<HeaderCompo />
{HeaderCompo()}

// React component is a javascript function
// At the end, both are javascript functions.
// In jsx syntax, <HeaderCompo /> is used
```
```jsx
Passing Props

// Passing props using React conventions
<FunctionalComponent props={data} />
// It is same as passing an parameter to a function in JS
{FunctionalComponent(data)}
```

# Everything is a Function
Any piece of javascript code can be written inside a {} in jsx.

```jsx
var abc = 1

const Comp = () => {
return (
		<div>
				// running js code inside {}
				{abc}
				{console.log(abc)}
				{1+3}
		</ div>
)};

// output : 1,1,4
```
# Object destructuring 
### Normal Method
```jsx
// using normal props
const RestaurantCard = (props) => {
  return (
      <h1> {props.name} </h1>
  )};
```
### Object Destructured Method
```jsx
// Destructuring the object first.
const RestaurantCard = ({restaurantName}) => {
  const {name, avgRatings, cuisines} = restaurantName;
  return (
      <h1> {name} </h1>
  )};
```
### Spread Operator Method
```jsx
// Using spread operator for object destructuring
const RestaurantCard = (props) => {
  const { ...rest } = props;
  return (
    <h1>{rest.name}</h1>
  );
};
```
