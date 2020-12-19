import React, { useState, useEffect } from 'react';
import DrawingsList from './DrawingsList';
import * as drawingActions from "../../redux/actions/drawingActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
//import { useDispatch, useSelector } from "react-redux";
//import { loadDrawings } from "../../redux/actions/drawingActions"

require("dotenv").config();



function SharedDrawings({ drawings, actions }) {

  console.log(drawings)

	useEffect(() => {
    // will only load if arr is empty
    if (drawings.length === 0) {
      actions.loadDrawings().catch(error => {
        alert("Loading drawings failed" + error);
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
      loadDrawings: bindActionCreators(drawingActions.loadDrawings, dispatch)
     // loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch)
    }
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SharedDrawings);
