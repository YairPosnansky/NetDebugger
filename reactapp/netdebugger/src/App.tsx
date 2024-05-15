import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  return (
    <div>
      <Alert show={true} onClickClose={() => console.log("click")}>
        bruh
      </Alert>
    </div>
  );
}

export default App;
