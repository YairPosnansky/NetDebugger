import LikeButton from "./components/IconButtons/LikeButton";

function App() {
  return (
    <div>
      <LikeButton
        onClicked={(active: boolean) => console.log(active)}
        size={60}
      ></LikeButton>
    </div>
  );
}

export default App;
