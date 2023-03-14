import Image from 'next/image';
import BannerImage from "../public/assets/ma9am_alshahid.jpg";

export default function Home() {

  return (
     <div >
      <header className="Home-header">
        <div >
            <Image 
            src={BannerImage}
            alt="/"
            layout="intrinsic"
            objectFit="cover"
            priority
            />
        </div>
        <div className="App-welcome-section">
          <p className="home">
              Hello
          </p>
           There will be better styles for the css after finals, aswell as a better logo and better integration with Github, Wakatime, and other APIs.
         </div> 
       </header> 
       <div  >
       </div>
    </div> 
    );
}





// import React from 'react';
//  import { Link } from 'react-router-dom';
//  import BannerImage from "../assets/ma9am_alshahid.jpg";
//  import "../styles/Home.css";

// // prob just gonna make this the about me screen 
// function  Home() {
//   constructor(props);{
//     super(props);
//     this.state = {apiResponse: ""};
//   }

//     callAPI();{
//       fetch("http://localhost:9000/testAPI")
//           .then(res => res.text())
//           .then(res => this.setState({ apiResponse: res}))
//           .catch( err => err);
//     }

//     componentDidMount();{
//       this.callAPI();
//     }

//   return (
//     <div className='home' style ={{backgroundImage: `url(${BannerImage})`}}>
// <p className="App-intro">;{this.state.apiResponse}</p>
//       <div className='headerContainer' >
//         {/* <h1> pizza pizza </h1> */}
//         {/* <p>write down something chessey </p> */}

//         <Link to = "/menu">
//         {/* <button>order now</button> */}
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default Home





// kevins test case

// import React, {Component }from 'react';
// import Link from 'next/link';
// import BannerImage from "../public/assets/ma9am_alshahid.jpg";
//  import "../styles/Home.module.css";

// // prob just gonna make this the about me screen 
// function index() {
  

//   return (
//     <div className='home' style ={{backgroundImage: `url(${BannerImage})`}}>
//       <div className='headerContainer' >
//         {/* <h1> pizza pizza </h1> */}
//         {/* <p>write down something chessey </p> */}

//         <Link href="/menu">
//         {/* <button>order now</button> */}
//         </Link>

//       </div>

//     </div>
//   )
// }

// export default index

