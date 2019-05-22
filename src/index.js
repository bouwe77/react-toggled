import React, { useState } from "react";
import { render } from "react-dom";
import Toggle from "react-toggled";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subscribe, setSubscribe] = useState(false);

  function save(event) {
    event.preventDefault();
    console.log(name, email, subscribe);
  }

  function handleNameChange(event) {
    const name = event.target.value;
    setName(name);
  }

  function handleEmailChange(event) {
    const email = event.target.value;
    setEmail(email);
  }

  return (
    <form onSubmit={save}>
      Name: <input type="text" value={name} onChange={handleNameChange} />
      <br />
      Email address:{" "}
      <input type="text" value={email} onChange={handleEmailChange} />
      <br />
      <Toggle>
        {({ on, getTogglerProps, toggle }) => {
          return (
            <div>
              <input type="checkbox" value={on} onChange={toggle} /> Subscribe
              to news letter
            </div>
          );
        }}
      </Toggle>
      <button type="submit">Submit</button>
    </form>
  );
}

render(<App />, document.getElementById("root"));

/*
          <button {...getTogglerProps()}>accessible toggle button</button>
          <button onClick={toggle}>uses toggle action</button>
          <button onClick={setOn}>set on</button>
          <button onClick={setOff}>set off</button>
          <div>{on ? "Toggled On" : "Toggled Off"}</div>
*/
