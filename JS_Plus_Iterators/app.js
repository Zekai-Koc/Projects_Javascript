
// // MAPs

// let map = new Map();

// map.set('1', 'str1'); // a string key
// map.set(1, 'num1'); // a numeric key
// map.set(true, 'bool1'); // a boolean key

// // console.log(map);

// // // remember the regular Object? it would convert keys to string
// // // Map keeps the type, so these two are different:
// // console.log(map.get('1')); // 'str1'
// // console.log(map.get(1)); // 'num1'
// // console.log(map.get(true)); // 'str1'

// // console.log(map.size); // 3

// // // using square brackets is possible but wrong...
// // let wrongMap = new Map();
// // wrongMap['bla'] = 'blaa';
// // wrongMap['bla2'] = 'blaaa2';
// // wrongMap['bla3'] = 333;

// // console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }
// // console.log(wrongMap.has('bla')); // false
// // console.log(wrongMap.size); // 0
// // // we can access the values by using:
// // console.log(wrongMap['bla']);
// // console.log(wrongMap.bla2);
// // // however, this is not a valid way. always use get method.


// // // let's check the types of each key in our map:
// // for (key of map.keys()) console.log("key: ", key, " type of key: ", typeof key);
// // console.log("----------------");
// // for (key of wrongMap.keys()) console.log("key: ", key, " type of key: ", typeof key);
// // console.log("----------------");

// // // because this is an object, we can check its keys with object methods...
// // for (key of Object.keys(wrongMap)) console.log("key: ", key, " type of key: ", typeof key);


// // we can define functions as keys as well...
// map.set('add', function (x, y) {
//     return x + y;
// });


// const test = (x, y) => x + y;
// map.set(11, test); // a numeric key


// console.log("new key from function: ", map.get('add')(5, 6));

// let addition = map.get("add");
// console.log("addition: ", addition(11, 22));

// for (key of map.keys()) console.log("key: ", key, " type of key: ", typeof key);
// for (val of map.values()) console.log("val: ", val, " type of key: ", typeof val);
// // we can check elements/items by using the similar syntax: we are getting arrays of elements as key/value pairs.
// for (let item of map) console.log("item: ", item);

// // Let's destructiring the elements/items:
// for (let [key, value] of map) console.log("key-value: ", key, value);

// // lets try to see the pairs by using foreach:
// map.forEach((myvalue, mykey) => console.log("foreach: value/key: ", myvalue, mykey));


// /* *************************************** */
// /*  additional section  */
// let map = new Map();
// let john = { name: 'John' };
// let ben = { name: 'Ben' };
// // for every user, let's store their visits count
// // john is the key for the map
// map.set(john, 123);
// console.log(map.get(john));
// console.log(map[john]);
// map[ben] = 234;
// map[john] = 123;
// console.log(map[ben]);

// let recipeMap = new Map([
//     ['cucumber', 500],
//     ['tomatoes', 350],
//     ['onion', 50],
// ]);

// // iterate over keys (vegetables)
// for (let vegetable of recipeMap.keys()) {
//     console.log(vegetable); // cucumber, tomatoes, onion
// }

// // iterate over values (amounts)
// for (let amount of recipeMap.values()) {
//     console.log(amount); // 500, 350, 50
// }

// // iterate over [key, value] entries
// for (let entry of recipeMap) {
//     // the same as of recipeMap.entries()
//     console.log(entry); // cucumber,500 (and so on)
// }

// // runs the function for each (key, value) pair
// recipeMap.forEach((value, key) => {
//     console.log(`${key}: ${value}`); // cucumber: 500 etc
// });

// /* *************************************** */




// // ----------------------------------
// // SET
// // ---------------------------------

// const mySet1 = new Set();

// mySet1.add(1); // Set [ 1 ]
// mySet1.add(5); // Set [ 1, 5 ]
// mySet1.add(5); // Set [ 1, 5 ]
// mySet1.add('some text'); // Set [ 1, 5, 'some text' ]
// const o = { a: 1, b: 2 };
// mySet1.add(o);

// // console.log(mySet1);

// mySet1.add({ a: 1, b: 2 }); // o is referencing a different object, so this is okay

// console.log("mySet1.has(1): ", mySet1.has(1)); // true
// console.log("mySet1.has(3): ", mySet1.has(3)); // false
// console.log("mySet1.has(Math.sqrt(25)): ", mySet1.has(Math.sqrt(25))); // true
// console.log("mySet1.has('Some Text'.toLowerCase()): ", mySet1.has('Some Text'.toLowerCase())); // true
// console.log("mySet1.has(o): ", mySet1.has(o)); // true
// console.log("mySet1.size: ", mySet1.size);

// mySet1.delete(5); // removes 5 from the set
// console.log("mySet1.has(5): ", mySet1.has(5)); // false, 5 has been removed

// // mySet1.size; // 4, since we just removed one value

// console.log(mySet1);
// console.log("mySet1.size: ", mySet1.size);

// for (let myV of mySet1) console.log("myV: ", myV);

// // be careful with foreach method. because sets have no pairs, each value and index will be same...
// mySet1.forEach((val, ind) => console.log("val/ind: ", val, ind));

// // logs Set(4) [ 1, "some text", {…}, {…} ] in Firefox
// // logs Set(4) { 1, "some text", {…}, {…} } in Chrome

// // Iteration over Set
// let set = new Set(['oranges', 'apples', 'bananas']);

// for (let value of set) console.log(value);

// // the same with forEach:
// set.forEach((value, i) => {
//     console.log(value, i);
// });



// Anagrams are words that have the same number of same letters, but in different order.
// nap - pan
// ear - are - era
// cheaters - hectares - teachers

// const arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

// function cleanArr(arr) {
//     let map = new Map();

//     for (let value of arr) {
//         let key = value.toLowerCase().split('').sort().join('');

//         // let key = value.toLowerCase().split('');
//         // console.log(key);
//         // key = value.toLowerCase().split('').sort();
//         // console.log(key);
//         // key = value.toLowerCase().split('').sort().join('');
//         // console.log(key);

//         map.set(key, value);
//         // console.log(map);
//     }

//     return map.values();
// }

// console.log("cleanArr(arr): ", cleanArr(arr));


// // ************ another way !!!
// const arr2 = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

// function cleanArr(arr2) {
//     let map = new Map();

//     for (let value of arr2) {
//         let key = value.toLowerCase().split('').sort().join('');
//         console.log(key);

//         if (map.has(key)) {
//             const newItem = map.get(key);
//             newItem.push(value);
//             map.set(key, newItem);
//         }
//         else {
//             map.set(key, [value]);
//         }
//     }

//     return map.values();
//     // return Array.from(map.values());
// }

// console.log("cleanArr(arr2): ", cleanArr(arr2));





// --------------------------------------
// Array.from()
// --------------------------------------

// Array.from(arrayLike, function mapFn(currentValue, index, array) { ... }, thisArg)

// // string
// console.log(Array.from('foo'));
// // [ "f", "o", "o" ]

// const set = new Set(['foo', 'bar', 'baz', 'foo', "bar", "foo"]);
// console.log(Array.from(set));
// // [ "foo", "bar", "baz" ]

// const map = new Map([
//     [1, 2],
//     [2, 4],
//     [4, 8],
// ]);
// console.log(Array.from(map));
// // [[1, 2], [2, 4], [4, 8]]
// console.log("Array.from(map.values()): ", Array.from(map.values()));
// console.log("Array.from(map.keys()): ", Array.from(map.keys()));

// // const mapper = new Map([
// //     ['1', 'a'],
// //     ['2', 'b'],
// // ]);
// // Array.from(mapper.values());
// // // ['a', 'b'];

// // Array.from(mapper.keys());
// // // ['1', '2'];

// // nodelist
// const savings = Array.from(document.querySelectorAll('.savings'));
// console.log("savings: ", savings);

// const movementsUI = Array.from(document.querySelectorAll('.savings'), (el) =>
//     Number(el.textContent.replace('$', ''))
// );
// console.log(movementsUI);

// // Using an arrow function as the map function to
// // manipulate the elements

// console.log(Array.from([1, 2, 3], (x) => x * x));

// // Generate a sequence of numbers
// // Since the array is initialized with `undefined` on each position,
// // the value of `v` below will be `undefined`

// const arr1 = Array(5);
// arr1[0] = 'Barry';
// console.log(arr1);


// console.log(Array.from(Array(5)));
// console.log(Array.from({ length: 5 }));
// console.log(Array.from({ length: 5 }, (value, i) => i));
// console.log(Array.from({ length: 5 }, (_, i) => i));
// [0, 1, 2, 3, 4]

// Sequence generator function (commonly referred to as "range", e.g. Clojure, PHP etc)
// const range = (start, stop, step) =>
//     Array.from(
//         { length: Math.ceil((stop - start) / step) },
//         (_, i) => start + i * step
//     );

// // Generate numbers range 0..4
// console.log("range(0, 4, 1): ", range(0, 4, 1));
// // [0, 1, 2, 3]

// // Generate numbers range 1..10 with step of 2
// console.log("range(1, 10, 2): ", range(1, 10, 2));
// // [1, 3, 5, 7, 9]



// // ----------------------------
// // ITERATORS
// // ----------------------------


// function idMaker() {
//     let index = 0;
//     return {
//       next: function() {
//         return {
//           value: index++,
//           done: false
//         };
//       }
//     };
//   }
  
//   const it = idMaker();
  
//   console.log(it.next().value); // '0'
//   console.log(it.next().value); // '1'
//   console.log(it.next().value); // '2'
//   // ...
  

// function makeRangeIterator(start = 0, end = Infinity, step = 1) {
//     let nextIndex = start;
//     let iterationCount = 0;
//     const rangeIterator = {
//         next: function () {
//             let result;
//             if (nextIndex < end) {
//                 result = { value: nextIndex, done: false };
//                 nextIndex += step;
//                 iterationCount++;
//                 return result;
//             }
//             return { value: iterationCount, done: true };
//         },
//     };
//     return rangeIterator;
// }

// const it = makeRangeIterator(1, 10, 2);

// let result = it.next();
// while (!result.done) {
//     console.log(result.value); // 1 3 5 7 9
//     result = it.next();
// }

// console.log('Iterated over sequence of size: ', result.value); // [5 numbers returned, that took interval in between: 0 to 10]

// // ----------------------------
// // GENERATORS
// // ----------------------------


// function* idMaker() {
//     let index = 0;
//     while (true) {
//       yield index++;
//     }
//   }
  
//   const it = idMaker()
  
//   console.log(it.next().value); // '0'
//   console.log(it.next().value); // '1'
//   console.log(it.next().value); // '2'
//   // ...

  
// function* generateSequence() {
//     yield 1;
//     console.log('I start working from here');
//     yield 2;
//     yield 3;
// }

// const genSeq = generateSequence();

// console.log(genSeq);

// let item = genSeq.next();

// while (!item.done) {
//     console.log(item);
//     item = genSeq.next();
// }

// console.log(item);

// console.log(Array.from(generateSequence()));

// function* makeRangeIterator(start = 0, end = 100, step = 1) {
//     let iterationCount = 0;
//     let currentVal = start;
//     while (currentVal < end) {
//         iterationCount++;
//         yield currentVal;
//         currentVal += step;
//     }

//     // for (let i = start; i < end; i += step) {
//     //     iterationCount++;
//     //     yield i;
//     // }
//     return iterationCount;
// }

// const it = makeRangeIterator(1, 10, 2);

// let result = it.next();
// while (!result.done) {
//     console.log(result.value); // 1 3 5 7 9
//     result = it.next();
// }

// console.log('Iterated over sequence of size: ', result.value); // [5 numbers returned, that took interval in between: 0 to 10]

// const arr = Array.from(makeRangeIterator(1, 10, 2));

// console.log(arr);

// /*
// function* countAppleSales() {
//     let saleList = [3, 7, 5];
//     for (let i = 0; i < saleList.length; i++) {
//         yield saleList[i];
//     }
// }

// let appleStore = countAppleSales(); // Generator { }
// console.log(appleStore.next()); // { value: 3, done: false }
// console.log(appleStore.next()); // { value: 7, done: false }
// console.log(appleStore.next()); // { value: 5, done: false }
// console.log(appleStore.next()); // { value: undefined, done: true }
// */
// /*
// function* sequenceGenerator(minVal, maxVal) {
//     let currVal = minVal;

//     while (currVal < maxVal) yield currVal++;
// }

// const it2 = sequenceGenerator(1, 10);
// console.log(it2);

// console.log(Array.from(sequenceGenerator(1, 10)));
// */



// const myFavouriteAuthors = {
//     allAuthors: {
//       fiction: [
//         'Agatha Christie', 
//         'J. K. Rowling',
//         'Dr. Seuss'
//       ],
//       scienceFiction: [
//         'Neal Stephenson',
//         'Arthur Clarke',
//         'Isaac Asimov', 
//         'Robert Heinlein'
//       ],
//       fantasy: [
//         'J. R. R. Tolkien',
//         'J. K. Rowling',
//         'Terry Pratchett'
//       ],
//     },
//     [Symbol.iterator]() {
//       // Get all the authors in an array
//       const genres = Object.values(this.allAuthors);
      
//       // Store the current genre and author index
//       let currentAuthorIndex = 0;
//       let currentGenreIndex = 0;
      
//       return {
//         // Implementation of next()
//         next() {
//           // authors according to current genre index
//           const authors = genres[currentGenreIndex];
          
//           // doNotHaveMoreAuthors is true when the authors array is exhausted.
//           // That is, all items are consumed.
//           const doNothaveMoreAuthors = !(currentAuthorIndex < authors.length);
//           if (doNothaveMoreAuthors) {
//             // When that happens, we move the genre index to the next genre
//             currentGenreIndex++;
//             // and reset the author index to 0 again to get new set of authors
//             currentAuthorIndex = 0;
//           }
          
//           // if all genres are over, then we need tell the iterator that we 
//           // can not give more values.
//           const doNotHaveMoreGenres = !(currentGenreIndex < genres.length);
//           if (doNotHaveMoreGenres) {
//             // Hence, we return done as true.
//             return {
//               value: undefined,
//               done: true
//             };
//           }
          
//           // if everything is correct, return the author from the 
//           // current genre and incerement the currentAuthorindex
//           // so next time, the next author can be returned.
//           return {
//             value: genres[currentGenreIndex][currentAuthorIndex++],
//             done: false
//           }
//         }
//       };
//     }
//   };
  
//   for (const author of myFavouriteAuthors) {
//     console.log(author);
//   }
  
//   console.log(...myFavouriteAuthors)





////////////////////////////


// // Iterators example

// const userNamesGroupedByLocation = {
//     Tokio: [
//       'Aiko',
//       'Chizu',
//       'Fushigi',
//     ],
//     'Buenos Aires': [
//       'Santiago',
//       'Valentina',
//       'Lola',
//     ],
//     'Saint Petersburg': [
//       'Sonja',
//       'Dunja',
//       'Iwan',
//       'Tanja',
//     ],
//   };
  
//   // We can't use arrow functions here because this wouldn't let us access the scope of the object ("this").
//   userNamesGroupedByLocation[Symbol.iterator] = function() {
//     const cityKeys = Object.keys(this);
//     let cityIndex = 0;
//     let userIndex = 0;
  
//     return {
//       next: () => {
//         // We already iterated over all cities
//         if (cityIndex > cityKeys.length - 1) {
//           return {
//             value: undefined,
//             done: true,
//           };
//         }
  
//         const users = this[cityKeys[cityIndex]];
//         const user = users[userIndex];
        
  
//         const isLastUser = userIndex >= users.length - 1;
//         if (isLastUser) {
//           // Reset user index
//           userIndex = 0;
//           // Jump to next city
//           cityIndex++
//         } else {
//           userIndex++;
//         }
  
//         return {
//           done: false,
//           value: user,        
//         };
//       },
//     };
//   };
  
  
//   const iterator = userNamesGroupedByLocation[Symbol.iterator]();
  
//   let state = iterator.next();
//   console.log(state.value, state.done);
//   state = iterator.next();
//   console.log(state.value, state.done);
//   state = iterator.next();
//   console.log(state.value, state.done);
//   state = iterator.next();
//   console.log(state.value, state.done);
//   state = iterator.next();
//   console.log(state.value, state.done);
//   state = iterator.next();
//   console.log(state.value, state.done);
//   state = iterator.next();
//   console.log(state.value, state.done);
//   state = iterator.next();
//   console.log(state.value, state.done);
//   state = iterator.next();
//   console.log(state.value, state.done);
//   state = iterator.next();
//   console.log(state.value, state.done);
//   state = iterator.next();
//   console.log(state.value, state.done);
//   state = iterator.next();
//   console.log(state.value, state.done);
  
  
//   for (let name of userNamesGroupedByLocation) {
//    console.log('name', name);
//   }
  
  
  // Generator examples
  
//   function* nameGenerator() {
//     yield 'Iwan';
//     yield 'Aiko';
//   }
  
//   function* stringGenerator() {
//     yield* nameGenerator();
//     yield* ['one', 'two'];
//     yield 'hi';
//     yield 'hi';
//     yield 'hi';
//   }
  
  /*
  const strings = stringGenerator();
  
  
  console.log(strings.next());
  console.log(strings.next());
  console.log(strings.next());
  console.log(strings.next());
  console.log(strings.next());
  console.log(strings.next());
  console.log(strings.next());
  */
  
//   function* overrideValue() {
//     const result = yield 'hi';
//     console.log(result);
//   }
  
//   const overrideIterator = overrideValue();
//   overrideIterator.next();
//   overrideIterator.next('bye');
  
  
//   function* idGenerator() {
//     let i = 0;
//     while (true) {
//       yield i++;
//       console.log(i);
//     }
//   }
  
  
//   const ids = idGenerator();
  
//   console.log(ids.next().value);
//   console.log(ids.next().value);
//   console.log(ids.next().value);
//   console.log(ids.next().value);
//   console.log(ids.next().value);
  
  
//   function* errorGenerator() {
//     try {
//       yield 'one';
//       yield 'two';
//     } catch(e) {
//       console.error(e);
//     }
//   }
  
//   const errorIterator = errorGenerator();
  
//   console.log(errorIterator.next()); 
//   console.log(errorIterator.throw('Bam!'));
  
//   // {value: 'one', done: false}
//   // Bam!
//   // {value: undefined, done: true}