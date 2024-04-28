import ListGroup from "./components/ListGroup";

function App() {
  const items = ["6am", "2am", "3am", "4am"];
  return (
    <div>
      <ListGroup
        items={items}
        heading="times"
        onSelectItem={(item: string) => console.log(item)}
      />
    </div>
  );
}

export default App;
