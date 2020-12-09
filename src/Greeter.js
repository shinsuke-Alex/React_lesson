import React from 'react';

function Greeter({name, age, excitement}) {
    const greet = () => {
        alert(`HELLO THERE, ${name}`)
    }
  return (
  <>
    <h2>Hi there!! I am GOD. {name} and {age}{"!".repeat(excitement)}</h2>
    <button onMouseOver={greet}> Click Me</button>
  </>
  )
}

export default Greeter;