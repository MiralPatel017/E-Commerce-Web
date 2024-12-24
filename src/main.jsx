import { createRoot } from 'react-dom/client'; // Correct import
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render( // Use createRoot directly
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
