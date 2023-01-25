
// modal
const modal = document.getElementById("forms-modal");
const btn = document.getElementById("myBtn")
const span = document.getElementsByClassName("close")[0];
//cards
const container = document.querySelector(".card-container")



function Book(Name, Author, Pages, Read) {
// constructor
  this.Name = Name;
  this.Author = Author;
  this.Pages = Pages;
  this.Read = Read;
}
const book1 = new Book("1984","Jeff Kinney","123","yes")
const library = [book1];
function createCards(){
  const newCard=document.createElement("div")
  newCard.classList.add("cards")
  const para= document.createElement("p")
  para.classList.add("para")
  for(let key in library)
  {
    let values = Object.entries(library[key])
    for(let i in values)
    {
      const head = document.createElement("h1")

      let string = values[i].join(":")
      let text2= document.createTextNode(string)
      para.appendChild(head)
      head.appendChild(text2)
    }
    container.appendChild(newCard)
    newCard.appendChild(para)

  }
}

function addBooktoLibrary(newBook, title, author, pages, read) {
  newBook = new Book(title, author, pages, read);
  newBook.name = document.querySelector('#title').value;
  newBook.author = document.querySelector('#author').value;
  newBook.pages = document.querySelector('#pages').value;
  newBook.read = document.querySelector('#read').value;
  library.push(newBook);
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
createCards()