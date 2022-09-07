import React, { useState } from 'react';
import './App.css';
import Product from './components/Product/Product';
import Data from './components/Data/Data';
import { Users } from './components/Users/Users';

function App() {
  return (
    <div className="App">
      {/* <Product /> */}
      {/* <Data /> */}
      <Users />
    </div>
  );
}

export default App;
