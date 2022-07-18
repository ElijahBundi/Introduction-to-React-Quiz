import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';

/**
  Challenge: Display all users to the browser
**/



// comment this out after completion and uncomment code below it to proceed
// function Child() {
//   return <div>This is children content</div>;
// }

  // Challenge: Uncomment this code to complete quiz

function Child({ onAddToParent }) {

  return (
    <>
      <div>Child</div>
      <button onClick={onAddToParent}>Change Parent Value</button>
    </>
  );
}

function Parent() {
  const [value, setValue] = useState(
    "I need to be updated from my child"
  );

  return (
    <>
      <h3>Update Parent State Challenge (Using Callback)</h3>
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>

      <div className="wrapper">
        <Child onAddToParent={() => setValue('Heeeeey!')}/>
      </div>
    </>
  );
}
// Uncomment this to tackle quiz


// Comment out after completion
// function Parent() {
//   return (
//     <div>
//       <h3>Parent Component</h3>
//     </div>
//   );
// }
// Comment above code after completion


function App() {
  
  const [toggleChallenge, setToggleChallenge] = useState(false);
  
  const users = [
    { name: "John Doe", id: 1 },
    { name: "Jane Doe", id: 2 },
    { name: "Billy Doe", id: 3 }
  ];

  const userNames = users.map((user) => {
    return <li key={user.id}>{user.name}</li>
  })
  
  function handleClick() {
    setToggleChallenge(toggleChallenge ? "" : "Toggle Challenge")
    return toggleChallenge
  }


  return (
    
    <> 
      <h1 style = {{ textDecoration : "underline", color : "red"}}>JSX is cool!</h1>   
      <img src={logo} className="App-logo" alt="logo" />
      <h3>User names</h3>
      <ul>{userNames}</ul>
      <button onClick={handleClick} >Hide Element Below</button>

      <div>{toggleChallenge}</div>
      <Parent>
      <Child />
      </Parent>
    </>
  );
}

export default App;
