import React from 'react'
import Drawing from './Drawing'

export default function DrawingList({ drawings, toggleLike }) {

	let drawingsToRender;
	if (drawings){
		drawingsToRender = drawings.map(drawing => {
			return <Drawing key={drawing.drawing_id} toggleLike={toggleLike} drawing={drawing} />
	});
	}
    return <div>{drawingsToRender}</div>;
}
