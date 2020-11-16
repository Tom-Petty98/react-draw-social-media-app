
function DrawPage() {
  return (
    <div>
      <script src='../src/draw/p5.min.js'></script>
      <script src='../src/draw/create-drawing.js'></script>
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
      </div>
    </div>
  )
}

export default DrawPage;
