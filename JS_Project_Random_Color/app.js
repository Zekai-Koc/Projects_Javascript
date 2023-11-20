// ----------------------------------- 1 ---------------------------------------------------- //
// let's create a color array and select our colors randomly from this array.

// const colorArray = ["red", "blue", "gray", "green", "purple"];

// const buttonRandomColorLIST = document.querySelector("#btnRandomColorLIST");

// buttonRandomColorLIST.addEventListener("click", changeColor);
// // buttonRandomColorLIST.addEventListener("click", () => changeColor());
// // buttonRandomColorLIST.addEventListener("click", function() {changeColor()});


// function changeColor() {
//     const randomIndex = Math.floor(Math.random() * colorArray.length);
//     // console.log(randomIndex);
//     // console.log(colorArray[randomIndex]);

//     document.querySelector("body").style.backgroundColor = colorArray[randomIndex];
// }


// ------------------------------------ 1.a --------------------------------- //
// now, let's write color names on our color label:

// const colorArray = ["red", "blue", "gray", "green", "purple"];

// const buttonRandomColorLIST = document.querySelector("#btnRandomColorLIST");

// buttonRandomColorLIST.addEventListener("click", changeColor);
// // buttonRandomColorLIST.addEventListener("click", () => changeColor());
// // buttonRandomColorLIST.addEventListener("click", function() {changeColor()});


// function changeColor() {
//     const randomIndex = Math.floor(Math.random() * colorArray.length);
//     // console.log(randomIndex);
//     // console.log(colorArray[randomIndex]);

//     document.querySelector("body").style.backgroundColor = colorArray[randomIndex];
/* 1.a */    // document.querySelector("#colorName").innerText = colorArray[randomIndex];
/* 1.a */  // document.querySelector("#colorName").textContent = colorArray[randomIndex];
/* 1.a */  //document.querySelector("#colorName").innerHTML = colorArray[randomIndex];
// }


// ------------------------------------- 2 -------------------------------------------------- //
// now let's select random colors by using RGB format:

// const colorArray = ["red", "blue", "gray", "green", "purple"];

// const buttonRandomColorLIST = document.querySelector("#btnRandomColorLIST");
/* 2 */// const buttonRandomColorRGB = document.querySelector("#btnRandomColorRGB");

// buttonRandomColorLIST.addEventListener("click", changeColor);
// // buttonRandomColorLIST.addEventListener("click", () => changeColor());
// // buttonRandomColorLIST.addEventListener("click", function() {changeColor()});

/* 2 */// buttonRandomColorRGB.addEventListener("click", changeColorRGB);


// function changeColor() {
//     const randomIndex = Math.floor(Math.random() * colorArray.length);
//     // console.log(randomIndex);
//     // console.log(colorArray[randomIndex]);

//     document.querySelector("body").style.backgroundColor = colorArray[randomIndex];
//     // document.querySelector("#colorName").innerText = colorArray[randomIndex];
//     // document.querySelector("#colorName").textContent = colorArray[randomIndex];
//     document.querySelector("#colorName").innerHTML = colorArray[randomIndex];
// }

/* 2 */// function changeColorRGB() {
/* 2 *///     const colorR = Math.floor(Math.random() * 255);
/* 2 *///     const colorG = Math.floor(Math.random() * 255);
/* 2 *///     const colorB = Math.floor(Math.random() * 255);
/* 2 */ 
/* 2 *///     document.querySelector("body").style.backgroundColor = `rgb(${colorR}, ${colorG}, $/* 2 */{colorB})`;
/* 2 *///     document.querySelector("#colorName").innerHTML = `rgb(${colorR}, ${colorG}, ${colorB})`;
/* 2 *///  }



// // // ------------------------------------------ 3 --------------------------------------------- //
// // now, lets improve our gui and code by adding an input field for getting input from the user and a button for setting the users color. first adding the html elements.
// const colorArray = ["red", "blue", "gray", "green", "purple"];

// const buttonRandomColorLIST = document.querySelector("#btnRandomColorLIST");
// const buttonRandomColorRGB = document.querySelector("#btnRandomColorRGB");
// /* 3 */const buttonSetColor = document.querySelector("#btnSetColor");
// /* 3 */const inputColor = document.querySelector("#inputColor");

// buttonRandomColorLIST.addEventListener("click", changeColor);
// // buttonRandomColorLIST.addEventListener("click", () => changeColor());
// // buttonRandomColorLIST.addEventListener("click", function() {changeColor()});

// buttonRandomColorRGB.addEventListener("click", changeColorRGB);
// /* 3 */buttonSetColor.addEventListener("click", setNewColor);


// function changeColor() {
//     const randomIndex = Math.floor(Math.random() * colorArray.length);
//     // console.log(randomIndex);
//     // console.log(colorArray[randomIndex]);

//     document.querySelector("body").style.backgroundColor = colorArray[randomIndex];
//     // document.querySelector("#colorName").innerText = colorArray[randomIndex];
//     // document.querySelector("#colorName").textContent = colorArray[randomIndex];
//     document.querySelector("#colorName").innerHTML = colorArray[randomIndex];

// }

// function changeColorRGB() {
//     const colorR = Math.floor(Math.random() * 255);
//     const colorG = Math.floor(Math.random() * 255);
//     const colorB = Math.floor(Math.random() * 255);
 
//     document.querySelector("body").style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB})`;
//     document.querySelector("#colorName").innerHTML = `rgb(${colorR}, ${colorG}, ${colorB})`;
//  }

//  /* 3 */function setNewColor() {
//  /* 3 */   const userInput = inputColor.value;
// /* 3 */
//  /* 3 */   if (!isColor(userInput)) {
//  /* 3 */       alert("not a valid color!");
//  /* 3 */       inputColor.focus();
//  /* 3 */       return;
//  /* 3 */   }
// /* 3 */
//  /* 3 */   // if (colorArray.indexOf(userInput) == -1) colorArray.push(userInput);
// /* 3 */
//  /* 3 */   if (!colorArray.includes(userInput)) colorArray.push(userInput);
//  /* 3 */       
//  /* 3 */   console.log(colorArray);
// /* 3 */
//  /* 3 */   document.querySelector("body").style.backgroundColor = userInput;
//  /* 3 */   document.querySelector("#colorName").innerHTML = userInput;
//  /* 3 */   inputColor.value = "";
//  /* 3 */   inputColor.focus();
//  /* 3 */}
// /* 3 */
//  /* 3 */function isColor(strColor){
//  /* 3 */   var s = new Option().style;
//  /* 3 */   s.color = strColor;
//  /* 3 */   return s.color == strColor;
//  /* 3 */ }
// /* 3 */


// ------------------------------------------ 4 --------------------------------------------- //
// now we will use an object instead of a flat array. here is our object.

const colorArray = [
    { name: "red", motto: "Rose Red" },             /* 4 */     
    { name: "blue", motto: "Ocean Blue" },          /* 4 */     
    { name: "gray", motto: "Smoke Gray" },          /* 4 */     
    { name: "green", motto: "Grass Green" },        /* 4 */         
    { name: "purple", motto: "Deep Purple" }        /* 4 */         
];

const buttonRandomColorLIST = document.querySelector("#btnRandomColorLIST");
const buttonRandomColorRGB = document.querySelector("#btnRandomColorRGB");
const buttonSetColor = document.querySelector("#btnSetColor");
const inputColor = document.querySelector("#inputColor");

buttonRandomColorLIST.addEventListener("click", changeColor);
buttonRandomColorLIST.addEventListener("click", () => changeColor());
buttonRandomColorLIST.addEventListener("click", function() {changeColor()});

buttonRandomColorRGB.addEventListener("click", changeColorRGB);
buttonSetColor.addEventListener("click", setNewColor);


function changeColor() {
    const randomIndex = Math.floor(Math.random() * colorArray.length);
    console.log(colorArray[randomIndex]);
    console.log(colorArray[randomIndex].name);

    document.querySelector("body").style.backgroundColor = colorArray[randomIndex].name;
    // document.querySelector("#colorName").innerText = colorArray[randomIndex];
    // document.querySelector("#colorName").textContent = colorArray[randomIndex];
    document.querySelector("#colorName").innerHTML = colorArray[randomIndex].name;    /* 4 */
    document.querySelector("#colorDesc").innerHTML = colorArray[randomIndex].motto;   /* 4 */

}

function changeColorRGB() {
    const colorR = Math.floor(Math.random() * 255);
    const colorG = Math.floor(Math.random() * 255);
    const colorB = Math.floor(Math.random() * 255);
 
    document.querySelector("body").style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB})`;
    document.querySelector("#colorName").innerHTML = `rgb(${colorR}, ${colorG}, ${colorB})`;
    document.querySelector("#colorDesc").innerHTML = "RGB COLORS";   /* 4 */
 }

 function setNewColor() {
    const userInput = inputColor.value;

    const userInputSplitted = userInput.split(":");   /* 4 */
    console.log(userInputSplitted);   /* 4 */
    if (!isColor(userInputSplitted[0])) { /* 4 */
        alert(userInputSplitted[0] + " is not a valid color!");   /* 4 */
        inputColor.focus();   /* 4 */
        return;   /* 4 */
    }

    if (userInputSplitted.length < 2 || userInputSplitted[1].trim() == "") {  /* 4 */
        alert("invalid motto!");  /* 4 */
        return;   /* 4 */
    }
    const colorObj = {    /* 4 */
        name: userInputSplitted[0],   /* 4 */
        motto: userInputSplitted[1]   /* 4 */
    }
    console.log(colorObj);    /* 4 */
    if (colorArray.findIndex(color => color.name == colorObj.name) != -1 ) return;    /* 4 */

    colorArray.push(colorObj);    /* 4 */

    console.log(colorArray);

    document.querySelector("body").style.backgroundColor = colorObj.name;
    document.querySelector("#colorName").innerHTML = colorObj.name;
    document.querySelector("#colorDesc").innerHTML = colorObj.motto;  /* 4 */

    inputColor.value = "";
    inputColor.focus();
 }

 function isColor(strColor){
    var s = new Option().style;
    s.color = strColor;
    return s.color == strColor;
  }

  // yanlış renk girildikten sonra uyarı veriyor ve yanlış girdi ekranda kalmaya devam ediyor. kullanıcı alttaki tuşlara bastığında bu alanı temizleyelim.