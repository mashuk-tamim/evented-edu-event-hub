import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navLinks = <div className="flex flex-col md:flex-row gap-3 md:gap-5 lg:gap-10 font-medium">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/upcoming'>Upcoming</NavLink>
        <NavLink to='/blogs'>Blogs</NavLink>
        <NavLink to='/about'>About Us</NavLink>
    </div>
    return (
        <div>
            <div className="navbar bg-base-100 font-montserrat py-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-24">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">EventEd</a>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;