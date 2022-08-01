import Slide from "./Components/Slide";
import React, { useState } from "react";
import "./styles.css";

// set this as the
const data = [
  {
    id: 1,
    title: "Intro to React",
    description: "React is a Javascript UI library"
  },
  {
    id: 2,
    title: "Intro to Props",
    description: "Props are just properties"
  },
  {
    id: 3,
    title: "Sate management",
    description: "Learn how to manage state"
  }
];

//console.log(hello)
export default function App() {
  let [count, updateCount] = useState(0);
  console.log(count);
  const onClick = () => {
    if (count > 0) {
      updateCount(count - 1);
    } else {
      updateCount(count);
    }
  };
  const onClick1 = () => {
    if (count <= 2) {
      updateCount(count + 1);
    }
  };
  return (
    <div className="App">
      <h1 data-testid="header">Slides</h1>

      <Slide title={data[count].title} description={data[count].description} />

      <button data-testid="prev" disabled={count === 0} onClick={onClick}>
        Prev
      </button>
      <button data-testid="next" disabled={count === 2} onClick={onClick1}>
        Next
      </button>
    </div>
  );
}
