const router = require("express").Router();
const booksController = require("../../controllers/booksController");


router.route("/:id")
  .post(booksController.create);


router
  .route("/saved")
  .get(booksController.findAll)

router
  .route("/delete/:id")
  .delete(booksController.remove)

module.exports = router;