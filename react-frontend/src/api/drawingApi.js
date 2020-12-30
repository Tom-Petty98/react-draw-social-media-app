import { handleResponse, handleError } from "./apiUtils.js";
require("dotenv").config();

const baseUrl = process.env.REACT_APP_API_URL + "/drawings/";
// gonna change the backend path from posts to drawings 

export function getDrawings() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function createDrawing(drawing) {
  return fetch(baseUrl + "create", {
    method: "POST", 
    headers: { "content-type": "application/json" },
    body: JSON.stringify(drawing)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function updateDrawing(drawing) {
  return fetch(baseUrl + "update/" + drawing.id, {
    method: "PUT", 
    headers: { "content-type": "application/json" },
    body: JSON.stringify(drawing)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteDrawing(drawingId) {
  return fetch(baseUrl + "delete/" + drawingId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}

// routes: /drawings +:  / , /create, /update/:id, /delete/:id