import { useState } from "react";
// useing typescript to set datatype { items: [], heading: string }
interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void;
}

// getting the props from App.tsx to use here
function ListGroup(props: Props) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1); // default state to -1 so no li is selected

  // in return you cannot write javascript unless it has {}, only html and react components
  return (
    <>
      <h1>{props.heading}</h1>
      {props.items.length === 0 && <p>No items found</p>}

      <ul className="list-group">
        {/* cant use for loop so need to use .map with arrow function and wrap entire thin in {}, and each li needs a unique key */}
        {props.items.map((item, index) => (
          <li
            // add active class to selected li
            className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              props.onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
