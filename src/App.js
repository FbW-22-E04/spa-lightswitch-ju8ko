import React from "react";
import "./app.css";
export default function App() {
  return (
    <div>
      <Room />
    </div>
  );
}

const Room = () => {
  const [isLight, setIsLight] = React.useState(false);
  return (
    <div className="room">
      <button onClick={() => setIsLight(!isLight)} className="button">
        Light Switch
      </button>
      <span>The room is {isLight ? "lit" : "dark"}</span>
    </div>
  );
};
