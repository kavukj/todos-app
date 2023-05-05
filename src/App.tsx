import './App.css';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContent, userContext } from './context/usercontext';
import Todos from './components/Todos';
import { useAuth0 } from '@auth0/auth0-react';

const App = () => {
  const { currentUser, setUserVal } = useContext(userContext) as userContent;
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
    var newUser;
    newUser = {
      name: user?.name,
      email: user?.email
    }
    setUserVal(newUser)
  }

  const handleLogout = () => {
    logout({logoutParams:{returnTo:window.location.origin}})
    setUserVal({ name: '', email: '' })
  }

  /* Using Tailwind Css for styling */
  return (
    <div className='bg-gray-100 h-[100vh]'>
      {/* Navbar */}
      <nav className="flex justify-between p-3 bg-gray-700 text-white">
        <p className='mx-6 cursor-pointer hover:underline'>Dashboard</p>
        {isAuthenticated ?
          <p className='mx-6 cursor-pointer hover:underline' onClick={handleLogout}>Logout</p>
          :
          <p className='mx-6 cursor-pointer hover:underline' onClick={handleLogin}>Login</p>
        }
      </nav>

      {/* Landing Page content */}
      <div>
        <h4 className='flex justify-center mt-5'>My Todos</h4>
      </div>
      {/* Returns Login button if no user logged */}
      <div className='flex justify-center h-[fit-content] my-8 items-center'>
        {!isAuthenticated ?
          <div>
            <button onClick={handleLogin}
              className='rounded-xl bg-gray-950 text-white py-3 px-10 text-xl h-[fit-content] hover:bg-gray-800'>
              Login</button>
          </div>
          :
          <Todos />
        }
      </div>
    </div>
  );
}

export default App;
