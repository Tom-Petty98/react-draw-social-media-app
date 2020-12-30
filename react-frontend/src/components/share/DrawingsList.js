import React from 'react'
import Drawing from './Drawing'

export default function DrawingList({ drawings,  handleEdit, handleDelete, toggleLike }) {

	let drawingsToRender;
	if (drawings){
		drawingsToRender = drawings.map(drawing => {
			return <Drawing key={drawing.drawing_id} 
			drawing={drawing}
			handleEdit={handleEdit}
			handleDelete={handleDelete}			 
			toggleLike={toggleLike} />
	});
	}
    return <div>{drawingsToRender}</div>;
}
