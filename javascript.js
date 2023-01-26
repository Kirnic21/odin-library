const book1 = new Book("1984","Jeff Kinney","123","yes")
const book2 = new Book("1985","George Pig","322","yes")
const library = [book1];
// modal
const modal = document.getElementById("forms-modal");
const btn = document.getElementById("myBtn")
const span = document.getElementsByClassName("close")[0];
//cards
const container = document.querySelector(".card-container")
const submit = document.querySelector("#submit")
//show cards
submit.addEventListener("click",function(){
  event.preventDefault()
  const title= document.querySelector("#title").value
  const author= document.querySelector("#author").value
  const pages = document.querySelector("#pages").value
  const read = document.querySelector("#read").value
  let newBook = new Book(title,author,pages,read)
  createCard(newBook)
})
function Book(Name, Author, Pages, Read,Index) {
// constructor
  this.Name = Name;
  this.Author = Author;
  this.Pages = Pages;
  this.Read = Read;
}
function createCard(newestBook)
{
  library.push(newestBook)
  let newbookIndex = library.length - 1
  const newCard=document.createElement("div")
    newCard.classList.add("cards")
    const para= document.createElement("p")
    para.classList.add("para")
  console.log(newbookIndex)
  let newValues = Object.entries(library[newbookIndex])
  for(let i in newValues)
  {
    const head = document.createElement("h1")
    let string = newValues[i].join(":")
    let text2= document.createTextNode(string)
    para.appendChild(head)
    head.appendChild(text2)
  }
  container.appendChild(newCard)
  newCard.appendChild(para);
}

function showCards(){
  for(let key in library)
  {
    //create a new card with a dataset id
    const newCard=document.createElement("div")
    newCard.classList.add("cards")
    const para= document.createElement("p")
    para.classList.add("para")
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
    newCard.appendChild(para);
    //remove button
    const removeButton = document.createElement("button");
    removeButton.textContent="remove"
    newCard.appendChild(removeButton);
  }
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
