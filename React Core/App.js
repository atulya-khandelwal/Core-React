import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = React.createElement("h1", { id: "heading" }, "Hello Bhai");       // React Element is an object when we render it the it become a DOM/HTML element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);   // This will replaced not appended everything insider the root element with heading element

// JSX - HTML or XML like syntax in JS

// JSX code transpiled before it reaches the JS engine by Parcel and Babel

// JSX is not a valid JS syntax so we need to transpile it to JS

// JSX => React.createElement() => React Element => DOM Element

// In JSX, if we want to write attributes then we need to use camelCase

const jsxheading = <h1 id="jsx-heading"> Everything is fine bro! How about you?</h1>

const jsxhead = (
    <h1 id="jsx-heading">
        Something is happening with me
    </h1>
)
root.render(jsxheading)

// React Components
// 1. Function Components: New way of writing components
// 2. Class Components: Old way of writing components

// React Functional Component => Normal javascript function which returns a React Element



const HeadingComponent2 = () => <h1 id="jsx-heading"> Everything is fine bro! How about you?</h1>

const number = 1000
const HeadingComponent = () => { 
    return (<div>
        <h1 id="jsx-heading"> Everything is fine bro! How about you?</h1>
        <HeadingComponent2 />
        <HeadingComponent2></HeadingComponent2>
        {HeadingComponent2()}
        {number} = {100 + 200}
    </div> )  
}
root.render(<HeadingComponent />)