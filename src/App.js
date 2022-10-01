import { useState } from "react";
import "./styles.css";

const App = () => {
  let time = new Date().toLocaleTimeString();
  const [Ctime, setTime] = useState(time);

  setInterval(function () {
    time = new Date().toLocaleTimeString();
    setTime(time);
  }, 1000);

  // const UpdateTime = () => {
  //   time = new Date().toLocaleTimeString();
  //   setTime(time);
  // };
  // setInterval(UpdateTime, 1000);

  return (
    <>
      <div className="main">
        <h2>Digital Clock</h2>
        <h1 className="time-style">{Ctime}</h1>
      </div>
    </>
  );
};
export default App;
