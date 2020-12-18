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
            file: null,
            imgLoaded: false
//            likes: 0,
//            comments: 'maybe this just holds a refernce to the comments table',
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
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

      handleFileChange(event) {
        this.setState({
          file: event.target.files[0],
         // loaded: 0,
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
        console.log(file);
        const fd = new FormData();
        fd.append("image", file);
        axios({
            url: process.env.REACT_APP_API_URL + "draw/save-image",
            method: "post",
            data: fd,
        }).then(res => {
            this.setState({
              picture: res.data.path,
              imgLoaded: true
            });
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
        const { title, description, picture, file, imgLoaded } = this.state
        return (
          <div>
            <h1>Share Your Awesome Drawing For Others To See</h1>
            { imgLoaded && 
            <img src={picture} alt="" width="300" height="350"></img>}
            <br />
            <form method="post" action="/save-image" enctype="multipart/form-data" onSubmit={this.handleImgSubmit}>
              <input type="file" name="image" onChange={this.handleFileChange}/>
              <button type="submit">Submit</button>
            </form>
            <br/>
            <br/>
            <form method='POST' onSubmit={this.handleSubmit}>
              <label>
                Title:
                <input type="text" value={title} onChange={e => this.handleChange(e, 'title')} />
              </label>
              <br />
              
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