import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Header = () => {
  const { user,logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(()=> {
      toast.success("Sign Out Success")
    })
  }
  const menuItems =
    <>
      <li className='hover:bg-accent hover:text-white rounded-lg'><Link to='/home'>Home</Link></li>
      <li className='hover:bg-accent hover:text-white rounded-lg'><Link to='/about'>About</Link></li>
      <li className='hover:bg-accent hover:text-white rounded-lg'><Link to='/appointment'>Appoinment</Link></li>
      {/* <li className='hover:bg-accent hover:text-white rounded-lg'><Link to='/reviews'>Reviews</Link></li> */}
      {/* <li className='hover:bg-accent hover:text-white rounded-lg'><Link to='/dashboard'>Dashboard</Link></li> */}
      <li className='hover:bg-accent hover:text-white rounded-lg'><Link to='/contact'>Contact us</Link></li>

      {
        user?.uid ?
          <>
            <li className='hover:bg-accent hover:text-white rounded-lg'><Link to='/dashboard'>Dashboard</Link></li>
            <li className='hover:bg-accent hover:text-white rounded-lg'><button onClick={handleLogOut}>Sign Out</button></li>
          </>
          :
          <li className='hover:bg-accent hover:text-white rounded-lg'><Link to='/login'>Login</Link></li>
      }

    </>
  return (
    <div className='container mx-auto h-16'>
      <div className="navbar lg:mx-10 flex justify-between">
        <div className="">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menuItems}
            </ul>
          </div>
          <div>
            <Link to='/' className="text-xl">Doctors Portal</Link>
          </div>
        </div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {menuItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;