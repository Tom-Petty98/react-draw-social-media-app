var router = require('express').Router();
const db = require("../../models");
const SharedDrawing = db.sharedDrawings;
const drawings = require("../../controllers/drawings_controller.js")

// url is api/
router.get('/', (req, res) => {
  SharedDrawing.findAll()
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
});

router.post('/', (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const shared_drawing = {
    title: req.body.title,
    description: req.body.description,
    picture: req.body.picture
  };

  // Save Tutorial in the database
  await SharedDrawing.create(shared_drawing)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });  
});

router.put("/:id", (req, res) => {

})

router.delete("/:id", (req, res) => {

})
module.exports = router;