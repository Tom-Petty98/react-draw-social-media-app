import React from 'react'
import Post from './Post'

export default function PostList({ posts, toggleLike }) {

	let postsToRender;
	if (posts){
		postsToRender = posts.map(post => {
			return <Post key={post.drawing_id} toggleLike={toggleLike} post={post} />
	});
	}
    return <div>{postsToRender}</div>;
}
