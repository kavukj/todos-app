import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserContextProvider } from './context/usercontext';
import { TodosContextWrapper } from './context/todosContext';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Auth0Provider
    domain="dev-40iwt9kb.us.auth0.com"
    clientId="rYxwxmHyxArBhL4r0xgMwlYsUJrZ5EZC"
    authorizationParams={{
      redirect_uri: 'https://kavukj.github.io/todos-app'
    }}
  >
    <UserContextProvider>
      <TodosContextWrapper>
        <Routes>
          <Route path="/" element={<App/>}/>
        </Routes>
      </TodosContextWrapper>
    </UserContextProvider>
    </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
