import { useState } from "react";

function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1); // default state to -1 so no li is selected

  // in return you cannot write javascript unless it has {}, only html and react components
  return (
    <>
      <h1>Title</h1>
      {items.length === 0 && <p>No items found</p>}

      <ul className="list-group">
        {/* cant use for loop so need to use .map with arrow function and wrap entire thin in {}, and each li needs a unique key */}
        {items.map((item, index) => (
          <li
            // add active class to selected li
            className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
