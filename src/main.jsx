import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from './utils/modelContext.jsx';
import { Provider } from 'react-redux';
import store from './Components/redux/store.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  
  </React.StrictMode>,
)
