import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
const axios = require('axios');


class ShareDrawing extends Component {
    constructor(props) {
        super(props);
        this.state = {          
            title:'',
            description: '',
            picture: 'pic.file.location'
//            likes: 0,
//            comments: 'maybe this just holds a refernce to the comments table',
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event, name) {
        const target = event.target;
        const value = target.value;

        this.setState({
            [name]: value
        })
      }
    

      async handleSubmit(event) {       
        await axios.post('http://localhost:3001/api/posts/create', {
          "title": this.state.title,
          "description": this.state.description,
          "picture": this.state.picture
        })
        .then( response => console.log(response))
        .then(this.props.history.push('/posts'))
        .catch( error => console.log(error));


      //  this.props.history.push('/posts');
      //  window.location.href = 'http://loalhost:3000/posts';
      }     
    
      // need to somehow save and retrive the picture when entering this page.
      render() {
        const { title, description, picture } = this.state
        return (
          <form method='POST' onSubmit={this.handleSubmit}>
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
            <button type="submit">Submit</button>
          </form>
        );
      }
    }

    export default withRouter(ShareDrawing);