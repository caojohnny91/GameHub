// import ListGroup from "./components/ListGroup";
import { useState } from "react";
import { Alert } from "./components/Alert";
import { Button } from "./components/Button";

function App() {
  // const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  // create useState for when button is clicked to make alert visible
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {/* <ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem} /> */}

      {/* wrapping in {} to perform logic, using && to make first condition false */}
      {/* add the onClose prop and create annoymous arrow function */}
      {alertVisible && <Alert onClose={() => setAlertVisible(false)}>This is my ALERT! </Alert>}

      {/* adding color now changes the className in button component  */}
      {/* <Button color="danger" onClick={() => console.log("Clicked!")}>
        My Button!
      </Button> */}

      {/* updating onClick function from console.log to setAlertVisibility to true so that we can see the alert popup */}
      <Button color="danger" onClick={() => setAlertVisible(true)}>
        My Button!
      </Button>
    </div>
  );
}

export default App;
