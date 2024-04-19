import React, { useState } from 'react';
import AddEcommerce from './AddEcommerce';
import EcommerceList from './EcommerceList';
import Inquiry from './Inquiry';
import './Ecommerce.css';

const Ecommerce = () => {
  const [option, setOption] = useState('list'); // State hook to manage selected option

  // Function to handle button click and update selected option
  const handler = (val) => {
    setOption(val);
  }

  return (
    <div className='ecom'>
      <div className="optn">
        {/* Buttons to switch between list, add, and inquiry views */}
        <button onClick={() => handler("list")} style={{ backgroundColor: option === "list" ? "orange" : "#E5E8E8" }}>List Item</button>
        <button onClick={() => handler("add")} style={{ backgroundColor: option === "add" ? "orange" : "#E5E8E8" }}>Add Item</button>
        <button onClick={() => handler("inquiry")} style={{ backgroundColor: option === "inquiry" ? "orange" : "#E5E8E8" }}>Inquiry</button>
      </div>

      {/* Render different components based on selected option */}
      {option === 'list' && (<EcommerceList />)}
      {option === 'add' && (<AddEcommerce />)}
      {option === 'inquiry' && (<Inquiry />)}
    </div>
  );
}

export default Ecommerce;
