import React, { useState, useEffect } from 'react';
import DrawingsList from './DrawingsList';
import * as drawingActions from "../../redux/actions/drawingActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
//import { useDispatch, useSelector } from "react-redux";
//import { loadDrawings } from "../../redux/actions/drawingActions"


function SharedDrawings({storeDrawings, actions}) {

	useEffect(() => {
    actions.loadDrawings()
    .catch(error => {
      alert("Loading drawings failed" + error);
    }); 
  }, [] )

	// allows you to like and unlike
  function toggleLike(id) {
    const drawing = storeDrawings.find(drawing => drawing.drawing_id === id)
    drawing.complete = !drawing.complete
    //setLikes(increment no of likes)
  }
  
  function handleEdit(drawing) {   
    actions.updateDrawing(drawing)
    .then( response => console.log(response))
    .catch( error => console.log(error));    
  }
  
  async function handleDelete(drawingId) {
    try {
      await actions.deleteDrawing(drawingId);
    } catch (error) {
      console.log("Delete failed. " + error.message, { autoClose: false });
    }
  }

	return (
		<>
      <DrawingsList        
      drawings={storeDrawings}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
      toggleLike={toggleLike}/>
		</>
	)
}

function mapStateToProps(state) {
  return {
    storeDrawings: state.drawings
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadDrawings: bindActionCreators(drawingActions.loadDrawings, dispatch),
      updateDrawing: bindActionCreators(drawingActions.updateDrawing, dispatch),
      deleteDrawing: bindActionCreators(drawingActions.deleteDrawing, dispatch)
     // loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch)
    }
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SharedDrawings);
