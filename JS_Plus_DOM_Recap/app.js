// -------------------------- FIRST ------------------------------ //
// ID
// const myFirstElement = document.getElementById("userName");
// console.log(myFirstElement);

// CLASS
// const elementsByClass = document.getElementsByClassName("userTag");
// console.log(elementsByClass);

// TAG
// const elementsByTag = document.getElementsByTagName("p");
// console.log(elementsByTag);

// querySelector ID
// const elementByQuerySelector = document.querySelector("#userName");
// console.log(elementByQuerySelector);

// querySelector CLASS
// const elementByQuerySelector = document.querySelector(".userTag");
// console.log(elementByQuerySelector);

// querySelectorAll CLASS
// const elementsByQuerySelectorAll = document.querySelectorAll(".userTag");
// console.log(elementsByQuerySelectorAll);

// querySelectorAll TAG
// const elementsByQuerySelectorAll = document.querySelectorAll("p");
// console.log(elementsByQuerySelectorAll);

// const elements1 = document.getElementsByClassName("userTag");
// const elements2 = document.querySelectorAll(".userTag");

// console.log(elements1);
// console.log(elements2);

// console.log(elements1[1]);
// console.log(elements2[1]);

// console.log(elements1[1].innerHTML);
// console.log(elements2[1].innerHTML);

// console.log(elements1[1].innerText);
// console.log(elements2[1].innerText);


// ---------------------------- SECOND ----------------------------- //
// const langList = document.querySelector("#languages");
// console.log(langList);

// const langsGETELEM = document.getElementsByClassName("lang");
// const langsQUERYSE = document.querySelectorAll(".lang");
// console.log(langsGETELEM);
// console.log(langsQUERYSE);

// langList.innerHTML += `<li class="lang">JavaScript</li>`;

// console.log(langsGETELEM);
// console.log(langsQUERYSE);


// ---------------------------- THIRD ----------------------------- //
// const element = document.querySelector("#myElement");
// console.log(element);

// element.innerText = "Hello.....";
// element.innerHTML = "hello world!!!"

// element.innerHTML = "<label>Test</label>";
// console.log(element);

// element.innerText = "<label>Test</label>";
// console.log(element);

// ---------------------------- FOURTH ----------------------------- //
// const car_list = [
//     { brandName: "Mercedes"},
//     { brandName: "BMW"},
//     { brandName: "Toyota"},
//     { brandName: "Opel"},
// ];

// const listElement = document.querySelector("#cars");
// // console.log(listElement);

// // for (let index = 0; index < car_list.length; index++) {
// //     listElement.innerHTML += `<li>${car_list[index].brandName}</li>`
// // }

// car_list.forEach( car => {
//     console.log(car)
//     listElement.innerHTML += `<li>${car.brandName}</li>`
//     // listElement.innerHTML += '<li>' + car.brandName + '</li>';
// });


// ---------------------------- FOURTH ----------------------------- //
// const car_list = [
//     { id:0, brandName: "Mercedes"},
//     { id:1, brandName: "BMW"},
//     { id:2, brandName: "Toyota"},
//     { id:3, brandName: "Opel"},
// ];

// const comboBox = document.createElement("select");

// car_list.forEach( clarusway => {
//     comboBox.innerHTML += `<option value="${clarusway.id}">${clarusway.brandName}</option>`
// });

// document.body.append(comboBox);


// ---------------------------- FIFTH ----------------------------- //
// setAttribute - getAttribute methods

// const element = document.querySelector("#link");
// // console.log(element);

// const attr = element.getAttribute("href");
// console.log(attr);

// console.log(element.href); // this is also valid but not recomanded.

// element.setAttribute("href", "http://www.clarusway.com");
// element.innerText = "Go to ClarusWay"


// ---------------------------- sixth ----------------------------- //
// const elementsLI = document.querySelectorAll("li");
// // console.log(elementsLI);

// // elementsLI.forEach( item => console.log(item));
// // elementsLI.forEach( word => console.log(word.innerHTML));

// elementsLI.forEach( word => {
//     console.log(word.innerHTML);
//     if (word.innerHTML.includes("error")) {
//         word.setAttribute("class", "error");
//     }

//     if (word.innerHTML.includes("success")) {
//         word.setAttribute("class", "success");
//     }

// });


// ---------------------------- seventh ----------------------------- //
// const myElement = document.querySelector(".hello");
// console.log(myElement);

// myElement.style.color = "red";
// myElement.style.fontWeight = "bold";
// myElement.style.textDecoration = "line-through";



// ---------------------------- 8th ----------------------------- //
// const myBanner = document.getElementById("myBanner");
// const myBanner = document.querySelector("#myBanner");

// console.log(myBanner.classList);
// // console.log(typeof myBanner.classList);

// myBanner.classList.add("active");

// console.log(myBanner.classList);



// ---------------------------- 9th ----------------------------- //
// const element = document.querySelector("#today");
// // console.log(element);


// const elementP = document.createElement("p");
// elementP.innerText = "Wednesday";
// // console.log(elementP);

// element.appendChild(elementP);


// ---------------------------- 10th ----------------------------- //
const element = document.querySelector("#btn");
// console.log(element);

element.addEventListener("click", clickFunction);

element.addEventListener("mouseover", function() {console.log("mouseover...");});

element.addEventListener("mouseenter", () => console.log("arrow function"));

function clickFunction() {
    console.log("click...");
    document.querySelector("#para").innerHTML = "change the text..."
}

document.querySelector("#para").addEventListener("click", function() {
    element.removeEventListener("click", clickFunction);
});



// ---------------------------- 11th ----------------------------- //
// const elementsLI = document.querySelectorAll("li");
// console.log(elementsLI);

// elementsLI.forEach( listItem => {
//     listItem.addEventListener("click", () => { console.log("clicked!!!")});

//     //başka bir yöntem.
//     listItem.addEventListener("click", clickFunct);    
// });

// function clickFunct(e) {
//     console.log(e.target.innerText);
// }




// ======================= example X ================================= //
