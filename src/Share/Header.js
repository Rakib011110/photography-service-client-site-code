import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)


    const hanldeLogOut = () => {

        logOut()
            .then()
            .catch()

    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to="/" > <li>Home </li></Link>
                        <Link to='/blog'> <li>Blog </li></Link>
                        <Link to='/reviwsdata'> <li> Services </li></Link>

                    </ul>
                </div>
            </div>
            <div className="navbar-center w-20 h-   ">

                <h3 className='mx-4 text-2xl btn btn-square'>  <Link to="/">Ariyan's Photography </Link> </h3>

                {/* <img src="https://img.indiefolio.com/fit-in/1100x0/filters:format(webp):fill(transparent)/project/body/6a4af939350999353958515025862126.png" alt="" srcset="" /> */}
            </div>
            <div className="navbar-end">

                {
                    user?.email ?
                        <>

                            <button onClick={hanldeLogOut} className="btn btn-ghost btn-circle">


                                logOut

                            </button>

                        </>
                        :
                        <button className="btn btn-ghost btn-circle">


                            <Link to='/login'>Login </Link>

                        </button>

                }





                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Header;