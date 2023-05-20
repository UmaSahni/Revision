let CartItems =  JSON.parse(localStorage.getItem("cart")) || []
console.log(CartItems)

let displayProduct = (arr) =>{
   document.querySelector("#container").innerHTML = ""
    arr.forEach((el)=>{
    let div = document.createElement("div")
    let img = document.createElement("img")
    img.setAttribute("src",el.image)
    let h2 = document.createElement("h2")
    h2.innerText = el.title
    let p = document.createElement("p")
    p.innerText = el.price

    div.append(img, h2, p)
    document.querySelector("#container").append(div)
    })
    
}

displayProduct(CartItems)



let outPut =  CartItems.reduce((acc, el)=>{
    return acc+ Number(el.price) 
},0)

document.getElementById("totalPrice").innerText =`Total Price = ${outPut}`

console.log(outPut)