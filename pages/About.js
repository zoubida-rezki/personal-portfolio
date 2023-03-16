import React from 'react';
import Multipleimages from "../public/assets/dzair2.jpg"; 
// import zhr from "../public/assets/zhr.webp";
import Image from 'next/image';
import styles from "../styles/About.module.css";
function About() {
  // blogs maybe ????
  return (
    <div className={styles.about}>
    <div className={styles.aboutTop}  /*style ={{backgroundImage: `url(${Multipleimages})`}}*/></div>
    {/* <div className={styles.imageBlurredEdge} > */}
   
      {/* <Image 
            src={Multipleimages}
            alt="/"
            backgroundImage = "True"
            // position= "center"
            // align= "center"
            style={styles.image}
            // width="150"
            // height="150"
            background-size= "cover"
            quality={100}
            layout="intrinsic"
            objectFit="cover"
            priority
            />   */}
    <div className={styles.image}>
      <h1 className={styles.title} >About </h1>        
    <p className={styles.text}> Hi! I am a second-year student studying computer science, and I am passionate about creating engaging and dynamic web applications. I have a strong interest in full-stack web development and have been honing my skills in this area. However, recently, I have found myself drawn towards the exciting field of machine learning, specifically computer vision. At present, I am conducting research on the topic of human parsing at my university, which has been an incredible learning experience. I am looking forward to continuing to explore this fascinating field and all it has to offer.  </p>
    </div>
    <div className={styles.aboutBottom}></div>
    </div>
  )
}

export default About