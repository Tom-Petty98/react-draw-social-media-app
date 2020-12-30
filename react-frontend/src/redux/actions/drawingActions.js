import * as types from "./actionTypes";
import * as drawingApi from "../../api/drawingApi";

export function loadDrawings() {
  return function(dispatch) {
    return drawingApi
      .getDrawings()
      .then(drawings => {
        dispatch({ type: types.LOAD_DRAWING_SUCCESS, drawings });
      })
      .catch(error => {
        throw error;
      });
  };
}

export function createDrawing(drawing) {
  //eslint-disable-next-line no-unused-vars
  return function(dispatch, getState) {
    return drawingApi
      .createDrawing(drawing)
      .then(savedDrawing => {
        dispatch({ type: types.CREATE_DRAWING_SUCCESS, savedDrawing });
      })
      .catch(error => {
        throw error;
      });
  };
}

export function updateDrawing(drawing) {
  //eslint-disable-next-line no-unused-vars
  return function(dispatch, getState) {
    return drawingApi
      .updateDrawing(drawing)
      .then(savedDrawing => {
        dispatch({ type: types.UPDATE_DRAWING_SUCCESS, savedDrawing })
      })
      .catch(error => {
        throw error;
      });
  };
}

export function deleteDrawing(drawingId) {
  return function(dispatch) {
    // Doing optimistic delete, so not dispatching begin/end api call
    // actions, or apiCallError action since we're not showing the loading status for this.
    dispatch({ type: types.DELETE_DRAWING_OPTIMISTIC, drawingId});
    return drawingApi.deleteDrawing(drawingId);
  };
}