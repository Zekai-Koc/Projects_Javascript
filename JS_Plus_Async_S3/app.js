// // ---------------------- 1 ------------------------------ //
// // let's start with an easy example on async/await.

// async function firstExample() {
//     let promise = new Promise((res, rej) => {
//         setTimeout(() => res(111), 2000);
//     });

//     // here, instead of using a then block, we will use await.
//     let result = await promise; // this line will wait until our promise resolves.

//     console.log(result * 2);
// }

// firstExample();

// // We may get this error if we forget to put async before a function. As stated earlier, await only works inside an async function.
// // show without await keyword.



// // ---------------------- 2 ------------------------------ //
// // let's do our previous example again and convert it to async/await format.
// // here is the code, getting the third user from a remote server.

// let userFromRemote = fetch('https://jsonplaceholder.typicode.com/users/3')
//   .then((response) => {
//     console.log("!!!: ", response);

//     if (response.status == 200) return response.json();
//     else throw Error(response.status)
//   })
//   .then((json) => console.log("user: ", json))
//   .catch(err => console.log("error: ", err));

// console.log(userFromRemote);




// // -------------------------- 3 -------------------------- //
// // now, let's change our example.

// async function userFromRemote() {

//     let response = await fetch('https://jsonplaceholder.typicode.com/users/3');  // here, response will wait the outcome of the fetch function.

//     let user = await response.json(); // and user will wait our resault to convert to json format.

//     console.log(user);

//     // let's improve our example.
//     await new Promise( (reso, reje) => {
//         setTimeout( reso, 5000);
//     });

//     console.log("after 5 secs.");
// }

// userFromRemote();




// // ------------------------- 4 --------------------------- //
// // what if an error occurs?

// async function userFromRemote() {

//     // i'm changing the path.
//     let response = await fetch('https://jsonplaceholder.typicode.com/users!!!!!!!!!!!!/3');  

//     let user = await response.json(); 

//     console.log(user);


// }

// userFromRemote();




// // ------------------------- 5 --------------------------- //
// // let's catch the error. although we can use .catch method of our promise, the common way is using try...catch block.

// async function userFromRemote() {

//     try {

//         let response = await fetch('https://jsonplaceholder.typicode.com/users!!!!!!!!!!!!/3');  

//         if (!response.ok) throw new Error(response.status);

//         let user = await response.json(); 

//         console.log(user);

//     } 
//     catch (error) {
//         console.log("!!! ", error);
//     }

// }

// userFromRemote();




// // ------------------------- EXERCISE --------------------------- //

// today, we will do an exercise and use asyncrous calls for getting data from a remote server.
// we will use fecth for accessing data.
// we have talked about apis on the internet. let's check for free apis.
// google search: free api
// https://github.com/public-apis/public-apis
// here there are many  apis for different purposes. we will use rest countries from this list.





// const btn = document.querySelector('.btn-country');

const renderCountry = (data, className = '') => {
    const countryElm = document.querySelector('.countries');

    const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
    </article>`;

    countryElm.insertAdjacentHTML('beforeend', html);
    countryElm.style.opacity = 1;
};



// today, we will focus on fetch which is more common. however, you can also check the other methods, such as ajax calls on the internet as well.


// // ------------------------   1   ---------------------------- //
// // let's start. first, we will define our url and assign it to a constant.
const countryURL = "https://restcountries.eu/rest/v2/name/turkey";

// // now we can get data from our remote server:
// const countryRequest = fetch(countryURL);
// // let's check what we have from fetch?
// console.log(countryRequest);
// // as you see, we got a promise as a return. let's inspect what we have.
// // state: two states, fulfilled or rejected.
// // show from the slides.
// // mention the status and ok




// // ------------------------   2   ---------------------------- //
// // what if we change the url to an invalid path? let's see. i will change the link by adding a dummy character at the end...
// const countryURL = "https://restcountries.eu/rest/v2/name/turkeyQ";

// const countryRequest = fetch(countryURL);

// // here what we have now.
// console.log(countryRequest);
// // state: still fulfilled, because the important thing for fetch is to access the remote server. if so, it regards the result as fulfilled.
// // ok: false
// // status: 404
// // if the status is other than 200, then we have a problem.




// // ------------------------   3   ---------------------------- //
// // so, how can we access the data inside our promise? any idea?

// const countryURL = "https://restcountries.eu/rest/v2/name/turkey";

// const countryRequest = fetch(countryURL);

// console.log(countryRequest);

// countryRequest.then( (response) => {
//     console.log(response);
//     return response.json(); // here, we should convert our data to json format.
//     // however, we need to get the data by using then method, because here return returns a new promise.
// }).then( (data) => {
//     console.log(data); // here is our data in json format. we have an array with just one element.
//     // now, we have our data, then we can proccess this data by using our renderCountry function.
//     renderCountry(data[0]); // highlight zero index by showing it on console.
// });

// // renderCountry fonksiyonunu then dışında deneyelim.
// // renderCountry(data[0]);




// // ------------------------   4   ---------------------------- //
// // arrow fonksiyonunu normal fonksiyon olarak değiştirelim.
// // sonraki aşamada doğrudan fetch.then mantığını tekrar edebiliriz.

// const countryRequest = fetch(countryURL).then( function(res, rej) {
//     return res.json();
// }).then(function(resp, reje) {
//     console.log(resp);
//     console.log(resp[0].name);
//     renderCountry(resp[0]);
// })




// // ------------------------   5   ---------------------------- //
// // now let's create a function and put our code inside this function for making our code more generic.

// const getCountryData = (countryName) => {
//     fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
//         .then( function(response) {
//             console.log(response);
//             return response.json();
//         })
//         .then( function(data) {
//             console.log(data);
//             renderCountry(data[0]);
//         });
// };

// getCountryData("turkey");
// getCountryData("usa");
// getCountryData("canada");




// // ------------------------   6   ---------------------------- //
// // we can create an independent function then call it inside our getCountryData function.

// function fetchCountry(countryName) {
//     fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
//         .then( function(response) {
//             console.log(response);
//             return response.json();
//         })
//         .then( function(data) {
//             console.log(data);
//             renderCountry(data[0]);
//         });
// }

// fetchCountry("turkey");
// fetchCountry("usa");
// fetchCountry("canada");




// // ------------------------   7   ---------------------------- //
// // we have not got any error yet. what if we have an error? before improving our example let me show you a rejected request on my slides.


// const getCountryData = ( (countryName) => {
//     fetch(`https://restcountries.eu/rest/v2/nme/${countryName}`)   // !!!!!! change: name ==> nme
//         .then( function(response) {
//             console.log(response);
//             if (!response.ok) throw new Error(`response error: ${response.status}`)
//             return response.json();
//         })
//         .then( function(data) {
//             console.log(data);
//             renderCountry(data[0]);
//         })
//         // we created our error. so we need to catch it.
//         .catch( (err) => console.log("********" + err))
// });

// getCountryData("canada");




// // ------------------------   8   ---------------------------- //
// // we are reading country data and inside this data there is a field named "border".
// // show this on chrome.
// // https://github.com/public-apis/public-apis
// // now let's read borders and render this data on our html.
// // let's create a new function...

// const getCountryNeighbourData = (country) => {

//     fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//         .then((response) => {
//             console.log(response);
//             // throw error if no data available.
//             if (response.status !== 200)
//                 throw new Error(`no data available. Error: ${response.status}`);
//             return response.json();
//         })
//         .then((data) => {
//             // console.log(data);
//             renderCountry(data[0]);
//             const neighbour = data[0].borders[0];
//             // if (!neighbour) throw new Error('No neighbour');
//             // const neighbour = 'dfsdfdef';
//             return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//         })
//         // .then((response) => response.json())
//         .then((response) => {
//             // throw error if there is no neighbour.
//             if (response.status !== 200)
//                 throw new Error(`${country} has no neighbour. Error: ${response.status}`);
//             return response.json();
//         })
//         .then((data) => renderCountry(data, 'neighbour'))
//         .catch((err) => console.log(err.message))
//         .finally(() =>
//             console.log(
//                 'Finally runs on both successfull and rejected promises'
//             )
//         );
// };

// getCountryNeighbourData("turkey");

// // let's check if our no neighbour error works.
// // getCountryNeighbourData("new zealand");




// // ------------------------   9   ---------------------------- //
// // as you see on our code there is a dublication. so, we can get rid of this stuation.

// // first i will create a generic function for getting data of a specific country.
// const getCountryJSONData = function(url, errorMsg = "!!! error !!!") {
//     return fetch(url).then( (response) => {
//         if (!response.ok) throw new Error(`${errorMsg} error code: ${response.status}`);
//         return response.json();
//     })
// };


// const getCountryNeighbourData = (country) => {
//     const countryURL = `https://restcountries.eu/rest/v2/name/${country}`;
//     const errorMsg = "no such country!"
//     getCountryJSONData(countryURL, errorMsg)
//     .then( (data) => {
//         console.log("country data: ", data);
//         renderCountry(data[0]);

//         const firstNeighbour = data[0].borders[0];
//         console.log("firstNeighbour: ", firstNeighbour);

//         const neighbourURL = `https://restcountries.eu/rest/v2/alpha/${firstNeighbour}`;
//         const errorMsgNeighbour = "no neighbour!";

//         return getCountryJSONData(neighbourURL, errorMsgNeighbour);
//     })
//     .then( (neighbourData) => {

//         console.log("neighbourData: ", neighbourData);

//         renderCountry(neighbourData, "neighbour");
//     })
//     // // önce catch kullanmadan new zealand ile test edip uncaught error görelim. sonra da aşağıdaki bölüme devam...
//     // // we can catch the error by ourself.
//     .catch( (err) => console.log(err.message));
// }

// // getCountryNeighbourData("turkey")
// getCountryNeighbourData("new zealand")




// ------------------------   TASK - 1   ---------------------------- //
// i will give 20 mins for you to change our code with async/await, test it and one of you will explain his/her solution afterwards.

// const getCountryNeighbourDataAsync = async (country) => {
//         try {
//             let response = await fetch(
//                 `https://restcountries.eu/rest/v2/name/${country}`
//             );
//             console.log(response);
//             // throw error
//             if (response.status !== 200)
//                 throw new Error(`${response.status} Error`);

//             let data = await response.json();
//             renderCountry(data[0]);

//             const neighbour = data[0].borders[0];
//             if (!neighbour) throw new Error('No neighbour');
//             response = await fetch(
//                 `https://restcountries.eu/rest/v2/alpha/${neighbour}`
//             );

//             if (response.status !== 200)
//                 throw new Error(`${response.status} Error`);
//             data = await response.json();

//             renderCountry(data, 'neighbour');
//             return data.name;
//         } catch (err) {
//             console.log(err.message);
//         }
//     };

// getCountryNeighbourDataAsync("turkey");




// ------------------------   TASK - 2   ---------------------------- //
// instead of just one neighbour, change your code to read for all the neighbours and print them on the screen.
// you have 20 mins.


// const getCountryJSONData = function(url, errorMsg = "!!! error !!!") {
//     return fetch(url).then( (response) => {
//         if (!response.ok) throw new Error(`${errorMsg} error code: ${response.status}`);
//         return response.json();
//     })
// };

// const getCountryNeighbourDataAsync = async (country) => {
//     try {
//         let data = await getCountryJSONData(
//             `https://restcountries.eu/rest/v2/name/${country}`,
//             'No such country'
//         );
//         renderCountry(data[0]);
//         console.log(data[0].borders);
//         for (let i = 0; i < data[0].borders.length; i++) {
//             const neighbour = data[0].borders[i];
//             if (!neighbour) throw new Error('No neighbour');
//             const nbdata = await getCountryJSONData(
//                 `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
//                 'No neighbour data'
//             );
//             console.log(data);
//             renderCountry(nbdata, 'neighbour');
//         }
//         return data.name;
//     } catch (err) {
//         console.log(err.message);
//     }
// };

// getCountryNeighbourDataAsync('Turkey');










// // ------------------------   10   ---------------------------- //
// // up until now we have used default promises of the system. 
// // we can also create our promises.

// // now, let's create a flipping coin simulation by using promises.

// const flipCoinPromise = new Promise((resolve, reject) => {
//     console.log("flipping the coin...");

//     Math.random() >= 0.5 ? resolve("head comes. you win.") : reject(new Error("tail comes. you lost!"));
// });

// flipCoinPromise
//     .then( (res) => console.log(res))
//     .catch((err) => console.log(err.message))




// // ------------------------   11   ---------------------------- //
// // let's improve our example by using setTimeout function.

// const flipCoinPromise = new Promise((resolve, reject) => {
//     console.log("flipping the coin...");
//     setTimeout(() => {
//         Math.random() >= 0.5 ? resolve("head comes. you win.") : reject(new Error("tail comes. you lost!"));
//     }, 2000)
// });

// flipCoinPromise
//     .then( (res) => console.log(res))
//     .catch((err) => console.log(err.message))
// // catch satırını iptal edip hatayı görelim.




// // // ------------------------   12   ---------------------------- //
// // // let's convert our code to async/await format

// async function flip() {
//         let flipPromise = await new Promise((resolve, reject) => {

//             console.log("flipping the coin...");
//             headortail = Math.random();
//             console.log("headortail: ", headortail);

//             if (headortail <= 0.5) return resolve("head comes. you win.");

//             else return reject(new Error("tail comes. you lost!"));

//         });

//         let flipres = await flipPromise;
//         console.log(flipPromise);
// }

// flip();




// // ------------------------   13   ---------------------------- //
// // let's add error handler by using try..catch block.


// async function flip() {
//     try {
//         let flipPromise = await new Promise((resolve, reject) => {

//             console.log("flipping the coin...");
//             headortail = Math.random();
//             console.log("headortail: ", headortail);

//             if (headortail <= 0.5) return resolve("head comes. you win.");

//             else return reject(new Error("tail comes. you lost!"));

//         });

//         let flipres = await flipPromise;
//         console.log(flipPromise);

//     } catch (error) {
//         console.log(error.message);
//     }
// }

// flip();







// ------------------------   12   ---------------------------- //
// now lets create a callback hell by using setTimeout function.

// setTimeout( () => {
//     console.log("1 second passed");
//     setTimeout( () => {
//         console.log("2 seconds passed");
//         setTimeout( () => {
//             console.log("3 seconds passed");
//             setTimeout( () => {
//                 console.log("4 seconds passed")
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);


// ------------------------   13   ---------------------------- //
// how can we implement this logic without callback hell?

// const wait = (seconds) => {
//     return new Promise((resolve) => {
//         setTimeout(resolve, seconds * 1000);
//     })
// };

// wait(1)
//     .then(() => {
//         console.log("1 second passed");
//         return wait(1);
//     })
//     .then(() => {
//         console.log("2 seconds passed");
//         return wait(1)
//     })
//     .then(() => {
//         console.log("3 seconds passed");
//         return wait(1)
//     })
//     .then(() => {
//         console.log("4 seconds passed");
//         return wait(1)
//     })








////////////////////////////////////////////////////////////////////////////////////////
// // AJAX Calls
// // XMLHttpRequest - XHR
// // old way, not common anymore
// const getCountryData = (country) => {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//     request.send();

//     request.addEventListener('load', function () {
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);
//         renderCountry(data);
//     });
// };

// getCountryData('turkey');

// const request = fetch('https://restcountries.eu/rest/v2/name/turkey');
// console.log(request);

// request
//     .then((response) => {
//         console.log(response);
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         renderCountry(data[0]);
//     });

// // in a function

// const getCountryData = (country) => {
//     fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//         .then((response) => {
//             // console.log(response);
//             return response.json();
//         })
//         .then((data) => {
//             // console.log(data);
//             renderCountry(data[0]);
//         });
// };

// getCountryData('Turkey');
// getCountryData('Canada');
// getCountryData('Germany');

// const getCountryNeighbourData = (country) => {
//     fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//         .then((response) => {
//             console.log(response);
//             // throw error
//             if (response.status !== 200)
//                 throw new Error(`${response.status} Error`);
//             return response.json();
//         })
//         .then((data) => {
//             // console.log(data);
//             renderCountry(data[0]);
//             const neighbour = data[0].borders[0];
//             // if (!neighbour) throw new Error('No neighbour');
//             // const neighbour = 'dfsdfdef';
//             return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//         })
//         // .then((response) => response.json())
//         .then((response) => {
//             // throw error
//             if (response.status !== 200)
//                 throw new Error(`${response.status} Error`);
//             return response.json();
//         })
//         .then((data) => renderCountry(data, 'neighbour'))
//         .catch((err) => console.log(err.message))
//         .finally(() =>
//             console.log(
//                 'Finally runs on both successfull and rejected promises'
//             )
//         );
// };

// const getCountryJSONData = (url, errorMsg = 'Something went wrong') => {
//     return fetch(url).then((response) => {
//         if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
//         return response.json();
//     });
// };

// const getCountryNeighbourData = (country) => {
//     getCountryJSONData(
//         `https://restcountries.eu/rest/v2/name/${country}`,
//         'No such country'
//     )
//         .then((data) => {
//             // console.log(data);
//             renderCountry(data[0]);
//             const neighbour = data[0].borders[0];

//             // const neighbour = 'dfsdfdef';
//             return getCountryJSONData(
//                 `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
//                 'No neighbour'
//             );
//         })
//         .then((data) => renderCountry(data, 'neighbour'))
//         .catch((err) => console.log(err.message))
//         .finally(() =>
//             console.log(
//                 'Finally runs on both successfull and rejected promises'
//             )
//         );
// };

// getCountryNeighbourData('Turkey');

// ///////////////////////////////////////
// // The Event Loop in Practice

// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then((res) => console.log(res));

// Promise.resolve('Resolved promise 2').then((res) => {
//     for (let i = 0; i < 1000000000; i++) {}
//     console.log(res);
// });
// console.log('Test end');
//

// ///////////////////////////////////////
// // Building a Simple Promise
/*
const flipCoinPromise = new Promise((resolve, reject) => {
    console.log('Wellcome to toss game.');
    console.log('flipping the coin');
    setTimeout(() => {
        Math.random() >= 0.5
            ? resolve('Here Head comes! You WIN!')
            : reject(new Error('Tail comes! You lost your money'));
        // reject('You lost your money');
    }, 2000);
});

flipCoinPromise
    .then((res) => console.log(res))
    .catch((err) => console.error(err.message));
*/
// Promisifying setTimeout

// // setTimeout(() => {
// //   console.log('1 second passed');
// //   setTimeout(() => {
// //     console.log('2 seconds passed');
// //     setTimeout(() => {
// //       console.log('3 second passed');
// //       setTimeout(() => {
// //         console.log('4 second passed');
// //       }, 1000);
// //     }, 1000);
// //   }, 1000);
// // }, 1000);

// const wait = (seconds) => {
//     return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
// };
/*
wait(1)
    .then(() => {
        console.log('1 second passed');
        return wait(1);
    })
    .then(() => {
        console.log('2 second passed');
        return wait(1);
    })
    .then(() => {
        console.log('3 second passed');
        return wait(1);
    })
    .then(() => console.log('4 second passed'));
*/
// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem!')).catch(x => console.error(x));

// // example with images

// const imgContainer = document.querySelector('.images');

// const createImage = (imgPath) => {
//     return new Promise((resolve, reject) => {
//         const img = document.createElement('img');
//         img.src = imgPath;

//         img.addEventListener('load', () => {
//             imgContainer.append(img);
//             resolve(img);
//         });

//         img.addEventListener('error', () =>
//             reject(new Error('Image not found'))
//         );
//     });
// };

// let currentImg;

// createImage('images/image1.jpg')
//     .then((img) => {
//         currentImg = img;
//         console.log('Image 1 loaded');
//         return wait(3);
//     })
//     .then(() => {
//         currentImg.style.display = 'none';
//         return createImage('images/image2.jpg');
//     })
//     .then((img) => {
//         currentImg = img;
//         console.log('Image 2 loaded');
//         return wait(3);
//     })
//     .then(() => {
//         currentImg.style.display = 'none';
//     })
//     .catch((err) => console.error(err));

// ///////////////////////////////////////
// // Consuming Promises with Async/Await
// // Error Handling With try...catch

// const getCountryNeighbourDataAsync = async (country) => {
//     try {
//         let response = await fetch(
//             `https://restcountries.eu/rest/v2/name/${country}`
//         );
//         console.log(response);
//         // throw error
//         if (response.status !== 200)
//             throw new Error(`${response.status} Error`);
//         let data = await response.json();
//         renderCountry(data[0]);
//         const neighbour = data[0].borders[0];
//         if (!neighbour) throw new Error('No neighbour');
//         response = await fetch(
//             `https://restcountries.eu/rest/v2/alpha/${neighbour}`
//         );

//         if (response.status !== 200)
//             throw new Error(`${response.status} Error`);
//         data = await response.json();

//         renderCountry(data, 'neighbour');
//         return data.name;
//     } catch (err) {
//         console.log(err.message);
//     }
// };

// // try {
// //   let y = 1;
// //   const x = 2;
// //   y = 3;
// // } catch (err) {
// //   alert(err.message);
// // }
/*
const getCountryNeighbourDataAsync = async (country) => {
    try {
        let data = await getCountryJSONData(
            `https://restcountries.eu/rest/v2/name/${country}`,
            'No such country'
        );
        renderCountry(data[0]);
        console.log(data[0].borders);
        for (let i = 0; i < data[0].borders.length; i++) {
            const neighbour = data[0].borders[i];
            if (!neighbour) throw new Error('No neighbour');
            const nbdata = await getCountryJSONData(
                `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
                'No neighbour data'
            );
            console.log(data);
            renderCountry(nbdata, 'neighbour');
        }
        return data.name;
    } catch (err) {
        console.log(err.message);
    }
};

getCountryNeighbourDataAsync('Turkey');
*/
// // Returning Values from Async Functions

// const data = getCountryNeighbourDataAsync('Turkey');
// console.log('First log');
// console.log(data);
// console.log('Final log');

// (async () => {
//     const data = await getCountryNeighbourDataAsync('Turkey');
//     console.log('First log');
//     console.log(data);
//     console.log('Final log');
// })();

///////////////////////////////////////
// Running Promises in Parallel
// // Other Promise Combinators: race, allSettled and any
/*
const get3Countries = async function (c1, c2, c3) {
    try {
        const [data1] = await getCountryJSONData(
            `https://restcountries.eu/rest/v2/name/${c1}`
        );
        const [data2] = await getCountryJSONData(
            `https://restcountries.eu/rest/v2/name/${c2}`
        );
        const [data3] = await getCountryJSONData(
            `https://restcountries.eu/rest/v2/name/${c3}`
        );
        console.log([data1.capital, data2.capital, data3.capital]);

        // const data = await Promise.all([
        //     getCountryJSONData(`https://restcountries.eu/rest/v2/name/${c1}`),
        //     getCountryJSONData(`https://restcountries.eu/rest/v2/name/${c2}`),
        //     getCountryJSONData(`https://restcountries.eu/rest/v2/name/${c3}`),
        // ]);
        // console.log(data.map((d) => d[0].capital));
        const data = await Promise.race([
            getCountryJSONData(`https://restcountries.eu/rest/v2/name/${c1}`),
            getCountryJSONData(`https://restcountries.eu/rest/v2/name/${c2}`),
            getCountryJSONData(`https://restcountries.eu/rest/v2/name/${c3}`),
        ]);
        console.log(data.map((d) => d.capital));
        // console.log(data);
    } catch (err) {
        console.error(err);
    }
};
get3Countries('turkey', 'canada', 'tanzania');
*/

// const timeout = (sec) => {
//     return new Promise((_, reject) => {
//         setTimeout(() => {
//             reject(new Error('Request took too long!'));
//         }, sec * 1000);
//     });
// };
/*
Promise.race([
    getCountryJSONData(`https://restcountries.eu/rest/v2/name/turkey`),
    timeout(0.01),
])
    .then((res) => console.log(res[0].capital))
    .catch((err) => console.error(err));
*/
// // Promise.allSettled
// Promise.allSettled([
//     Promise.resolve('Success'),
//     Promise.reject('ERROR'),
//     Promise.resolve('Another success'),
// ]).then((res) => console.log(res));

// Promise.all([
//     Promise.resolve('Success'),
//     Promise.reject('ERROR'),
//     Promise.resolve('Another success'),
// ])
//     .then((res) => console.log(res))
//     .catch((err) => console.error(err));

// // Promise.any [ES2021]
// Promise.any([
//     // Promise.resolve('Success'),
//     Promise.reject('ERROR'),
//     Promise.resolve('Another success'),
// ])
//     .then((res) => console.log(res))
//     .catch((err) => console.error(err));
// // // */

// ///////////////////////////////////////
// // Coding Challenge #3

// /*
// PART 1
// Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
// Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

// PART 2
// 1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
// 2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
// 3. Check out the 'imgs' array in the console! Is it like you expected?
// 4. Use a promise combinator function to actually get the images from the array 😉
// 5. Add the 'paralell' class to all the images (it has some CSS styles).

// TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

// GOOD LUCK 😀
// */

// /*
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const imgContainer = document.querySelector('.images');

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// let currentImg;

// // createImage('img/img-1.jpg')
// //   .then(img => {
// //     currentImg = img;
// //     console.log('Image 1 loaded');
// //     return wait(2);
// //   })
// //   .then(() => {
// //     currentImg.style.display = 'none';
// //     return createImage('img/img-2.jpg');
// //   })
// //   .then(img => {
// //     currentImg = img;
// //     console.log('Image 2 loaded');
// //     return wait(2);
// //   })
// //   .then(() => {
// //     currentImg.style.display = 'none';
// //   })
// //   .catch(err => console.error(err));

// // PART 1
// const loadNPause = async function () {
//   try {
//     // Load image 1
//     let img = await createImage('img/img-1.jpg');
//     console.log('Image 1 loaded');
//     await wait(2);
//     img.style.display = 'none';

//     // Load image 1
//     img = await createImage('img/img-2.jpg');
//     console.log('Image 2 loaded');
//     await wait(2);
//     img.style.display = 'none';
//   } catch (err) {
//     console.error(err);
//   }
// };
// // loadNPause();

// // PART 2
// const loadAll = async function (imgArr) {
//   try {
//     const imgs = imgArr.map(async img => await createImage(img));
//     const imgsEl = await Promise.all(imgs);
//     console.log(imgsEl);
//     imgsEl.forEach(img => img.classList.add('parallel'));
//   } catch (err) {
//     console.error(err);
//   }
// };
// loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
// */

// const url = 'https://jsonplaceholder.typicode.com/usrs/8';

// fetch(url)
//     .then((response) => {
//         console.log(response);
//         if (response.status !== 200)
//             throw new Error(`${response.status} Hatası`);
//         return response.json();
//     })
//     .then((data) => console.log(data))

//     .catch((err) => console.log(err));

// const renderError = function (msg) {
//     countryElm.insertAdjacentText('beforeend', msg);
//     countryElm.style.opacity = 1;
// };

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//     return fetch(url).then((response) => {
//         if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//         return response.json();
//     });
// };

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// ///////////////////////////////////////
// // Coding Challenge #1

// /*
// In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

// Here are your tasks:

// PART 1
// 1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
// 2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
// The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
// 3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
// 4. Chain a .catch method to the end of the promise chain and log errors to the console
// 5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

// PART 2
// 6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
// 7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

// TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
// TEST COORDINATES 2: 19.037, 72.873
// TEST COORDINATES 2: -33.933, 18.474

// GOOD LUCK 😀
// */

// /*
// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);

//       return res.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message} 💥`));
// };
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);
// */

// ///////////////////////////////////////
// // Promisifying the Geolocation API
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
// // getPosition().then(pos => console.log(pos));

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;

//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);

//       return res.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message} 💥`));
// };

// btn.addEventListener('click', whereAmI);
// */

// ///////////////////////////////////////
// // Coding Challenge #2

// /*
// Build the image loading functionality that I just showed you on the screen.

// Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

// PART 1
// 1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

// If this part is too tricky for you, just watch the first part of the solution.

// PART 2
// 2. Comsume the promise using .then and also add an error handler;
// 3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
// 4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
// 5. After the second image has loaded, pause execution for 2 seconds again;
// 6. After the 2 seconds have passed, hide the current image.

// TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

// GOOD LUCK 😀
// */

// /*
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const imgContainer = document.querySelector('.images');

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

// ///////////////////////////////////////
// // Consuming Promises with Async/Await
// // Error Handling With try...catch

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// // fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(res => console.log(res))

// const whereAmI = async function () {
//   try {
//     // Geolocation
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;

//     // Reverse geocoding
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     if (!resGeo.ok) throw new Error('Problem getting location data');

//     const dataGeo = await resGeo.json();
//     console.log(dataGeo);

//     // Country data
//     const res = await fetch(
//       `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
//     );

//     // BUG in video:
//     // if (!resGeo.ok) throw new Error('Problem getting country');

//     // FIX:
//     if (!res.ok) throw new Error('Problem getting country');

//     const data = await res.json();
//     console.log(data);
//     renderCountry(data[0]);
//   } catch (err) {
//     console.error(`${err} 💥`);
//     renderError(`💥 ${err.message}`);
//   }
// };
// whereAmI();
// whereAmI();
// whereAmI();
// console.log('FIRST');

// ///////////////////////////////////////
// // Returning Values from Async Functions
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function () {
//   try {
//     // Geolocation
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;

//     // Reverse geocoding
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     if (!resGeo.ok) throw new Error('Problem getting location data');
//     const dataGeo = await resGeo.json();

//     // Country data
//     const res = await fetch(
//       `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
//     );
//     if (!resGeo.ok) throw new Error('Problem getting country');
//     const data = await res.json();
//     renderCountry(data[0]);

//     return `You are in ${dataGeo.city}, ${dataGeo.country}`;
//   } catch (err) {
//     console.error(`${err} 💥`);
//     renderError(`💥 ${err.message}`);

//     // Reject promise returned from async function
//     throw err;
//   }
// };

// console.log('1: Will get location');
// // const city = whereAmI();
// // console.log(city);

// // whereAmI()
// //   .then(city => console.log(`2: ${city}`))
// //   .catch(err => console.error(`2: ${err.message} 💥`))
// //   .finally(() => console.log('3: Finished getting location'));

// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(`2: ${city}`);
//   } catch (err) {
//     console.error(`2: ${err.message} 💥`);
//   }
//   console.log('3: Finished getting location');
// })();