// Syncrous Code example 1

// console.clear();

// console.log("starting to execute!");

// for (let index = 0; index < 2000; index++) {
//     console.log("executing...");
// }

// console.log("this line has to wait until the previous lines finish their execution.");

// for (let index = 0; index < 10000; index++) {
//     console.log("another code block.");
// }

// console.log("finished.")


// Syncrous Code example 2
// let's create a dummy load image function.


// function loadImage(imageName) {
//     console.log("-------------------------------------------");
//     console.log("starting to load image file: ", imageName);

//     for (let index = 0; index < 7000; index++) {
//         console.log("loading the image file...");        
//     }

//     console.log("load completed.", imageName, " has been loaded.");
//     console.log("-------------------------------------------");
// }


// console.clear();

// console.log("starting to execute.");

// loadImage("myImage.jpg");

// console.log("finished execution!")



// Syncrous Code example 3
// multiple function calls...


// function loadImage(imageName, imageSize) {
//     console.log("-------------------------------------------");
//     console.log("starting to load image file: ", imageName);

//     for (let index = 0; index < imageSize; index++) {
//         console.log("loading the image file...");        
//     }

//     console.log("load completed.", imageName, " has been loaded.");
//     console.log("-------------------------------------------");
// }


// console.clear();


// console.log("starting to execute.");

// loadImage("myImage1.jpg", 2000);  // cut and paste this line to the beginning of the app.

// loadImage("myImage2.jpg", 7000);

// console.log("finished execution!")



// Syncrous Code example 4
// blocking_alert.html sayfasını göster...
// html dosyasının sonundaki açıklamaları anlat.



// yansılardan devam.
// Async Callbacks yansısı.



// ASyncrous Code example 1

// // console.clear();

// console.log("starting to execute!");

// for (let index = 0; index < 500; index++) {
//     console.log("executing...");
// }

// // setTimeout fonksiyonunu sonradan ekleyelim. önce gösterip bu senkron hali deyip...
// setTimeout(() => console.log("after 5 secs..."), 5000);

// console.log("this line has to wait until the previous lines finish their execution.");

// for (let index = 0; index < 2000; index++) {
//     console.log("another code block.");
// }

// console.log("finished.");




// ASyncrous Code example 2

// // console.clear();

// setTimeout(() => console.log("after 10 secs..."), 10000);

// console.log("starting to execute!");

// for (let index = 0; index < 1000; index++) {
//     console.log("executing...");
// }

// setTimeout(() => console.log("after 5 secs..."), 5000);

// console.log("this line has to wait until the previous lines finish their execution.");

// for (let index = 0; index < 3000; index++) {
//     console.log("another code block.");
// }

// console.log("finished.");




// ASyncrous Code example 3
// let's change our function to asyncron mode.

// function loadImage(imageName) {
//     console.log("-------------------------------------------");
//     console.log("starting to load image file: ", imageName);

//     for (let index = 0; index < 4000; index++) {
//         console.log("loading the image file...");        
//     }

//     console.log("load completed.", imageName, " has been loaded.");
//     console.log("-------------------------------------------");
// }

// console.log("starting to execute.");

// setTimeout(function () {loadImage("myImage.jpg")}, 5000);

// console.log("finished execution!");



// ASyncrous Code example 4
// multiple function calls

// function loadImage(imageName) {
//     console.log("-------------------------------------------");
//     console.log("starting to load image file: ", imageName);

//     for (let index = 0; index < 4000; index++) {
//         console.log("loading the image file...");        
//     }

//     console.log("load completed.", imageName, " has been loaded.");
//     console.log("-------------------------------------------");
// }


// setTimeout(function () {loadImage("second ASYNC image.jpg")}, 5000);

// console.log("starting to execute.");

// setTimeout(function () {loadImage("first ASYNC image.jpg")}, 7000);

// loadImage("SYNC image.jpg");

// console.log("finished execution!");


// BU ÖRNEKTE SÜREYİ SIFIR OLARAK DA GÖSTER. SONRA DA AKIŞ ŞEMASINDAN BAHSEDEBİLİRSİN.






// // ASyncrous Code example YENİ:
// // html sayfasındaki p'yi aç.

// const myPara = document.querySelector("p");
// console.log(myPara.innerHTML);

// myNewPara = "!!!";

// function readParaFromDB() {
//     myNewPara = "this paragraph comes from our db...";
//     console.log(myNewPara);
// }
// console.log("myNewPara: ", myNewPara);


// setTimeout(readParaFromDB, 0);

// myPara.innerHTML = myNewPara;


// setTimeout(() => {console.log("after 2 secs, myPara: ", myPara.innerHTML)}, 2000);


// setTimeout(function () {
//     console.log("1111111111111");
//     console.log("myNewPara: ", myNewPara);
//     myPara.innerHTML = myNewPara;
// }, 3000);



// burada bizim servis yönetim projesini anlat.



// ASyncrous Code example 5
// here we will try to simulate a real time environment and face a problem:

// let fileID = 1111;

// function readIDFromDB() {

//     fileID++;

//     console.log("**********************************************************************");
//     console.log("readDB starting...");

//     for (let index = 0; index < 1000; index++) {
//         console.log("reading image file name from DB...");        
//     }

//     console.log("readDB ending...");
//     console.log("**********************************************************************");
// }

// function loadImage(imageName, imageID) {
//     console.log("-------------------------------------------");
//     console.log("starting to load image file: ", imageName, " imageID: ", imageID);

//     for (let index = 0; index < imageID; index++) {
//         console.log("loading the image file...");        
//     }

//     console.log("load completed.", imageName, " has been loaded.");
//     console.log("-------------------------------------------");
// }

// console.log("execution begins.");

// // normally, reading from a remote db is an async proccess.
// // here we are trying to simulate.

// console.log("file ID first init: ", fileID);

// fileID1 = setTimeout(readIDFromDB, 3000); 

// console.log("file ID just after let fileID1: ", fileID);

// console.log("execution continues...");

// setTimeout(function () {loadImage("queue1.jpg", fileID)}, 1000);

// console.log("file ID after load image: ", fileID);

// console.log("execution ends!")

// console.log("file ID at the end: ", fileID);






// // how can we solve this problem?

// function readIDFromDB() {

//     let fileSize = 3000;

//     console.log("**********************************************************************");
//     console.log("readDB starting...");

//     for (let index = 0; index < 1000; index++) {
//         console.log("reading image file name from DB...");        
//     }

//     console.log("readDB ending...");
//     console.log("**********************************************************************");

//     return fileSize;
// }

// function loadImage(imageName, imageSize) {
//     console.log("-------------------------------------------");
//     console.log("starting to load image file: ", imageName, " imageSize: ", imageSize);

//     for (let index = 0; index < imageSize; index++) {
//         console.log("loading the image file...");        
//     }

//     console.log("load completed.", imageName, " has been loaded.");
//     console.log("-------------------------------------------");
// }


// setTimeout(() => {
//     let fileSize1 = readIDFromDB();
//     console.log("file size 2: ", fileSize1);

//     setTimeout(function () {
//         loadImage("queue1.jpg", fileSize1)
//     }, 1000);

//     console.log("file size 3: ", fileSize1);
// }, 3000);


// setTimeout(() => {
//     let fileSize = 3000;
//     setTimeout(() => {
//         for (let index = 0; index < fileSize; index++) {
//             console.log("loading the image file...");        
//         }
//     }, 1000);
// }, 10000);



//////////////////////////////////////////////////////////////////
// console.log('Async Await');
// console.log('-----------');

/* function helloWorld(caller) {
    return new Promise((resolve) => {
        const time = Math.floor(Math.random() * 2000);
        return setTimeout(() => {
            resolve(`${time} Hello! from #${caller}`);
        }, time);
    });
}

const hello = async (idx) => {
    // async function
    const msg = await helloWorld(idx);
    console.log(`#${idx} replying -> ${msg}`);
};

const msg1 = async (idx) => {
    // async arrow function
    const msg = await helloWorld(idx);
    console.log(`msg ${idx} replying -> ${msg}`);
};

for (let i = 0; i < 5; i += 1) {
    hello(i);
}
 */

// function grabTheKey(theKey) {
//     console.log(`${theKey} is on my hand.`);
// }

// function openTheDoor(theDoor) {
//     console.log(`I'm opening the ${theDoor}`);
// }

// function walkInto(thePlace) {
//     console.log(`I'm walking into ${thePlace}`);
// }

// function pickUpThePhone() {
//     console.log(`Talking to my mom!`);
// }

// function textTo(toWhom, message) {
//     console.log(`"${message}" is sent to ${toWhom}`);
// }

// function ringThePhone() {
//     console.log(`Your phone is ringing`);
//     pickUpThePhone();
// }

// setTimeout(ringThePhone(), Math.floor(Math.random() * 2000));
// grabTheKey('Main key');
// textTo('Mike', 'See you tomorrow at 2pm');
// openTheDoor('Main door');
// walkInto('My Home');