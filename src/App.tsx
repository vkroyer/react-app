import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Button
        color="info"
        onClick={() => {
          setAlertVisibility(true);
        }}
      >
        My Button
      </Button>
    </>
  );
}

export default App;
