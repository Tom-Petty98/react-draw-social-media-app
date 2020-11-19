import React, { useState } from 'react';
import PostList from './PostList'

function SharedDrawings() {
	const [posts, setPosts] = useState([{id: 0, title: "Doodle", picture: "https://apkpure.com/easy-doodle-art-ideas/com.easydoodleartideas.xpanders#com.easydoodleartideas.xpanders-1",
description: "Random doodle from online", no_of_likes: 0, date_posted:"10/10/2020"},
{id: 1, title: "Doodle2", picture: "https://apkpure.com/easy-doodle-art-ideas/com.easydoodleartideas.xpanders#com.easydoodleartideas.xpanders-1",
description: "Random doodle from online", no_of_likes: 0, date_posted:"10/10/2020"}]);

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

