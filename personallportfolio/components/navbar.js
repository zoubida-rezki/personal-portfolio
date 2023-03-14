import React from 'react';
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';


export default Nav;

function Nav(){


    return(
        <>
        <nav>
            <div >
                <ul className={styles.navbar}>
                    <li className={styles.leftSide}><Link href="/">Zoubida Rezki</Link></li>
                    <li className={styles.rightSide}><Link href="/About">About</Link></li>
                    <li className={styles.rightSide}><Link href="/Projects">Projects</Link></li>
                    <li className={styles.rightSide}><Link href="/Contact">Contact</Link></li> 
                    {/* <li className={styles.Navli}><Link href="/Devlog">DevLog</Link></li> */}
                    
                </ul>
                
            </div>
            
        </nav>

        </>
    );
};
// olf vers
// export default Navbar



// import React, {useState} from 'react';
// // import logo from '../assets/pizzaLogo.jpg';
// import Link from 'next/link';
// import styles from '../styles/Navbar.module.css';
// import ReorderIcon from '@mui/icons-material/Reorder';
// // import { Button } from '@mui/material';


// function Navbar() {
// const [openLinks, setOpenLinks] = useState(false)
// const toggleNavbar =()=>{
//  setOpenLinks(!openLinks);
// }
//   return (
//     <div className={styles.navbar}>
//         <div className={styles.leftSide} id = {openLinks ? "open": "close"}>
//            <h1>Zoubida Rezki</h1>
//             {/* <img src={logo} alt="pizza"/> */}
//             <div className={styles.hiddenLinks}>
//             <Link href="/">Home </Link>
//             <Link href="/Projects">Projects </Link>
//             <Link href="/About">About </Link>
//             <Link href="/Contact">Contact </Link>
//             </div>
//         </div>
//         <div className={styles.rightSide}>
//             <Link href="/">home </Link>
//             <Link href="/Projects">Projects </Link>
//             <Link href="/About">About </Link>
//             <Link href="/Contact">Contact </Link>
// <button onClick={toggleNavbar}>
//   <ReorderIcon/>
// </button>
//         </div>
//         </div>
//   )
// }

// export default Navbar