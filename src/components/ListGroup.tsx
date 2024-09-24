function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    <>
      <h1>Title</h1>
      <ul className="list-group">
        {/* cant use for loop so need to use .map with arrow function and wrap entire thin in {}, and each li needs a unique key */}
        {items.map((item) => (
          <li key={item}> {item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
