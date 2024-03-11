const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  //Write your code here
  res.send(books)
  return res.status(300).json({message: "Here are the books"});
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  //Write your code here

  const bookisbn = (req.params.isbn)
  let book = books[bookisbn]
  if(book) {
    res.send(book)
  }
  else{
    res.status(404).json({message: "Book not found"})
  }
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //Write your code here
  const author = (req.params.author)
  let booksFromAuther = []
  for (let key in books){
    if(books[key].author == author){
      console.log(books[key].author, " : ", author)
      booksFromAuther.push(books[key])
      console.log(booksFromAuther)
    }
  }
  if(booksFromAuther.length > 0) {
    res.send(booksFromAuther)
  }
  else{
    res.status(404).json({message: "Books not found"})
  }
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
  const title = (req.params.title)
  let booksWithTitle = []
  for (let key in books){
    if(books[key].title == title){
      console.log(books[key].title, " : ", title)
      booksWithTitle.push(books[key])
      console.log(booksWithTitle)
    }
  }
  if(booksWithTitle.length > 0) {
    res.send(booksWithTitle)
  }
  else{
    res.status(404).json({message: "Books not found"})
  }
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  const bookisbn = (req.params.isbn)
  let book = books[bookisbn]
  if(book) {
    res.send(book.reviews)
  }
  else{
    res.status(404).json({message: "Book not found"})
  }
  
});

module.exports.general = public_users;
