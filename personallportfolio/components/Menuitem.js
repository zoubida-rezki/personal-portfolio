import React from 'react';
// import MenuList from '../helpers/MenuList';
import Image from 'next/image';
import styles from '../styles/Menu.module.css'

function Menuitem({image,name,link}) {
  return (
    <div className={styles.menuItem}>
    {/* <div></div> */}
        <h1>{name}</h1>
        <Image 
            src={image}
            alt="/"
            style={styles.menuItem}
            layout="intrinsic"
            objectFit="contain"
            priority
            />
        <a href={link}  target="_blank" rel="noreferrer"> link</a> 

    </div>
  )
}
//   return (
//     <div className={styles.menuItem}>

//     {/* <div style ={{backgroundImage: `url(${image})`}}></div>     */}
//     <Image 
//             src={image}
//             alt="/"
//             style={styles.menuItem}
//             width="350"
//             height="350"
//             layout="intrinsic"
//             objectFit="cover"
//             priority
//             />
//         {/* <h1>{name}</h1> */}
//         <h1>{name}</h1>
//         <a href={link}  target="_blank" rel="noreferrer"> link</a> 
//         {/* <h1>{z} bgfskjb</h1> */}
//        {/* <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"> <button >youtube link</button></a>
//        <a href="https://www.youtube.com/">click me</a>
//        <a href="https://github.com/zoubida-rezki/card-game">  idk</a> */}
//        {/* <button onClick={link}>{link}ugdfkh</button>
//        <a href={link} target="_blank" rel="noreferrer"> <button >link</button></a> */}
      
//     </div>
//   )
// }

export default Menuitem