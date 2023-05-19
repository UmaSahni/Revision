let url = "https://jsonplaceholder.typicode.com/todos"

fetch(url)
.then((res)=>res.json())
.then((data)=>displayTable(data))
.catch((err)=>console.log(err))

let tableBody = document.querySelector("tbody")

const displayTable = (arr) =>{
    arr.forEach((el)=>{
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    td1.innerText = el.id
    let td2 = document.createElement("td")
    td2.innerText = el.title
    let td3 = document.createElement("td")
    td3.innerText =  el.completed
    tr.append(td1, td2, td3)
       document.querySelector("tbody").append(tr)
    })
   

}