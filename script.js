'use strict';

// all selection
let addUserEle = document.querySelector('.addUser');
let doubleMoneyEle = document.querySelector('.doubleMoney');
let showmilEle = document.querySelector('.showmil');
let sortByRichestEle = document.querySelector('.sortByRichest');
let nameEle = document.querySelector('.name');
let wealthEle = document.querySelector('.wealth');
let allCon = document.querySelector(".allContent");
let date = [];

// Fetch date from API
 async function rendomUserGenarator(){
  const result = await fetch("https://randomuser.me/api/");
  const Alldate = await result.json();
  
  let user = Alldate.results[0]; 
  const newuser = {
    name:  `${user.name.title} ${user.name.first} ${user.name.last} `,
    money:  Math.floor(Math.random()*100000000),
    email:  `${user.email}`,
    phone:  `${user.phone}`,
  }
  addDate(newuser);
}

// function doubleMoneyEleFunc(){
//   date = date.map(userELe =>{
//     return {...userELe, money: userELe.money*2};
    
//   });
//   updatDate();
// }

// show the mil
// function showTheMi(){
//   date = date.filter ((user) => {
//     return user.money > 1000000
     
//   });
//   updatDate();
//   console.log("hello");
// }

// sortrich
function sortrich(){
  date.sort((a,b) => b.money - a.money);
}

const addDate = function(obj){
   date.push(obj)
   updatDate();
}
function updatDate(providedDate = date){
    let element = document.createElement("div");
    element.classList.add("rendomInfo");
  
  providedDate.forEach((item) => {
   element.innerHTML = `<strong>${item.name}</strong> <p>$${item.money}</p> <p>${item.email}</p> <p>${item.phone}</p>`;
    allCon.appendChild(element);
    
  });
}




addUserEle.addEventListener("click",rendomUserGenarator);
// doubleMoneyEle.addEventListener("click",doubleMoneyEleFunc);
// showmilEle.addEventListener("click",showTheMi);
// sortByRichestEle.addEventListener("click",sortrich);

// function doubleMoneyEleFunc(){
//   for(let j =0; j<=date.length;j++){
//      let varr = date[j]['money']*2;
//      console.log(varr);
//      updatDate();
//   }
// }
// date = date.map(userEle =>{

// })

