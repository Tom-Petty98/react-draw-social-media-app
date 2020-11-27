var router = require('express').Router();
const db = require("../../models");
const SharedDrawing = db.sharedDrawings;

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

router.post('/create', (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const shared_drawing = {
    title: req.body.title,
    description: req.body.description,
    picture: req.body.picture
  };

  SharedDrawing.create(shared_drawing)
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

router.put("/update/:id", (req, res) => {
  const id = req.params.id;

  SharedDrawing.update(req.body, {
    where: { drawing_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Drawing was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Drawing with id=${id}. Maybe Drawing was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Drawing with id=" + id
      });
    });
});

router.delete("/delete/:id", (req, res) => {
  const id = req.params.id;

  SharedDrawing.destroy({
    where: { drawing_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Drawing was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Drawing with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Drawing with id=" + id
      });
    });
});

module.exports = router;