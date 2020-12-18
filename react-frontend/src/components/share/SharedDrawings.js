import React, { useState } from 'react';
import DrawingsList from './DrawingsList';
require("dotenv").config();



function SharedDrawings() {

	useEffect(() => {
		const { drawings, actions } = this.props;

    if (drawings.length === 0) {
      actions.loadDrawings().catch(error => {
        alert("Loading courses failed" + error);
      });
		}
		
	}, [])

	// allows you to like and unlike
  function toggleLike(id) {
    const drawing = drawings.find(drawing => drawing.id === id)
    drawing.complete = !drawing.complete
    //setLikes(increment no of likes)
	}

	return (
		<>
			<DrawingsList toggleLike={toggleLike} drawings={drawings}/>
		</>
	)
}

function mapStateToProps(state) {
  return {
    drawings: state.drawings
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadDrawings, dispatch)
     // loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch)
    }
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SharedDrawings);
