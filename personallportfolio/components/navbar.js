import React, {useState} from 'react';
// import logo from '../assets/pizzaLogo.jpg';
import Link from 'next/link';
import '../styles/Navbar.module.css';
import ReorderIcon from '@mui/icons-material/Reorder';
// import { Button } from '@mui/material';


function Navbar() {
const [openLinks, setOpenLinks] = useState(false)
const toggleNavbar =()=>{
 setOpenLinks(!openLinks);
}
  return (
    <div className='navbar'>
        <div className='leftSide' id = {openLinks ? "open": "close"}>
           <h1>Zoubida Rezki</h1>
            {/* <img src={logo} alt="pizza"/> */}
            <div className='hiddenLinks'>
            <Link href= "/">Home </Link>
            <Link href= "/Projects">Projects </Link>
            <Link href= "/About">About </Link>
            <Link href= "/Contact">Contact </Link>
            </div>
        </div>
        <div className='rightSide'>
            <Link href="/">home </Link>
            <Link href="/Projects">Projects </Link>
            <Link href="/About">About </Link>
            <Link href="/Contact">Contact </Link>
<button onClick={toggleNavbar}>
  <ReorderIcon/>
</button>
        </div>
        </div>
  )
}

export default Navbar