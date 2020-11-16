import p5  from "p5";

const colorInput = document.getElementById('color');
const weight = document.getElementById('weight');
const clear = document.getElementById('clear');
const paths = [];
let currentPath = [];

function setup() {
  // create a canvas which is full width and height
  createCanvas(window.innerWidth, window.innerHeight);

  // Add a white background to the canvas
  background(255);
}

function draw() {
      // disabled filling geometry - p5js function
      noFill();

      if (mouseIsPressed) {
          // Store the location of the mouse
          const point = {
              x: mouseX,
              y: mouseY,
              color: colorInput.value,
              weight: weight.value
          };
          currentPath.p5.push(point);
        }

      // Looping over all the paths and drawing all the points inside them
      paths.forEach(path => {
        beginShape();
        path.forEach(point => {
            stroke(point.color);
            strokeWeight(point.weight);
            vertex(point.x, point.y);
        });
      endShape();
      });
}

//saves prev shape and cleans up path for new shape
function mousePressed() {
  currentPath = [];
  paths.p5.push(currentPath);
}

clear.addEventListener('click', () => {
  paths.splice(0);
  background(255);
});

function DrawPage() {
  return (
    <div class="sidebar">
    <script defer src='../src/draw/create-drawing.js'></script>
    <ul>
        <li>
            <label for="color">Color:</label>
            <input type="color" id="color" />
        </li>
        <li>
            <label for="weight">Stroke:</label>
            <input type="number" id="weight" min="2" max="200" value="3" />
        </li>
        <li>
            <button id="clear"><i class="fa fa-trash"></i></button>
        </li>
    </ul>
    </div>
  )
}

export default DrawPage;
