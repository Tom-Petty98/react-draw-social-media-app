import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function drawingReducer(state = initialState.drawings, action) {
  switch (action.type) {
    case types.CREATE_DRAWING_SUCCESS:
      return [...state, { ...action.drawing }];
    case types.UPDATE_DRAWING_SUCCESS:
      return state.map(drawing =>
        drawing.id === action.drawing.id ? action.drawing : drawing
      );
    case types.LOAD_DRAWING_SUCCESS:
      return action.drawings;
    default:
      return state;
  }
}