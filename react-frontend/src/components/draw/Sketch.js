import React from "react";
import Sketch from "react-p5";
 
export default (props) => {
  const paths = [];
  let currentPath = []; 

    const setup = (p5, canvasParentRef) => {
        // use parent to render the canvas in this ref
        // (without that p5 will render the canvas outside of your component)
        p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
        p5.background(255);
    };
 
    const draw = (p5) => {
      p5.noFill();

      if (p5.mouseIsPressed) {
          // Store the location of the mouse
          const point = {
              x: p5.mouseX,
              y: p5.mouseY,
              color: props.color,
              weight: props.weight
          };
          currentPath.push(point);
        }

      // Looping over all the paths and drawing all the points inside them
      paths.forEach(path => {
        p5.beginShape();
        path.forEach(point => {
            p5.stroke(point.color);
            p5.strokeWeight(point.weight);
            p5.vertex(point.x, point.y);
        });
      p5.endShape();
      });

      if(props.clear){
        paths.splice(0);
        p5.background(255);
        props.handleClear();
      }

      if(props.share){
    //    p5.saveCanvas('myCanvas', 'jpg');
        props.handleShare();
        window.location.href = 'http://34.89.5.37:3000/share';
      }
    };

    const mousePressed = () => {
      currentPath = [];
      paths.push(currentPath);
    }

    return <Sketch setup={setup} draw={draw} mousePressed={mousePressed} />;
};