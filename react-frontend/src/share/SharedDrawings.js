import React, { useState } from 'react';
import PostList from './PostList';
import { useFetch } from './../hooks.js';
require("dotenv").config();



function SharedDrawings() {
	const url = process.env.REACT_APP_API_URL + "posts";
	console.log(url);
	console.log(require("dotenv").config())

	const [posts, loading] = useFetch(url);

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

