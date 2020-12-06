
//import {useEffect} from 'react';
//import {Helmet} from 'react-helmet';
import React from 'react';
import Sketch from './Sketch';


function DrawPage() {

//   useEffect(() => {
//     const p5script = document.createElement('script');
//     const createDrawingScript = document.createElement('script');
  
//     p5script.src = "../src/draw/p5.min.js";
//     p5script.type="text/jsx";
//  //   p5script.async = true;

//     createDrawingScript.src = "../src/draw/create-drawing.js";
//     createDrawingScript.type="text/jsx";
//   //  createDrawingScript.async = true;
  
//     document.head.appendChild(p5script);
//     document.body.appendChild(createDrawingScript);
  
//     return () => {
//       document.head.removeChild(p5script);
//       document.body.removeChild(createDrawingScript);
//     }
//   }, []);


  return (
    <div>
      {/* <Helmet>
        <script type="text/jsx" src="p5.min.js"></script>
        <script type="text/jsx"  src="create-drawing.js"></script> 
      </Helmet> */}
      {/* <script src="p5.min.js"></script> */}
      {/* <script type="text/jsx" src="../src/draw/p5.min.js"></script> */}
      <div className="sidebar">        
        <ul>
            <li>
              <label htmlFor="color">Color:</label>
              <input type="color" id="color" />
            </li>
            <li>
              <label htmlFor="weight">Stroke:</label>
              <input type="number" id="weight" min="2" max="200" defaultValue="3" />
            </li>
            <li>
              <button id="clear"><i className="fa fa-trash"></i></button>
            </li>
        </ul> 
        {/* <script type="text/jsx"  src="../src/draw/create-drawing.js"></script>        */}
      </div>
      <Sketch />
    </div>
  )
}

export default DrawPage;
