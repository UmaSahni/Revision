// const data = [
//   {
//     id: "52768",
//     name: "Apple Frangipan Tart",
//     recipeCategoryId: "3",
//     areaId: 2,
//     instructions: "Preheat the oven to 200C/180C Fan/Gas 6.\r\nPut the biscuits in a large re-sealable freezer bag and bash with a rolling pin into fine crumbs. Melt the butter in a small pan, then add the biscuit crumbs and stir until coated with butter. Tip into the tart tin and, using the back of a spoon, press over the base and sides of the tin to give an even layer. Chill in the fridge while you make the filling.\r\nCream together the butter and sugar until light and fluffy. You can do this in a food processor if you have one. Process for 2-3 minutes. Mix in the eggs, then add the ground almonds and almond extract and blend until well combined.\r\nPeel the apples, and cut thin slices of apple. Do this at the last minute to prevent the apple going brown. Arrange the slices over the biscuit base. Spread the frangipane filling evenly on top. Level the surface and sprinkle with the flaked almonds.\r\nBake for 20-25 minutes until golden-brown and set.\r\nRemove from the oven and leave to cool for 15 minutes. Remove the sides of the tin. An easy way to do this is to stand the tin on a can of beans and push down gently on the edges of the tin.\r\nTransfer the tart, with the tin base attached, to a serving plate. Serve warm with cream, crème fraiche or ice cream",
//     image: "/images/meals/wxywrq1468235067.jpg",
//     tags: [
//       1,
//       2,
//       3
//     ],
//     youtube: "https://www.youtube.com/watch?v=rp8Slv4INLk",
//     ingredients: [
//       {
//         ingredientId: "112",
//         ingredientMeasure: "175g/6oz"
//       },
//       {
//         ingredientId: "41",
//         ingredientMeasure: "75g/3oz"
//       },
//       {
//         ingredientId: "33",
//         ingredientMeasure: "200g/7oz"
//       },
//       {
//         ingredientId: "52",
//         ingredientMeasure: "75g/3oz"
//       },
//       {
//         ingredientId: "141",
//         ingredientMeasure: "2"
//       },
//       {
//         ingredientId: "169",
//         ingredientMeasure: "75g/3oz"
//       },
//       {
//         ingredientId: "550",
//         ingredientMeasure: "1 tsp"
//       },
//       {
//         ingredientId: "135",
//         ingredientMeasure: "50g/1¾oz"
//       }
//     ],
//     recipeSource: null,
//     imageSource: null,
//     price: "256.00",
//     stock: 1,
//     discount: 7,
//     createdAt: 1667963546805

import config from "./config";
console.log(config)
//   } ]

  let app = document.getElementById("app");
  let main  = document.getElementById("main");
  
  // let baseURL = `https://real-crab-pleat.cyclic.app/`;
  // fetch(`https://real-crab-pleat.cyclic.app/recipes/`)
  // .then((res)=>res.json())
  // .then((data)=>renderCardList(data))

;(async()=>{
  try {
    let res = await fetch(`${config.baseURL}recipes/`)
    let data = await res.json()
    renderCardList(data)
  } catch (error) {
    console.log(error)
  }
  
})()

// it should take img, title,..... return a card
  function getAsCard (imgsrc, title,description, link){
    return `
        <div class="card">
                <div class="card_img">
                    <img src= https://real-crab-pleat.cyclic.app/${imgsrc} alt="food" />
                </div>
                <div class="card_body">
                    <h3 class="card_item card_title ">${title}</h3>
                    <div class="card_item card_description ">
                     ${description.substring(0, 200)}...
                    </div>
                    <a href=${link} class="card_item  card_link">Read me</a>
                </div>
        </div>
    `
  }

  // let imgsrc = data[0].image
  // let title = data[0].name
  // let description = data[0].instructions
  // let link = data [0].youtube


  // main.innerHTML = getAsCard(imgsrc, title, description, link)

const renderCardList = (data) => {
   main.innerHTML = `
     <div class="card-list" >
     ${
      data.map((item) =>{
        return getAsCard(item.image, item.name, item.instructions, item.youtube)
      }).join("")
     }
     </div>
  `
}

 
  
  