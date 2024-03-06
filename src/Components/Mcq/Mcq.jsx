import React, { useState } from 'react'
import AddMCQ from './AddMCQ'
import MCQList from './MCQList'
import './Mcq.css'

const Mcq = () => {
 const [option, setoption] = useState('list')

  const handler = (val) => {
    setoption(val);
  }

  return (
    <div className='mcq'  >
      <div className="options">
                <button onClick={()=>handler("list")} style={{ backgroundColor: option === "list" ? "orange" : "#E5E8E8" }} > MCQ List</button>

        <button onClick={()=>handler("add")}  style={{ backgroundColor: option === "add" ? "orange" : "#E5E8E8" }}>Add MCQ</button>
      </div>
      {option==='list'?(<MCQList />):(<AddMCQ />) }
  
    </div>
  )
}

export default Mcq