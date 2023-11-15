// // ------------------------ 1 -----------------------
// // forEach
// // first lets access our arrays elements by using forEach method. this method is very common.
// // this method iterates over elements one by one sequentially.

// const numbers = [1, 3, 6, 7, 33, 2, 4, 10];

// // using it with an arrow function:
// numbers.forEach((number) => console.log(number));

// // you can use a different parameter name. but an understandable name is important.
// numbers.forEach((number) => console.log(number));

// //  we can get the same result by using a function:
// numbers.forEach(function(number) {console.log(number)});

// //  another way for getting the same result:
// //  first lets create a function and use that function in our forEach method.
// function printNumbers(number) {
//     console.log({number});
// }

// numbers.forEach(printNumbers);


// //  an index number is also created automatically.
// numbers.forEach((number, index) => console.log("number: ", number, " at index: ", index));

// //  again: parameter names are up to you...
// numbers.forEach((michael, adams) => console.log("number: ", michael, " at index: ", adams));

// function printNumbers(number, index) {
//     console.log({number}, {index});
// }

// numbers.forEach(printNumbers);

// // our types in the array can be changed. lets add different types to our array.
// const numbers = [1, 3, ["ww", 22, true], 6, "zzz", 7, 33, 2, "bbb", 4, {id: 555, 22: "jjj"}, 10];
// numbers.forEach((number) => console.log(number));



// // ------------------------ 2 -----------------------
// // map method.
// // this method is similar to forEach, however, now it will return an array. forEach method does not return a value. be careful. this is the same function in python.

// // lets multiply our array elements by 2
// const numbers = [1, 3, 6, 7, 33, 2, 4, 10];
// const numbers = [1, 3, ["ww", 22, true], 6, "zzz", 7, 33, 2, "bbb", 4, {id: 555, 22: "jjj"}, 10];

// // we can directly print the result to our console.
// console.log(numbers.map(num => { return num * 2}));

// // because it returns a new array, we can assign it to a new variable. and this is the convenient way.
// const multipliedBy2 = numbers.map(num => { return num * 2});
// console.log(multipliedBy2);

// // be carefull: forEach does not return a value. if we try, we will get undefined.
// const n1 = numbers.forEach((num) => {console.log(num)});
// console.log(n1);

// const n1 = numbers.forEach((num) => { return num * 2 });
// console.log(n1);



// // ------------------------ 3 -----------------------
// // a comparison for map and foreach methods:

// const users = [
//     { id: 0, fname: "jack", age: 20 },
//     { id: 1, fname: "michael", age: 35 },
//     { id: 2, fname: "mark", age: 33 },
//     { id: 3, fname: "joe", age: 38 },
//     { id: 4, fname: "dave", age: 38 }
// ];

// // we want to create an array from the ages of users array. and we want to multiply the ages by 2
// // first forEach method:
// const ageArray = [];
// users.forEach( user =>{
//     ageArray.push(user.age * 2);
// });
// console.log(ageArray);

// // lets do it with map function

// const ageArray = users.map( user => user.age * 2);
// console.log(ageArray);



// // ------------------------ 4 -----------------------
// // find method.
// // for finding a specific value in an array of objects.

// const users = [
//     { id: 0, fname: "jack", age: 20 },
//     { id: 1, fname: "michael", age: 35 },
//     { id: 2, fname: "mark", age: 33 },
//     { id: 3, fname: "joe", age: 38 }
// ]

// // we want to get the object, which has the age 35
// const myUser = users.find( (user) => user.age == 35);
// console.log(myUser);

// // you should provide a condition for the find method.
// // if there are more than one object fullfilling the condition, find returns the first occurance.

// const users = [
//     { id: 0, fname: "jack", age: 20 },
//     { id: 1, fname: "michael", age: 35 },
//     { id: 2, fname: "mark", age: 33 },
//     { id: 3, fname: "joe", age: 38 },
//     { id: 4, fname: "dave", age: 38 }
// ];

// const myUser = users.find( (user) => user.age == 38);
// console.log(myUser);

// const myUser = users.find( (user) => user.age < 35);
// console.log(myUser);

// // you can get a specific element of the found object.
// const myUser = users.find( (user) => user.age < 35);
// console.log(myUser.age);
// console.log(myUser.fname);


// // or you can directly assign that element to a variable.
// const myUser = users.find( (user) => user.age < 35 ).fname;
// console.log(myUser);

// // you remember the usage of arrow functions. if you do more than one job, than you should use curly braces and return.
// const myUser = users.find( (user) => {
//     return user.age < 35
// });
// console.log(myUser);



// // ------------------------ 5 -----------------------
// // filter method.
// // while find method returns just one value, filter method returns (if available) more than one value that fits our condition.


// const users = [
//     { id: 0, fname: "jack", age: 20 },
//     { id: 1, fname: "michael", age: 35 },
//     { id: 2, fname: "mark", age: 33 },
//     { id: 3, fname: "joe", age: 38 },
//     { id: 4, fname: "dave", age: 38 }
// ];

// const myUsers = users.filter( user => user.age < 38);
// console.log(myUsers);



// // ------------------------ 6 -----------------------
// // reduce function.
// // A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. Calls the specified callback function for all the elements in an array. 

// const myArr = [1, 3, 5, 6, 8]

// myArr.reduce( () => {})

// // The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function. If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

// // there are two parameters in the callback function. the first one is accumulator and the second is current value.

// myArr.reduce( (acc, curr) => {});

// // acc is the result of the previous step.
// // for example, lets add all the values of the array.

// myArr.reduce( (acc, curr) => {
//     console.log("acc: ", acc, " curr: ", curr);
// });


// // now, lets use acc
// const sumOfNums = myArr.reduce( (acc, curr) => {
//     console.log("acc: ", acc, " curr: ", curr);
//     return acc + curr;
// });

// console.log("sum of the numbers: ", sumOfNums);

// // be careful. on console, we can not see the result of last iteration. because it finishes with return.


// // --------------------
// // how can we find the largest number in an array by using reduce?
// const numbers = [9, 5, 2, 1, 77, 23, 24, 65];

// const largestNum = numbers.reduce( (prev, curr) => {
//     return prev > curr ? prev : curr;
// });

// console.log("largestNum: ", largestNum);

// const min = numbers.reduce( (prev, curr) => {
//     return prev < curr ? prev : curr;
// });

// console.log("min: ", min);




// // ------------------------ 6 -----------------------
// // every and some
// // these functions control if the condition is ok or not.

// const users = [
//     { id: 0, isOld: false, fname: "jack", age: 20 },
//     { id: 1, isOld: true, fname: "michael", age: 34 },
//     { id: 2, isOld: true, fname: "mark", age: 76 },
//     { id: 3, isOld: false, fname: "joe", age: 16 },
//     { id: 4, isOld: true, fname: "dave", age: 79 }
// ];

// // every checks if the condition is true for all elements and if so, returns true. else, returns false. a strict.
// // some, on the other hand, returns true if at least one of the element is true.
// console.log("every: ", users.every( user => user.isOld === true));
// console.log("some: ", users.some( user => user.isOld === true));

// console.log("every: ", users.every( user => user.age < 50));
// console.log("some: ", users.some( user => user.age < 50));
// console.log("some: ", users.some( user => user.age < 10));




// // ------------------------ 7 -----------------------
// // for in 

// // you can not use forEach on objects. i mean, forEach function does not iterate through objects. so, we use for in function.

// // here we have an array of object.
// const users = [
//     { id: 0, isOld: false, fname: "jack", age: 20 },
//     { id: 1, isOld: true, fname: "michael", age: 34 },
//     { id: 2, isOld: true, fname: "mark", age: 76 },
//     { id: 3, isOld: false, fname: "joe", age: 16 },
//     { id: 4, isOld: true, fname: "dave", age: 79 }
// ];

// users.forEach( user => console.log(user));


// // what if i have an object?
// const user = { 
//     id: 0, 
//     isOld: false, 
//     fname: "jack", 
//     age: 20 
// };
// // now we will get an error.
// user.forEach( user => console.log(user));

// // so, here is the way we can use:
// for (let key in user) {
//     console.log("key: ", key);
// }
// // as you see, we got the property names of our object. not the values yet. how can i get the values?

// for (let key in user) {
//     console.log("key: ", key);
//     console.log("value: ", user[key]);
// }

// // now, can i access the values by using dot notation?
// for (let key in user) {
//     console.log("key: ", key);
//     // console.log("value: ", user[key]);
//     console.log("value: ", user.key);
// }



// // ------------------------ 8 -----------------------
// // for of 

// const user = { 
//     id: 0, 
//     isOld: false, 
//     fname: "jack", 
//     age: 20 
// };

// // if i try to use for of with an object, i will get an error.
// for (const element of user) {
//     console.log(element);
// }

// const users = [
//     { id: 0, isOld: false, fname: "jack", age: 20 },
//     { id: 1, isOld: true, fname: "michael", age: 34 },
//     { id: 2, isOld: true, fname: "mark", age: 76 },
//     { id: 3, isOld: false, fname: "joe", age: 16 },
//     { id: 4, isOld: true, fname: "dave", age: 79 }
// ];

// for (const element of users) {
//     console.log(element);
//     console.log(element.fname);
// }


// // ----------------------------
// // lets do some more examples: 
// const user = { 
//     id: 0, 
//     isOld: false, 
//     fname: "jack", 
//     age: 20 
// };

// for (let key in user) {
//     console.log("key: ", key, " value: ", user[key]);
// }

// const usersArray = [
//     { id: 0, isOld: false, fname: "jack", age: 20 },
//     { id: 1, isOld: true, fname: "michael", age: 34 },
//     { id: 2, isOld: true, fname: "mark", age: 76 },
//     { id: 3, isOld: false, fname: "joe", age: 16 },
//     { id: 4, isOld: true, fname: "dave", age: 79 }
// ];

// for (let element in usersArray) {
//     console.log(usersArray[element]);
// }



// // ----------------------- EXAMPLE --------------------

// // we have an array of objects. and we will use this data for exercising the functions/methods we have learned.
const data = [
    {
        id: 0,
        title: "Lorem Ipsum",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        readCount: 2310
    },
    {
        id: 1,
        title: "come from",
        desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        readCount: 3200
    },
    {
        id: 2,
        title: "simply dummy",
        desc: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        readCount: 1590
    },
    {
        id: 3,
        title: "leap into",
        desc: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        readCount: 5500
    },
    {
        id: 4,
        title: "sometimes on purpose",
        desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        readCount: 200
    },
];

// // lets see our data on console first.
// console.log(data);

// // first of all lets design our html page. 
// // lets continue from our html file.

// // lets access our divArticles
// const articles = document.querySelector("#divArticles");
// console.log(articles);

// // lets access our data in data variable.
// data.forEach( (element) => {
//     console.log(element);
// });

// // now we will create the structure on html page.

// data.forEach( (element) => {
//     const articleElement = document.createElement("div");

//     // // now i should create a class for my element.
//     articleElement.classList.add("article");
//     // // lets check our article elements for each object.
//     console.log(articleElement);
// });


// // now, we can fill our article element with our data.
// // here is an easy way:
// data.forEach( (element) => {
//     const articleElement = document.createElement("div");
//     articleElement.classList.add("article");

//     // // lets copy the html section from our html file and add the lines to articleElement's innerHTML:
//     articleElement.innerHTML = `
//     <p class="title"> </p>
//     <p></p>
//     <p class="readingCount"></p>
//     `;
//     console.log(articleElement);
// }); 
// // show the latest format on console


// // now, we fill innerHTML with our data properties:
// data.forEach( (element) => {
//     const articleElement = document.createElement("div");
//     articleElement.classList.add("article");

//     articleElement.innerHTML = `
//     <p class="title">${element.title}</p>
//     <p>${element.desc}</p>
//     <p class="readingCount">${element.readCount}</p>
//     `;
//     console.log(articleElement);
// });
// // show the latest format on console

// // now, we can delete the html side.

// // and now, we should write the data on html page.
// // what should i do is?
// data.forEach( (element) => {
//     const articleElement = document.createElement("div");
//     articleElement.classList.add("article");

//     articleElement.innerHTML = `
//     <p class="title">${element.title}</p>
//     <p>${element.desc}</p>
//     <p class="readingCount">Reading: ${element.readCount}</p>
//     `;
//     articles.appendChild(articleElement);
// });


// // now, we will use our search option. for demo purposes, we will use filter function.
// // first, i will filter the data in accordance with the search option then i will change the html page with the filtered results.

// // because we will use the same method, lets convert our code to a function first.

// function loadArticles() {
//     const articles = document.querySelector("#divArticles");

//     data.forEach( (element) => {
//         const articleElement = document.createElement("div");
//         articleElement.classList.add("article");

//         articleElement.innerHTML = `
//         <p class="title">${element.title}</p>
//         <p>${element.desc}</p>
//         <p class="readingCount">Reading: ${element.readCount}</p>
//         `;
//         articles.appendChild(articleElement);
//     });
// }

// loadArticles();


// // now lets create another function for filtering.

// function loadArticles() {
//     const articles = document.querySelector("#divArticles");

//     data.forEach( (element) => {
//         const articleElement = document.createElement("div");
//         articleElement.classList.add("article");

//         articleElement.innerHTML = `
//         <p class="title">${element.title}</p>
//         <p>${element.desc}</p>
//         <p class="readingCount">Reading: ${element.readCount}</p>
//         `;
//         articles.appendChild(articleElement);
//     });
// }

// function filterArticles() {
//     const countValue = document.querySelector("#inputCounter").value;

//     console.log("countValue: ", countValue);
// }

// document.querySelector("#btnSearch").addEventListener("click", filterArticles);

// // filterArticles();
// loadArticles();


// // now lets improve our code by sending an argument to loadArticles function.
function loadArticles(readingCount) {
    // // lets check the readingCount parameter.
    console.log("readingCount: ", readingCount);
    // // lets create a temporary data set:
    let articleData = data;

    const articles = document.querySelector("#divArticles");
    // // lets clear our innerHTML:
    articles.innerHTML = "";

    // // lets create our contitional and new data set.
    if (readingCount != undefined) {
        articleData = data.filter(art => readingCount < art.readCount);
    }

    console.log("articleData: ", articleData);
    console.log("data: ", data);

    // // lets change data to our new data set.
    // data.forEach( (element) => {
    articleData.forEach((element) => {
        const articleElement = document.createElement("div");
        articleElement.classList.add("article");

        articleElement.innerHTML = `
        <p class="title">${element.title}</p>
        <p>${element.desc}</p>
        <p class="readingCount">Reading: ${element.readCount}</p>
        `;
        articles.appendChild(articleElement);
    });
}

function filterArticles() {
    const countValue = document.querySelector("#inputCounter").value;
    loadArticles(countValue);
    // console.log("countValue: ", countValue);
}

document.querySelector("#btnSearch").addEventListener("click", filterArticles);

loadArticles();

// // what happens if i send text instead of number?
