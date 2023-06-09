document.querySelector("form").addEventListener("submit", myTodo)
let todoArr = JSON.parse(localStorage.getItem("todo")) || []
displayTable(todoArr)
function myTodo (event){
    event.preventDefault()
    let taskName = document.querySelector("#task").value;
    let taskpriority = document.querySelector("#priority").value;
    let taskObj = {
        taskName, taskpriority
    }
    todoArr.push(taskObj)
    localStorage.setItem("todo", JSON.stringify(todoArr))
    displayTable(todoArr)
}

function displayTable (todoArr){
    document.querySelector("tbody").innerHTML = ""
    todoArr.forEach((el)=>{
        let row  =  document.createElement("tr")
        let td1 = document.createElement("td")
        td1.innerText = el.taskName
        let td2 = document.createElement("td")
        td2.innerText = el.taskpriority
        let td3 = document.createElement("td")
        td3.innerText = "Add as fav"
        row.append(td1, td2, td3)
        document.querySelector("tbody").append(row)
    })
}