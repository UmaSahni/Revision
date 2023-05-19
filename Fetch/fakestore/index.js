let bag = []
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

    div.append(image, title, price, rating)
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