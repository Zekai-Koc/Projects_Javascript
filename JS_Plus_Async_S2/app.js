// Constructor
// Promise()
// Creates a new Promise object. The constructor is primarily used to wrap functions that do not already support promises.


// first, we will create a promise and catch the result without doing anything.

// we can use arrow function or a regular function as a callback for creating...

// let loadDataFromDB = new Promise((resolve, reject) => {
let loadDataFromDB = new Promise(function (resolve, reject) {

  // let's simulate data loading from a remote server randomly: true or false
  let dataLoaded = Math.floor(Math.random() * 2);

  if (dataLoaded) {
    resolve();
  }
  else {
    reject();
  }
});


loadDataFromDB
  .then(() => {
    console.log("SUCCESS");
  })
  .catch(() => {
    console.log("ERROR");
  })

// here, in this example, we did not use the result. instead we just saw. normally, we can/should use the resulting of our process. here how can we do:


// ---------------------- 2 ------------------------------ //

let loadDataFromDB = new Promise(function (resolve, reject) {

  let dataLoaded = Math.floor(Math.random() * 2);

  if (dataLoaded) {
    resolve("data loaded successfully.");                   // 2
  }
  else {
    reject("error on loading data!");                       // 2
  }
});


loadDataFromDB
  .then((resultResolve) => {                                  // 2
    console.log("SUCCESS: ", resultResolve);                // 2
  })
  .catch((resultReject) => {                                  // 2
    console.log("ERROR: ", resultReject);                   // 2
  })



// ---------------------- 3 ------------------------------ //
// now let's have an another basic example.

let myFirstPromise = new Promise((resolve, reject) => {
  // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
  // In this example, we use setTimeout(...) to simulate async code.
  // In reality, you will probably be using something like XHR or an HTML5 API.
  setTimeout(function () {
    resolve("Success!")  // Yay! Everything went well!
  }, 5000)
})

myFirstPromise.then((successMessage) => {
  // successMessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
  console.log("Yay! " + successMessage)
});



// ---------------------- 4 ------------------------------ //
// now let's have a more complex example.

let readClientID = function () {
  return new Promise(function (resolve) {
    resolve("READ: Client ID - successfull.");
  });
}

let readClientNameFromID = function () {
  return new Promise(function (michael) {
    michael("READ: Client Name - successfull.");
  });
}

let displayData = function () {
  return new Promise((res) => {
    res("DISPLAY: successfull...");
  });
}

// if we can read id from db successfully then we can read name by using this foreing key from another table. here is the way:
readClientID().then(function () {
  return readClientNameFromID();
}).then(function () {
  return displayData();
}).then(function () {
  console.log("everything went well...");
})


// we can track all of the promises in one command. with this way, we have to wait for all promises to finish their job.
Promise.all([readClientID(), readClientNameFromID(), displayData()]).then(() => {
  console.log("all finished");
});


// we can track if any of the promises finishes.
Promise.race([readClientID(), readClientNameFromID(), displayData()]).then(() => {
  console.log("at least one of them is finished...");
});




// ---------------------- 5 ------------------------------ //
// now let's add reject cases...


let readClientID = function () {
  return new Promise(function (resolve, reject) {

    let dataLoaded = Math.floor(Math.random() * 2);

    if (dataLoaded) resolve("\nREAD: Client ID - successfull.");

    else reject("\nREAD: Client ID - Failed.");
  });
}

let readClientNameFromID = function () {
  return new Promise(function (michael, adams) {

    let dataLoaded = Math.floor(Math.random() * 2);

    if (dataLoaded) michael("\nREAD: Client Name - successfull.");

    else adams("\nREAD: Client Name - Failed.");
  });
}

let displayData = function () {
  return new Promise((res, rej) => {
    res("\nDISPLAY: successfull...");
  });
}

// show rejected slide.


// if we can read id from db successfully then we can read name by using this foreing key from another table. here is the way:
readClientID().then(function () {
  return readClientNameFromID();
}).then(function () {
  return displayData();
}).then(function () {
  console.log("everything went well...");
}).catch(() => {
  console.log("something went wrong!!!");
});


// we can track all of the promises in one command. with this way, we have to wait for all promises to finish their job.
Promise.all([readClientID(), readClientNameFromID(), displayData()]).then(() => {
  console.log("OK!!! :)");
});


// we can track if any of the promises finishes.
Promise.race([readClientID(), readClientNameFromID(), displayData()]).then(() => {
  console.log("OK!!! :)");
});




// ---------------------- 6 ------------------------------ //
// we can pass messages among promises.


let readClientID = function () {
  return new Promise(function (resolve, reject) {

    let dataLoaded = Math.floor(Math.random() * 2);

    if (dataLoaded) resolve("\nREAD: Client ID - successfull.");

    else reject("\nREAD: Client ID - Failed.");
  });
}

let readClientNameFromID = function (message) {
  return new Promise(function (michael, adams) {

    let dataLoaded = Math.floor(Math.random() * 2);

    if (dataLoaded) michael("\nREAD: Client Name - successfull." + message);

    else adams("\nREAD: Client Name - Failed." + message);
  });
}

let displayData = function (message) {
  return new Promise((res, rej) => {
    res("\nDISPLAY: successfull..." + message);
  });
}

// if we can read id from db successfully then we can read name by using this foreing key from another table. here is the way:
readClientID().then(function (result) {
  return readClientNameFromID(result);
}).then(function (result) {
  return displayData(result);
}).then(function (result) {
  console.log("everything went well..." + result);
}).catch((result) => {
  console.log("something went wrong!!!" + result);
});


// we can track all of the promises in one command. with this way, we have to wait for all promises to finish their job. after all of them are done, we can get a result.
Promise.all([readClientID(), readClientNameFromID(), displayData()]).then(() => {
  console.log("ALL finished");
});


// we can track if any of the promises finishes. success or reject does not matter. any result will trigger.
Promise.race([readClientID(), readClientNameFromID(), displayData()]).then(() => {
  console.log("at least one finished.");
}).catch(() => {
  console.log("failed...")
});



// ------------------------------------------------------- //
// so, why do we learn promises? the main reason is reading data from a remote server. and now, we will start to use one of the common functions, fetch:

// The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.


// for using fetch, we need a remote server and we will use the following link.
//  https://jsonplaceholder.typicode.com/


// here are some examples:

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => console.log(json))



// ------------------------------------------------------- //
// // this is a perfect example for understanding the asynchronous calls. let's fetch the other sets and watch our console.
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => console.log(json))


fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => response.json())
  .then(json => console.log(json))


fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => console.log(json))


fetch('https://jsonplaceholder.typicode.com/albums')
  .then(response => response.json())
  .then(json => console.log(json))


fetch('https://jsonplaceholder.typicode.com/posts/11')
  .then(response => response.json())
  .then(json => console.log(json))


fetch('https://jsonplaceholder.typicode.com/photos/19')
  .then(response => response.json())
  .then(json => console.log(json))


fetch('https://jsonplaceholder.typicode.com/albums/99')
  .then(response => response.json())
  .then(json => console.log(json))

// as you see, at each turn the output differs. this is the result of async calls.



// ------------------------------------------------------- //
// now, let's try stg imp. we have covered this situation a few times before. here is a few lines of code.

let userDB;

let userFromRemote = fetch('https://jsonplaceholder.typicode.com/users/3')
  .then(response => response.json())
  .then(json => {
    console.log(json);
    // userDB = json;
    // console.log(userDB);
  })

console.log(userDB);




// ------------------------------------------------------- //
// now, let's inspect fetch function more:
// first let's read one of the users.

let userFromRemote = fetch('https://jsonplaceholder.typicode.com/users/3')
  .then((response) => {
    console.log("!!!: ", response.status);
    return response.json();
  })
  .then((json) => console.log("user: ", json))





// ------------------------------------------------------- //
// let's change the address and see the result:

let userFromRemote = fetch('https://jsonplaceholder.typicode.com/users!!!/3')
  .then((response) => {
    console.log("!!!: ", response.status);
    return response.json();
  })
  .then((json) => console.log("user: ", json))




// for details about the response codes you can check the following link.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status



// ------------------------------------------------------- //
// as you see, we got an error. how can we create our error messages?
// if fetch access data it returns 200 message as success. we can use this message for creating our error messages.

let userFromRemote = fetch('https://jsonplaceholder.typicode.com/usersq/3')
  .then((response) => {
    // console.log("!!!: ", response.status);

    if (response.status == 200) return response.json();
    else throw Error(response.status)
  })
  .then((json) => console.log("user: ", json))
  .catch(err => console.log("error: ", err));




// ----------------------------- TASK ----------------------------------- //
// read a random albume from placeholder.com and log its data on console (or on html page)
// by matching its id, read an image from photos and log its data on console (or on html page)


// const myImg = document.querySelector("img");
// // console.log(myImg);
// myImg.src = "https://via.placeholder.com/150/92c9" + "52";



