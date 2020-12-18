import React, { useState } from 'react'
import EditDrawing from './EditDrawing';
const axios = require('axios');
require("dotenv").config();

// so that each drawing has its own comments and description each will have to rendered here
// comments will be hidden but can be accessed by clicking the comments icon.
// is comments a relational data base and to return the num of comments is the best way to run a query
// where would this code be

function Drawing({drawing, toggleLike}) {
  
  function handleLikeClick(){
    toggleLike(drawing.drawing_id)
  }

  let [description_opened, setDescOpened] = useState(false);
  let [comments_opened, setCommentsOpened] = useState(false);
  let [edit_drawing, setEditOpened] = useState(false);

  function toggleDescription(e){
    setDescOpened(description_opened = !description_opened) 
  }

  function toggleComments(e){
    setCommentsOpened(comments_opened = !comments_opened) 
  }
  
// auth logic to set weather the edit button can be accessed and pressed
  function handleEditClick(){
    setEditOpened(edit_drawing = !edit_drawing)
  }

  async function handleDeleteClick(){
    await axios.delete( process.env.REACT_APP_API_URL + 'drawings/delete/' + drawing.drawing_id.toString())
        .then( response => console.log(response))
        .catch( error => console.log(error));
  }

  if(edit_drawing){
    return <EditDrawing drawing={drawing} handleEditClick={handleEditClick} />
  }

  return (
    <div>
      <h1>{drawing.title}</h1>     
      <img src={drawing.picture} alt="" width="300" height="350"></img>
      {/* <input className="like-button" type="checkbox" checked={drawing.liked} onChange={handleLikeClick}></input> */}
      <button className="description-arrow" onClick={toggleDescription}>Description</button>
      <button onClick={handleEditClick}>Edit Drawing</button>
      <button onClick={handleDeleteClick}>Delete Drawing</button>
      <br />
      {description_opened && 
      <p>{drawing.description}</p>}   
      <button className="comments-button" onClick={toggleComments}>Display comments</button>
      <br />
    </div>
  )
}

export default Drawing