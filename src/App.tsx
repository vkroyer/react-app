import Button from "./components/Button";

function App() {
  return (
    <Button color="info" onClick={() => console.log("Clicked")}>
      My Button
    </Button>
  );
}

export default App;
