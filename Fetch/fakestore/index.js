let bag = []
let Addcart = JSON.parse(localStorage.getItem ("cart")) || []
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {displayTable(data)
bag=data
})
  .catch((err) => console.log(err));

const displayTable = (data) => {
  console.log(data)
document.getElementById("container").innerHTML = ""
  data.forEach((el) => {
    // <img src="" />
    // <h2>Title</h2>
    // <p>Price</p>
    // <p>Rating</p>
    let div = document.createElement("div")
    
    let image = document.createElement("img");
    image.setAttribute("src", el.image)

    let title = document.createElement("h2");
    title.innerText = el.title
    let price = document.createElement("p");
    price.innerText = el.price

    let rating = document.createElement("p");
    rating.innerText = el.rating.rate

    let cart =  document.createElement("button")
    cart.innerText = "Add to cart"

    cart.addEventListener("click", ()=>{
      Addcart.push(el)
      localStorage.setItem("cart", JSON.stringify(Addcart))
    })

    div.append(image, title, price, rating, cart)
    document.getElementById("container").append(div)
  });
};

// ! Search funtionality
document.querySelector("input").addEventListener("input", ()=>{
 let q =   document.querySelector("input").value
 let newData = bag.filter((el)=>{
    return el.title.toLowerCase().includes(q.toLowerCase())
 })
 displayTable(newData)
 console.log(newData)
})

// ! Select tag - sort

document.getElementById("select").addEventListener("change", ()=>{
  let selectTag = document.getElementById("select").value
  selectTag == "low"  ?  bag.sort((a, b)=> a.price-b.price) : bag.sort((a, b)=> b.price-a.price)
  displayTable(bag)
 
  console.log(selectTag)
})


// ! Filter Select Tag - The Api is diffrent here But logic is this

document.getElementById("filterSelect").addEventListener("change", ()=>{
  let FilterSelect =  document.getElementById("filterSelect").value
 let filterData =  bag.filter((el)=>el.region == FilterSelect)
  displayTable(filterData)
})