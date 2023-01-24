let bookPlaceholder= new Book("asd","asda","dsa","Dsad")
let bookPlaceholder2= new Book("asdss","assdada","dsasaa","sadsaDsad")
let library=[bookPlaceholder,bookPlaceholder2]
const button = document.querySelector("#add-book")

function Book(name,author,pages, read){
//constructor
    this.name=name;
    this.author=author;
    this.pages = pages;
    this.read = read;
}
function addBooktoLibrary(newBook,title,author,pages,read)
{
    newBook = new Book(title,author,pages,read);
    newBook.name = document.querySelector("#title").value;
    newBook.author = document.querySelector("#author").value;
    newBook.pages = document.querySelector("#pages").value;
    newBook.read = document.querySelector("#read").value;
    library.push(newBook)
    console.log(library)
}
function generateTableHead(table)
{
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}
function generateTable(table,data){
    for(let element of data){
        let row = table.insertRow();
        for (key in element){
            let cell = row.insertCell();
            let text =document.createTextNode(element[key]);
            cell.appendChild(text)
        }
    }
}
let table = document.querySelector(".Books")
let data = Object.keys(library[1])
generateTable(table,library);
generateTableHead(table,data);
