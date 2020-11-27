import React, { useState } from 'react';
import PostList from './PostList';
import { useFetch } from './../hooks.js';

function SharedDrawings() {

	const [posts, loading] = useFetch("http://localhost:3001/api/posts");

	// allows you to like and unlike
  function toggleLike(id) {
    const post = posts.find(post => post.id === id)
    post.complete = !post.complete
    //setLikes(increment no of likes)
  }

	return (
		<>
			<PostList toggleLike={toggleLike} posts={posts}/>
		</>
	)
}

export default SharedDrawings

