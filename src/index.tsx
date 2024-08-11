import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { TodosContextProvider } from './contexts/TodosContextProvider';
import { KindeProvider } from '@kinde-oss/kinde-auth-react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <KindeProvider
      clientId="488a53fb1a8e498c8e118f463049a69c"
      domain="https://dannysoftwares.kinde.com"
      redirectUri={process.env.NODE_ENV === "production" ? "https://todo-app-software.vercel.app" :"http://localhost:3000" }
      logoutUri={process.env.NODE_ENV === "production" ? "https://todo-app-software.vercel.app" :"http://localhost:3000" }
    >
      <TodosContextProvider>
        <App />
      </TodosContextProvider>
    </KindeProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
