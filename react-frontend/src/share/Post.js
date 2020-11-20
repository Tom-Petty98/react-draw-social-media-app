import React, { useState } from 'react'

// so that each post has its own comments and description each will have to rendered here
// comments will be hidden but can be accessed by clicking the comments icon.
// is comments a relational data base and to return the num of comments is the best way to run a query
// where would this code be

function Post({post, toggleLike}) {
  
  function handleLikeClick(){
    toggleLike(post.id)
  }

  let [opened, setOpened] = useState(false);

  function toggleOpen(e){
    setOpened(opened = !opened) 
  }
  

  return (
    <div>
      <h1>{post.title}</h1>
      <img src={post.picture} alt=""></img>
      <input className="like-button" type="checkbox" checked={post.liked} onChange={handleLikeClick}></input>
      <button className="description-arrow" onClick={toggleOpen}>Description</button>
      {opened && 
      <p>{post.description}</p>}   
      <button className="comments-button" onClick="myFunction()">Display num of comments underneath</button>
    </div>
  )
}

export default Post
