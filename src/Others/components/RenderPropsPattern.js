import React, { useState } from "react";

const Disclosure = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(children({ isOpen }));
  return (
    <div onClick={() => setIsOpen((prev) => !prev)}>{children({ isOpen })}</div>
  );
};

const RenderPropsPattern = () => {
  return (
    <Disclosure>
      {({ isOpen }) => (
        <React.Fragment>
          <h1>Click</h1>
          {isOpen && <h2>'hi'</h2>}
        </React.Fragment>
      )}
    </Disclosure>
  );
};

export default RenderPropsPattern;
