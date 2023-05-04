import './App.css';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContent, userContext } from './context/usercontext';
import Todos from './Todos';

const App = () => {
  const { user, setUserVal } = useContext(userContext) as userContent;

  const handleLogin = () => {
    setUserVal({ name: "Arpita", email:"jainarpita52@gmail.com" })
  }

  /* Using Tailwind Css for styling */
  return (
    <div className='bg-gray-200 h-[100%]'>
      {/* Navbar */}
      <nav className="flex justify-between p-3 bg-gray-700 text-white">
        <p className='mx-6 cursor-pointer hover:underline'>Home</p>
        <p className='mx-6 cursor-pointer hover:underline'>{user ? 'Logout' : 'Login'}</p>
      </nav>

      {/* Landing Page content */}
      {/* Returns Login button if no user logged */}
      {!user ?
        <div className='flex justify-center h-[100vh] items-center'>
          <button onClick={handleLogin}
            className='rounded-xl bg-gray-950 text-white py-3 px-10 text-xl h-[fit-content] hover:bg-gray-800'>
            Login</button>
        </div>
        :
        <div className='flex justify-center h-[100vh] items-center'>
            <Todos/>
        </div>
      }
    </div>
  );
}

export default App;
