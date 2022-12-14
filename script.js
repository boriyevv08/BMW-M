let cars = [
   {
      id:1,
      yili: 2022,
      name:"BMW M8",
      price: "130 000$",
      imgLink: "https://cdn.motor1.com/images/mgl/Q2r68/s1/4x3/2019-bmw-m8-coupe.webp",
      type: "Sedan"
   },
   {
      id:2,
      yili: 2022,
      name:"BMW M8 Competition",
      price: "170 000$",
      imgLink: "https://motor.ru/thumb/1500x0/filters:quality(75):no_upscale()/imgs/2022/01/07/20/5154800/45695260d9a7f3a8dbbfe96889178a64da16bdce.jpg",
      type: "Sport"


   },
   {
      id:3,
      yili: 2022,
      name:"BMW M8 Convertable",
      price: "160 000$",
      imgLink: "http://cdn.carbuzz.com/gallery-images/1600/593000/700/593779.jpg",
      type: "Cabriolet"


   },
   {
      id:4,
      yili: 2020,
      name:"BMW M5",
      price: "110 000$",
      imgLink: "https://cdn.motor1.com/images/mgl/Bz1jR/s1/4x3/2020-bmw-m5-edition-35-years.webp",
      type: "Sedan"


   },
   {
      id:5,
      yili: 2020,
      name:"BMW M5 Competiton",
      price: "145 000$",
      imgLink: "https://i.pinimg.com/originals/b2/57/fa/b257fa52cf56996b89da64080f08ff6d.jpg",
      type: "Sport"


   },
   // {
   //    id:6,
   //    yili: 2020,
   //    name:"BMW M5 Convertible",
   //    price: "125 000$",
   //    imgLink: "https://s1.cdn.autoevolution.com/images/news/bmw-m5-convertible-looks-like-an-abomination-has-a-soft-top-133994-7.jpg",
   //    type: "Cabriolet"


   // },

   
]
let cardWrapper = document.querySelector(".card-wrapper")

function render(){

   for( let i=0; i<cars.length; i++){
      let card = document.createElement("div")
let img = document.createElement("img")
let cardBody = document.createElement("div")
let h5 = document.createElement("h5")
let p = document.createElement("p")
let p2 = document.createElement("p")
let p3 = document.createElement("p")
let a = document.createElement("a")

card.setAttribute("class", "card")
img.setAttribute("class", "img card-img-top")
cardBody.setAttribute("class", "card-body")
h5.setAttribute("class", "card-title")
p.setAttribute("class", "card-text")
p2.setAttribute("class", "second card-text")
p3.setAttribute("class", "third card-text")
a.setAttribute("class", "btn btn-primary")

h5.textContent = cars[i].name
p.textContent = cars[i].price
p2.textContent = cars[i].yili
p3.textContent = cars[i].type
img.src = cars[i].imgLink
a.textContent = "More info"


cardBody.append(h5, p, p2, p3, a)
card.append(img, cardBody)
cardWrapper.append(card)



   }
}
render()

let select = document.querySelector("#select")

select.addEventListener("change", function(){
   let filteredCars = cars.filter(item => item.type.toLocaleLowerCase().includes(select.value.toLocaleLowerCase()))
   cardWrapper.innerHTML = null
   for( let i=0; i<filteredCars.length; i++){
      let card = document.createElement("div")
let img = document.createElement("img")
let cardBody = document.createElement("div")
let h5 = document.createElement("h5")
let p = document.createElement("p")
let p2 = document.createElement("p")
let p3 = document.createElement("p")
let a = document.createElement("a")

card.setAttribute("class", "card")
img.setAttribute("class", "img card-img-top")
cardBody.setAttribute("class", "card-body")
h5.setAttribute("class", "card-title")
p.setAttribute("class", "card-text")
p2.setAttribute("class", "second card-text")
p3.setAttribute("class", "third card-text")
a.setAttribute("class", "btn btn-primary")

h5.textContent = filteredCars[i].name
p.textContent = filteredCars[i].price
p2.textContent = filteredCars[i].yili
p3.textContent = filteredCars[i].type
img.src = filteredCars[i].imgLink
a.textContent = "More info"


cardBody.append(h5, p, p2, p3, a)
card.append(img, cardBody)
cardWrapper.append(card)}

   // console.log(filteredCars);
})


let select2 = document.querySelector(".inp2")

select2.addEventListener("change", function(){
   cardWrapper.innerHTML=null
   let filteredCars2 = cars.filter(item => item.yili== select2.value)
   for( let i=0; i<filteredCars2.length; i++){
      let card = document.createElement("div")
let img = document.createElement("img")
let cardBody = document.createElement("div")
let h5 = document.createElement("h5")
let p = document.createElement("p")
let p2 = document.createElement("p")
let p3 = document.createElement("p")
let a = document.createElement("a")

card.setAttribute("class", "card")
img.setAttribute("class", "img card-img-top")
cardBody.setAttribute("class", "card-body")
h5.setAttribute("class", "card-title")
p.setAttribute("class", "card-text")
p2.setAttribute("class", "second card-text")
p3.setAttribute("class", "third card-text")
a.setAttribute("class", "btn btn-primary")

h5.textContent = filteredCars2[i].name
p.textContent = filteredCars2[i].price
p2.textContent = filteredCars2[i].yili
p3.textContent =filteredCars2[i].type
img.src = filteredCars2[i].imgLink
a.textContent = "More info"


cardBody.append(h5, p, p2, p3, a)
card.append(img, cardBody)
cardWrapper.append(card)}

   // console.log(filteredCars);
})


let select3 = document.querySelector(".inp3")

select3.addEventListener("change", function(){
   cardWrapper.innerHTML=null
   let filteredCars3 = cars.filter(item => item.price== select3.value)
   for( let i=0; i<filteredCars3.length; i++){
      let card = document.createElement("div")
let img = document.createElement("img")
let cardBody = document.createElement("div")
let h5 = document.createElement("h5")
let p = document.createElement("p")
let p2 = document.createElement("p")
let p3 = document.createElement("p")
let a = document.createElement("a")

card.setAttribute("class", "card")
img.setAttribute("class", "img card-img-top")
cardBody.setAttribute("class", "card-body")
h5.setAttribute("class", "card-title")
p.setAttribute("class", "card-text")
p2.setAttribute("class", "second card-text")
p3.setAttribute("class", "third card-text")
a.setAttribute("class", "btn btn-primary")

h5.textContent = filteredCars3[i].name
p.textContent = filteredCars3[i].price
p2.textContent = filteredCars3[i].yili
p3.textContent = filteredCars3[i].type
img.src = filteredCars3[i].imgLink
a.textContent = "More info"


cardBody.append(h5, p, p2, p3, a)
card.append(img, cardBody)
cardWrapper.append(card)}

   // console.log(filteredCars);
})









