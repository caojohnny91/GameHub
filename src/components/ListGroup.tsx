import { MouseEvent } from "react";

function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // Event Handler:
  const handleClick = (event: MouseEvent) => console.log(event);

  // in return you cannot write javascript unless it has {}, only html and react components
  return (
    <>
      <h1>Title</h1>
      {items.length === 0 && <p>No items found</p>}

      <ul className="list-group">
        {/* cant use for loop so need to use .map with arrow function and wrap entire thin in {}, and each li needs a unique key */}
        {items.map((item) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
