import React, { useState } from 'react'
import EditDrawing from './EditDrawing';
const axios = require('axios');
require("dotenv").config();

// so that each post has its own comments and description each will have to rendered here
// comments will be hidden but can be accessed by clicking the comments icon.
// is comments a relational data base and to return the num of comments is the best way to run a query
// where would this code be

function Post({post, toggleLike}) {
  
  function handleLikeClick(){
    toggleLike(post.drawing_id)
  }

  let [description_opened, setDescOpened] = useState(false);
  let [comments_opened, setCommentsOpened] = useState(false);
  let [edit_post, setEditOpened] = useState(false);

  function toggleDescription(e){
    setDescOpened(description_opened = !description_opened) 
  }

  function toggleComments(e){
    setCommentsOpened(comments_opened = !comments_opened) 
  }
  
// auth logic to set weather the edit button can be accessed and pressed
  function handleEditClick(){
    setEditOpened(edit_post = !edit_post)
  }

  async function handleDeleteClick(){
    await axios.delete( process.env.REACT_APP_API_URL + 'posts/delete/' + post.drawing_id.toString())
        .then( response => console.log(response))
        .catch( error => console.log(error));
  }

  if(edit_post){
    return <EditDrawing post={post} handleEditClick={handleEditClick} />
  }

  return (
    <div>
      <h1>{post.title}</h1>     
      <img src={post.picture} alt=""></img>
      {/* <input className="like-button" type="checkbox" checked={post.liked} onChange={handleLikeClick}></input> */}
      <button className="description-arrow" onClick={toggleDescription}>Description</button>
      <button onClick={handleEditClick}>Edit Post</button>
      <button onClick={handleDeleteClick}>Delete Post</button>
      <br />
      {description_opened && 
      <p>{post.description}</p>}   
      <button className="comments-button" onClick={toggleComments}>Display comments</button>
      <br />
    </div>
  )
}

export default Post