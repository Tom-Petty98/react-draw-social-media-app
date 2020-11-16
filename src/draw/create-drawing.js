import p5 from "p5";
import p5  from p5;

function setup() {
  // create a canvas which is full width and height
  createCanvas(window.innerWidth, window.innerHeight);

  // Add a white background to the canvas
  background(255);
}

function draw() {}

function DrawPage() {
  return (
    <div class="sidebar">
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
