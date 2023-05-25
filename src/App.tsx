import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "Boston", "Oslo", "Beograd"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
