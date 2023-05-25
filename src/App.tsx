import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  const alertChildren = (
    <>
      <p>My alert</p>
      <button
        type="button"
        className="btn-close"
        aria-label="Close"
        onClick={() => setAlertVisibility(false)}
      ></button>
    </>
  );

  return (
    <>
      {alertVisible && <Alert children={alertChildren}></Alert>}
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
