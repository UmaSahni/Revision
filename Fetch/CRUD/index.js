// API -> https://motionless-red-meerkat.cyclic.app/
let URL = "https://motionless-red-meerkat.cyclic.app/todo";

let todoDataArray = []

let getTodo = () =>{
    fetch(URL)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        displayOnScreen(data)
    })
    .catch((err)=>console.log(err))
}

getTodo()

const PostTodo = (data) => {
  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  .then((res)=> getTodo())
  .catch((err)=>getTodo());
};

document.getElementById("addButton").addEventListener("click", () => {
  let InputBoxValue = document.getElementById("addInput").value;
  let obj = {
    name: InputBoxValue,
    status: false,
  };
  PostTodo(obj);
  document.getElementById("addInput").value = "";
});

const deleteTodo = (id) =>{
    fetch(`https://motionless-red-meerkat.cyclic.app/todo/${id}`, {
        method:"DELETE",
        headers: {
            "Content-Type":"application/json"
        }
    })
    .then((res)=> getTodo() )
    .catch((err)=>getTodo())
}

const updateStatus = (id, status)=>{
    
      fetch(`https://motionless-red-meerkat.cyclic.app/todo/${id}`, {
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({id, status})
      })
      .then(()=>getTodo())
      .catch(()=>getTodo())
}

const displayOnScreen = (data) =>{
document.querySelector("tbody").innerHTML = ""
    data.forEach((el)=>{
        let tBody = document.querySelector("tbody")

        let tableRow = document.createElement("tr")
        let taskName = document.createElement("td")
        taskName.innerText = el.name

        let status = document.createElement("td")
        status.innerText = el.status
        status.addEventListener("click", ()=>{
            console.log("click")
            let newStatus = el.status
            if(newStatus){
                newStatus = false
            }
            else{
                newStatus = true
            }
            console.log(newStatus)
           updateStatus(el.id, newStatus, data)
        })


        let update = document.createElement("td")
        update.innerText = "update"

        let deleteTask = document.createElement("td")
        deleteTask.innerText = "delete"
        deleteTask.addEventListener("click", ()=>{
            deleteTodo(el.id)
        })

        tableRow.append(taskName, status, update, deleteTask)
        tBody.append(tableRow)
    })

}




