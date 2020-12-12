import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
const axios = require('axios');
require("dotenv").config();


class ShareDrawing extends Component {
    constructor(props) {
        super(props);
        this.state = {          
            title:'',
            description: '',
            picture: 'pic.file.location',
            file: ''
//            likes: 0,
//            comments: 'maybe this just holds a refernce to the comments table',
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleImgSubmit = this.handleImgSubmit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event, name) {
        const target = event.target;
        const value = target.value;

        this.setState({
            [name]: value
        })
      }

//       document.getElementsByTagName("form")[0].addEventListener("submit", (e) => {
//     e.preventDefault();
//     let file = document.getElementsByTagName("input")[0].files[0];
//     const fd = new FormData();
//     fd.append("image", file);
//     axios({
//         url: "/save-image",
//         method: "post",
//         data: fd,
//     }).then(res => {
//         document.getElementsByTagName("img")[0].src = res.data.path;
//     });
// })

      handleImgSubmit(e) {
        e.preventDefault();
        let file = this.state.file;
        const fd = new FormData();
        fd.append("image", file);
        axios({
            url: process.env.REACT_APP_API_URL + "draw/save-image",
            method: "post",
            data: fd,
        }).then(res => {
            this.setState({picture: res.data.path});
        });
      }
    

      async handleSubmit(event) {       
        await axios.post( process.env.REACT_APP_API_URL + 'posts/create', {
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
        const { title, description, picture, file } = this.state
        return (
          <div>
            <form method="post" action="/save-image" enctype="multipart/form-data" onSubmit={this.handleImgSubmit}>
              <input type="file" name="image" value={file} onChange={e => this.handleChange(e, 'file')}/>
              <button type="submit">Submit</button>
            </form>
            <form method='POST' onSubmit={this.handleSubmit}>
              <label>
                Title:
                <input type="text" value={title} onChange={e => this.handleChange(e, 'title')} />
              </label>
              <br />
              <img src={picture}></img>
              <br />
              <label>
                  Description:
                  <textarea value={description} onChange={e => this.handleChange(e, 'description')} />
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        );
      }
    }

    export default withRouter(ShareDrawing);