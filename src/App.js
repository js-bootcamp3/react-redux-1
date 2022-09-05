import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { addProduct } from './store/actions'
import './App.css';

function App() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch();
  const products = useSelector((store => store.products));

  const handleAddProduct = () => {
    dispatch(addProduct(input));
    setInput('');
  }

  return (
    <div className="App">
      <div className="add-product">
        <input 
          type="text"
          value={input} 
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAddProduct}>Add</button>
      </div>

      <div>
        {products.map(product => <div>{product}</div>)}
      </div>
    </div>
  );
}

export default App;
