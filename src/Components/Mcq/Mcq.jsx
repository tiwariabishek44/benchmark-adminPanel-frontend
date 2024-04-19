import React, { useState } from 'react';
import AddMCQ from './AddMCQ';
import MCQList from './MCQList';
import './Mcq.css'; // Import CSS file for styling

const Mcq = () => {
  // State to manage which option is currently selected ('list' or 'add')
  const [option, setoption] = useState('list');

  // Function to handle button clicks and update the selected option
  const handler = (val) => {
    setoption(val);
  };

  return (
    <div className='mcq'> {/* Main container for MCQ component */}
      {/* Options buttons container */}
      <div className="optons">
        {/* Button to display MCQ list */}
        <button onClick={() => handler("list")} style={{ backgroundColor: option === "list" ? "orange" : "#E5E8E8" }}>MCQ List</button>
        
        {/* Button to add MCQ */}
        <button onClick={() => handler("add")} style={{ backgroundColor: option === "add" ? "orange" : "#E5E8E8" }}>Add MCQ</button>
      </div>

      {/* Conditional rendering based on the selected option */}
      {option === 'list' ? (<MCQList />) : (<AddMCQ />)}
    </div>
  );
}

export default Mcq;
