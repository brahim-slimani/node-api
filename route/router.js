const express = require("express");
const bookController = require("../controller/bookController");
const router = express.Router();


//entry endpoint
router.get('/', bookController.indexRoute);

//get books 
router.get("/api/books", bookController.getBooks);

//post new book
router.post("/api/addBook", bookController.createBook);

//update book
router.put("/api/updateBook", bookController.updateBook);

//delete book
router.delete("/api/deleteBook", bookController.deleteBook);


module.exports = router;
