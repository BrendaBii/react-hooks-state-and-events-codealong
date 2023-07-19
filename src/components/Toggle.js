import React, { useState } from "react";

function Toggle() {
  const [isON, setisON] = useState(false)

  function changeText() {
    setisON(value => !value)
  }

  const color = isON ? "red" : "white";
  return <button style = {{background : color}} onClick = {() => changeText()}>{isON ? 'ON' : 'OFF'}</button>;
}

export default Toggle;
