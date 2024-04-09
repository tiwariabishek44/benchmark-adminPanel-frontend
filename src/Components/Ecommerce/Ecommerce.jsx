import React, { useState } from 'react'
import AddEcommerce from './AddEcommerce'
import EcommerceList from './EcommerceList'
import './Ecommerce.css'
import Inquiry from './Inquiry'

const Ecommerce = () => {
 const [option, setoption] = useState('list')

  const handler = (val) => {
    setoption(val);
  }

  return (
    <div className='ecom'  >
      <div className="optn">
        <button onClick={()=>handler("list")} style={{ backgroundColor: option === "list" ? "orange" : "#E5E8E8" }} >List Item</button>
        <button onClick={()=>handler("add")}  style={{ backgroundColor: option === "add" ? "orange" : "#E5E8E8" }}>Add Item</button>
        <button onClick={()=>handler("inquiry")} style={{ backgroundColor: option === "inquiry" ? "orange" : "#E5E8E8" }} >Inquiry</button>
      </div>
      {option==='list'&&(<EcommerceList />)}
      {option==='add'&&(<AddEcommerce />)}
      {option==='inquiry'&&(<Inquiry />)}
        
    </div>
  )
}

export default Ecommerce