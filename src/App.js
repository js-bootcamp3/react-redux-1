import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { addProduct, removeProduct, checkProduct } from './store/actions'
import './App.css';

function App() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch();
  const products = useSelector((store => store.products));

  const handleAddProduct = () => {
    const payload = {
      id: Date.now(),
      title: input,
      checked: false,
    }

    dispatch(addProduct(payload));
    setInput('');
  }

  const handleRemoveProduct = (productId) => {
    dispatch(removeProduct(productId))
  }

  const handleCheckProduct = (productId) => {
    dispatch(checkProduct(productId))
  }

  console.log('products', products)
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
        {products.map(product => (
          <div key={product.id}>
            {product.checked ? <s>{product.title}</s> : <b>{product.title}</b>}
            {' '}
            <span onClick={() => handleRemoveProduct(product.id)}>x</span>
            {' '}
            <span onClick={() => handleCheckProduct(product.id)}>
              {product.checked ? 'uncheck' : 'check'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
