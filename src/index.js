import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import storage from './utils/storange';
import { setAuthoHeader } from './api/client';

import {BrowserRouter} from 'react-router-dom';

/**Se hace una confirmacion si hay una Sesion Iniciada */
const accessToken = storage.get('auth');
if(accessToken){
  setAuthoHeader(accessToken);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App isInitLogged={!!accessToken}/>
    </BrowserRouter>
    
  </React.StrictMode>
);
