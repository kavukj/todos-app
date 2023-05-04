import './App.css';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContent, userContext } from './context/usercontext';
import Todos from './Todos';

const App = () => {
  const { user, setUserVal } = useContext(userContext) as userContent;

  const handleLogin = () => {
    setUserVal({ name: "Arpita", email: "jainarpita52@gmail.com" })
  }

  /* Using Tailwind Css for styling */
  return (
    <div className='bg-gray-100 h-[100vh]'>
      {/* Navbar */}
      <nav className="flex justify-between p-3 bg-gray-700 text-white">
        <p className='mx-6 cursor-pointer hover:underline'>Home</p>
        <p className='mx-6 cursor-pointer hover:underline'>{user ? 'Logout' : 'Login'}</p>
      </nav>

      {/* Landing Page content */}
      <div>
        <h4 className='flex justify-center mt-5'>My Todos</h4>
      </div>
      {/* Returns Login button if no user logged */}
      <div className='flex justify-center h-[fit-content] my-8 items-center'>
        {!user ?
          <button onClick={handleLogin}
            className='rounded-xl bg-gray-950 text-white py-3 px-10 text-xl h-[fit-content] hover:bg-gray-800'>
            Login</button>
          :
          <Todos />
        }
      </div>
    </div>
  );
}

export default App;
