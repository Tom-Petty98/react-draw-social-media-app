//export const CREATE_DRAWING = "CREATE_DRAWING";
export const LOAD_DRAWING_SUCCESS = "LOAD_DRAWING_SUCCESS";
export const CREATE_DRAWING_SUCCESS = "CREATE_DRAWING_SUCCESS";
export const UPDATE_DRAWING_SUCCESS = "UPDATE_DRAWING_SUCCESS";

//export const LOAD_AUTHORS_SUCCESS = "LOAD_AUTHORS_SUCCESS";

// By convention, actions that end in "_SUCCESS" are assumed to have been the result of a completed
// API call. But since we're doing an optimistic delete, we're hiding loading state.
export const DELETE_DRAWING_OPTIMISTIC = "DELETE_DRAWING_OPTIMISTIC";
