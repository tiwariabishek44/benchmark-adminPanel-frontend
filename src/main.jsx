import React from 'react'; // Import React
import ReactDOM from 'react-dom'; // Import ReactDOM
import App from './App.jsx'; // Import the main App component
import './index.css'; // Import CSS file
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter for routing
import { ModalProvider } from './utils/modelContext.jsx'; // Import ModalProvider
import { Provider } from 'react-redux'; // Import Provider for Redux store
import store from './Components/redux/store.js'; // Import Redux store

// Render the app component and wrap it with necessary providers
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
