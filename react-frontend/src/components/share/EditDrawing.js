import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
const axios = require('axios');
require("dotenv").config();

class EditDrawing extends Component {
    constructor(props) {
        super(props);
        this.state = {          
            title: this.props.post.title,
            description: this.props.post.description,
            picture: this.props.post.picture
//            likes: 0,
//            comments: 'maybe this just holds a refernce to the comments table',
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.discardChanges = this.discardChanges.bind(this);
      }
    
      //for somereason if a field is a checkbox you have to use 
      // const value = target.type === 'checkbox' ? target.checked : target.value;
      handleChange(event, name) {
        const target = event.target;
        const value = target.value;
 //       const name = target.getAttribute('name');

        this.setState({
            [name]: value
        })
      }

      discardChanges(){
        this.props.handleEditClick();
      }
    

      async handleSubmit(event) {       
        await axios.patch( process.env.REACT_APP_API_URL + 'posts/update/' + this.props.post.drawing_id.toString(), {
          "title": this.state.title,
          "description": this.state.description,
          "picture": this.state.picture
        })
        .then( response => console.log(response))
        .catch( error => console.log(error));

        event.preventDefault();
        this.props.handleEditClick();
      }     
    
      // need to somehow save and retrive the picture when entering this page.
      render() {
        const { title, description, picture } = this.state
        return (
          <form method='PATCH' onSubmit={this.handleSubmit}>
            <br />
            <label>
              Title:
              <input type="text" value={title} onChange={e => this.handleChange(e, 'title')} />
            </label>
            <br />
            <h2>Placeholder for image string</h2>
            <br />
            <label>
                Description:
                <textarea value={description} onChange={e => this.handleChange(e, 'description')} />
            </label>
            <br />
            <button type="submit">Submit</button>
            <button onClick={this.discardChanges}>Discard Changes</button>
          </form>
        );
      }
    }

    export default withRouter(EditDrawing);