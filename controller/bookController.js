
const indexRoute = (req, res) => {
    res.json(customResponse(true, "welcome to node.js api"));
};

//customize response
const customResponse = (status, msg, result) => {
    let response = {
           "ok": status,
           "message": msg,
           result
    }
    return response;
}


let books = [
    {
        _id: 1, 
        title: "Computer Architecture", 
        category: "computer science", 
        price: 100
    },
   
    {
        _id: 2, 
        title: "Become Rockstart JavaScript Developer", 
        category: "programming", 
        price: 150
    },
    {
        _id: 3, 
        title: "Monolith to Microservices", 
        category: "software engineering", 
        price: 200
    },
    {
        _id: 4, 
        title: "Modern Full-Stack Development", 
        category: "programming", 
        price: 120
    },
];

const getBooks = ("/api/books", (req, res) => {
    res.json(customResponse(true, "success", books));
});

const createBook = ("/api/addBook", (req, res) => {
    const book = req.body;
    books.push(book);
    console.log("> new book has been created with id : " + book._id);
    res.json(customResponse(true, "new book created with success", book));
});

const updateBook = ("/api/updateBook", (req, res) => {
    const book = books.find((object, index) => {
        if(object._id === req.body._id){
            books[index] = req.body;
            return req.body;
        }     
    });
    if(book){
        res.json(customResponse(true, "book updated with success", req.body));
    }else{
        res.json(customResponse(false, "book with id : "+req.body._id +" doesn't exist"));
    };
    
});

const deleteBook = ("/api/deleteBook", (req, res) => {
    const book = books.find((object) => {
        if(object._id == req.query._id){
            books = books.filter(object => object._id != req.query._id);
            return req.query._id;
        }     
    });

    if(book){
        res.json(customResponse(true, "book with _id : "+ book._id +" has been deleted with success"));
    }else{
        res.json(customResponse(false, "book with id : "+ req.query._id +" doesn't exist"));
    };
    
});


module.exports = {
    indexRoute, getBooks, createBook, updateBook, deleteBook
}