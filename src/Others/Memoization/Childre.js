import React from "react";

//Child.js
function Childre({ name, ageHandler }) {
  console.log("Child Render");

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={ageHandler}>Add age</button>
      <p>{name.name}</p>
      <p>{name.age}</p>
    </div>
  );
}

export default React.memo(Childre);
