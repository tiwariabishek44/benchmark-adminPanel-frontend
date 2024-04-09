// ModalContext.js
import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState(null);

  const showError = (message) => {
    setErrorMessage(message);
  };

  const hideError = () => {
    setErrorMessage(null);
  };

  return (
    <ModalContext.Provider value={{ showError, hideError, errorMessage }}>
      {children}
      {errorMessage && (
        <div className="modal">
          <p>{errorMessage}</p>
          <button onClick={hideError}>Close</button>
        </div>
      )}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
      throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};
