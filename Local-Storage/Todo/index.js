document.querySelector("form").addEventListener("submit", myTodo)
let todoArr =  JSON.parse(localStorage.getItem("todo")) || []
displayTable(todoArr)
let favArr = JSON.parse(localStorage.getItem("fav")) || []
function myTodo(event){
    event.preventDefault();
    let taskName = document.querySelector("#task").value;
    let taskpriority = document.querySelector("#priority").value;
    let taskObj = {
        taskName, taskpriority
    }
    todoArr.push(taskObj)
    localStorage.setItem("todo", JSON.stringify(todoArr))
    displayTable(todoArr)
}

function displayTable(todoArr) {
    document.querySelector("tbody").innerHTML = ""
    todoArr.forEach((el)=>{
        console.log(el)
        let row = document.createElement("tr")
        let td1 = document.createElement("td")
        td1.innerText = el.taskName
        let td2 = document.createElement("td")
        td2.innerText = el.taskpriority

        if(el.taskpriority==="High"){
            td2.style.backgroundColor = "red"
        }
        else{
            td2.style.backgroundColor = "green"
        }
        let td3 = document.createElement("td")
        td3.innerText = "add as fav"
        td3.addEventListener("click",()=>{
            favArr.push(el)
            localStorage.setItem('fav', JSON.stringify(favArr) )
            console.log(favArr)
        } )
        row.append(td1, td2, td3)
         document.querySelector("tbody").append(row)
    })
}