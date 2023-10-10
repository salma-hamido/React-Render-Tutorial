import React from "react";

//Child.js
const Child = (props) => {
  console.log("Child Render");
  return (
    <div>
      <h2>Child Component</h2>
      <h2>{props.name}</h2>
    </div>
  );
};
export default React.memo(Child);
