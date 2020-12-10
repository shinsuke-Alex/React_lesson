import React from 'react';
import Navbar from './Navbar';
import Greeter from './Greeter';
import Counter from './Counter';
import MoodToggler from './MoodToggler';
import Cart from './Cart';
import './App.css';

const items = [
  { id: 1, name: 'Garlic Bread', price: 4.50, qty: 1 },
  { id: 2, name: 'Buffalo Wings', price: 6.30, qty: 1 },
  { id: 3, name: 'Classic Burger', price: 10, qty: 1 },
]

function App() {
  return (
    <div>
      <Cart initialItems={items} />
      <MoodToggler />
      <Counter />
      <Navbar />
      <Greeter name="John" age="25" excitement={4}/>
      <Greeter name="Alex"age="22" excitement={2}/>
    </div>
  );
}

export default App;
