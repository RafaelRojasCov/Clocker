import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/Home";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("#BA4949");

  const changeBackgroundColor = (color: string) => {
    setBackgroundColor(color);
  };

  return (
    <Home
      backgroundColor={backgroundColor}
      changeBackgroundColor={changeBackgroundColor}
    />
  );
}

export default App;
