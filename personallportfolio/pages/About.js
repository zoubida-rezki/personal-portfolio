import React from 'react';
import Multipleimages from "../public/assets/dzair.jpg"; 
import zhr from "../public/assets/zhr.webp";
import Image from 'next/image';
import styles from "../styles/About.module.css";
function About() {
  // blogs maybe ????
  
  return (
    <div className={styles.about}>
    <div className={styles.aboutTop} style ={{backgroundImage: `url(${Multipleimages})`}}></div>
    <div className={styles.aboutBottom}>
    <h1>About </h1>
      <Image 
            src={zhr}
            alt="/"
            width="350"
            height="350"
            layout="intrinsic"
            objectFit="cover"
            priority
            />
    <p> currentlly a secound year computer science major with experience in full-stack web dev and machine learning  </p>
</div>
    </div>
  )
}

export default About