import React, { Component } from 'react';
import Sketch from './Sketch';

class DrawPage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      color: "#000000",
      weight: 3,
      clear: false,
      share: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleShare = this.handleShare.bind(this);
  }

  handleChange(event, name) {
    const value = event.target.value;

    this.setState({
        [name]: value
    })
  }

  handleClear(){
    this.setState({
      clear: !this.state.clear
    })
  } 

  handleShare(){
    this.setState({
      share: !this.state.share
    })
  } 
  
  render(){
    const {color, weight, clear, save, share} = this.state
    return (
      <div>
        <div className="sidebar">        
          <ul>
              <li>
                <label htmlFor="color">Color:</label>
                <input type="color" id="color" value={color}
                onChange={e => this.handleChange(e, 'color')}/>
              </li>
              <li>
                <label htmlFor="weight">Stroke:</label>
                <input type="number" id="weight" min="2" max="200" value={weight} 
                onChange={e => this.handleChange(e, 'weight')}/>
              </li>
              <li>
                <button id="share" onClick={this.handleShare}><i className="fas fa-share"></i></button>
              </li>
              <li>
                <button id="clear" onClick={this.handleClear}><i className="fas fa-trash"></i></button>
              </li>
          </ul> 
        </div>
        <Sketch color={color} weight={weight} clear={clear} handleClear={this.handleClear}
          share={share} handleShare={this.handleShare}/>
      </div>
    )
  }
}

export default DrawPage;
