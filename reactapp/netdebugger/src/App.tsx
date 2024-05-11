import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import { AiFillClockCircle } from "react-icons/ai";
import { Children, useState } from "react";

function App() {
  const items = ["6am", "2am", "3am", "4am"];
  const [click, setClick] = useState(false);
  return (
    <div>
      <ListGroup
        items={items}
        heading="times"
        onSelectItem={(item: string) => console.log(item)}
      />
      <Alert show={click} onClickClose={() => setClick(false)}>
        bruh <AiFillClockCircle color="blue" size={60} />
      </Alert>
      <Button
        color="danger"
        onClickButton={(count: number) => {
          count % 7 == 0 ? console.log("boom") : console.log(count);
          setClick(true);
        }}
      >
        d
      </Button>
    </div>
  );
}

export default App;
