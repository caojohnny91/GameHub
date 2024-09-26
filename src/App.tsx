// import ListGroup from "./components/ListGroup";
import { Alert } from "./components/Alert";
import { Button } from "./components/Button";

function App() {
  // const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  return (
    <div>
      {/* <ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem} /> */}
      <Alert>
        Hello <span>World</span>
      </Alert>

      {/* adding color now changes the className in button component  */}
      <Button color="danger" onClick={() => console.log("Clicked!")}>
        My Button!
      </Button>
    </div>
  );
}

export default App;
