import { useState } from "react";

export default function AppCom() {
  // uncontrolled inputs
  // const onSubmit = (e) => {
  //   e.preventDefault();

  //   const data = new FormData(e.target);

  //   const obj = Object.fromEntries(data.entries());

  //   console.log("obj: ", obj);
  // };

  let initial = {
    first_name: "Salma",
    last_name: "Hamido"
  };

  const [user, setUser] = useState(initial);

  const handleClick = () => {
    let _user = { ...user };
    _user.first_name = "k";
    _user.last_name = "m";

    setUser(_user);
  };
  console.log(user);

  return (
    <div className="App">
      Hello {user.first_name} {user.last_name}
      <hr />
      {/* <form onSubmit={onSubmit}>
        <input name="city" />
        <input name="hotel" />
        <button>search</button>
      </form> */}
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
