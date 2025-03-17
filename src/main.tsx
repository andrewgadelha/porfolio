import React from 'react';
import ReactDOM from 'react-dom/client';


import { Provider } from "@/components/ui/provider"
import '../styled-system/css' 
import './index.css'
import App from './App'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   

        <Provider>
          <App />
        </Provider>

 
  </React.StrictMode>
)
