import { useState } from "react";
import Link from "../Link/Link";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";



const NavBar = () => {


    const [open,setOpen]=useState(false)
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Login', path: '*' },
      ];


    
    return (
        <nav className="text-black bg-yellow-200 p-6">
        {/* <div className="md:hidden" onClick={()=>setOpen(!open)}>

        {
            open===true ? <IoMdClose className="text-2xl"></IoMdClose> 
            : <IoMenu className="text-2xl"></IoMenu>
        }



        
        </div> */}
        <div className="md:hidden" onClick={()=>setOpen(!open)}>
            {
                open===true ? <IoMdClose className="text-2xl"></IoMdClose>
                : <IoMenu className="text-2xl"></IoMenu>
            }
        </div>
        <ul className={`
        ${open? 'top-32':'-top-60'}
        duration-1000 md:static md:flex absolute bg-yellow-200 px-6`}>
        {
            routes.map(route=><Link key={route.id} route={route
            }></Link> )
            
        }
        </ul>
        </nav>
    );
};

export default NavBar;