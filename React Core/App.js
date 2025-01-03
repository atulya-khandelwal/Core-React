import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const heading = React.createElement("h1", {id: "heading"}, "Hello World from React.");

// console.log(heading) //object

// root.render(heading);

/*
    ReactElement(Object) => hTMl(Browser Understand)
*/

const parent = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement(
        "div",
        { id: "child1" },
        [React.createElement(
            "h1",
            {},
            "hi I am h1 tag of child 1"
        ),
            React.createElement(
                "h2",
                {},
                "I am h2 tag of child 1"
            )
    ]
    ),
    React.createElement(
        "div",
        { id: "child2" },
        [React.createElement(
            "h1",
            {},
            "hi I am h1 tag of child 2"
        ),
            React.createElement(
                "h2",
                {},
                "I am h2 tag of child 2"
            )
    ]
    )  
]
)

root.render(parent);
console.log(parent)