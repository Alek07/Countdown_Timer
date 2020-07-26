import React from "react";

export default function Button(props) {
  return (
    <div>
        <button onClick={() => props.speed(1000)}>1x</button>
        <button onClick={() => props.speed(500)}>1.5x</button>
        <button onClick={() => props.speed(50)}>2x</button>
    </div>
  );
}
