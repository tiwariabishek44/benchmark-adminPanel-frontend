// VerificationMessage.js

import React, { useEffect, useState } from 'react';
import './VerificationMeasage.css';

const VerificationMessage = ({ message }) => {
  const [status, setstatus] = useState(true)
  useEffect(() => {
   setTimeout(() => {
    setstatus(false)
   }, 1500);
  }, [])
  
  return (
    <>
      {status?(<div className="verificationMessageOverlay">
      <div className="verificationMessageContent">
        <p>{message}</p>
      </div>
    </div>):(<></>)}
    </>
  );
}

export default VerificationMessage;
