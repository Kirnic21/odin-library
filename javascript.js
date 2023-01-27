
const library = [];
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
  const read =document.querySelector("#red")
  let newBook = new Book(title,author,pages)
  createCard(newBook)
})
function Book(Name, Author, Pages, Read) {
// constructor
  this.Name = Name;
  this.Author = Author;
  this.Pages = Pages;
}

function createCard(newestBook)
{
  library.push(newestBook)
  let newbookIndex = library.length - 1;
  const newCard=document.createElement("div")
    newCard.classList.add("cards")
    const para= document.createElement("p")
    para.classList.add("para")
    newCard.dataset.id=newbookIndex
    console.log(newCard.dataset.id)
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
  let removeButton= document.createElement("button")
  removeButton.textContent="Remove"
  newCard.appendChild(removeButton)
  removeButton.addEventListener("click",function(){
    delete library[newbookIndex];
    newCard.remove()
    newbookIndex=newbookIndex - 1
    console.log(library)
    console.log(newbookIndex)
  })
 const read= document.createElement("button")
 read.textContent="Not Read"
 let haveRead = false;
 read.addEventListener("click",function(){
  if(haveRead===false)
  {
    haveRead = true
    read.textContent ="Read"
  }
  else if(haveRead === true)
  {
    haveRead = false
    read.textContent = "Not read"
  }
 })
 newCard.appendChild(read)
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
