
const bookPlaceholder = new Book('asd', 'asda', 'dsa', 'Dsad');
const bookPlaceholder2 = new Book('asdss', 'assdada', 'dsasaa', 'sadsaDsad');
const library = [bookPlaceholder, bookPlaceholder2];
// modal
const modal = document.getElementById("forms-modal");
const btn = document.getElementById("myBtn")
const span = document.getElementsByClassName("close")[0];
//cards
const container = document.querySelector(".card-container")

function createCards()
{
  let newCard=document.createElement("div")
  newCard.classList.add("cards")
  for(key in library){
  console.log(library[key])
  container.appendChild(newCard)
  newCard.appendChild(text)
  }
}

function Book(name, author, pages, read) {
// constructor
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBooktoLibrary(newBook, title, author, pages, read) {
  newBook = new Book(title, author, pages, read);
  newBook.name = document.querySelector('#title').value;
  newBook.author = document.querySelector('#author').value;
  newBook.pages = document.querySelector('#pages').value;
  newBook.read = document.querySelector('#read').value;
  library.push(newBook);
  console.log(library);
}

btn.onclick = function(){
  modal.style.display = "block"
}
span.onclick = function(){
  modal.style.display = "none"
}
window.onclick = function(event){
  if (event.target == modal){
    modal.style.display = "none"
  }
}
createCards(0)