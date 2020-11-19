// this doc will contain the form for creating a post
// need to intialize likes and comments to zero

import React, { Component } from 'react'

export default class ShareDrawing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 'autoincrement functionality here',           
            title:'',
            description: '',
            picture: '',
            likes: 0,
            comments: 'maybe this just holds a refernce to the comments table',
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      //for somereason if a field is a checkbox you have to use 
      // const value = target.type === 'checkbox' ? target.checked : target.value;
      handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]:value
        });
      }
    
      // this will be used at some point to store data in a database
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    
      // need to somehow save and retrive the picture when entering this page.
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Title:
              <input type="text" value={this.state.title} onChange={this.handleChange} />
            </label>
            <br />
            <h2>Placeholder for image string</h2>
            <br />
            <label>
                Description:
                <textarea value={this.state.description} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
    }
