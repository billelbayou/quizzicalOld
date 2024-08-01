import React from "react";
import Start from "./components/Start";
import Main from "./components/Main";

export default function App() {
  const [start, setStart] = React.useState(true);
  const [main, setMain] = React.useState(false);

  React.useEffect(() => {
    setMain(!start);
  }, [start]);

  function handleStartClick() {
    setStart(false);
  }

  return (
    <React.StrictMode>
      {start && <Start startStatus={() => handleStartClick()} />}
      {main && <Main />}
    </React.StrictMode>
  );
}
