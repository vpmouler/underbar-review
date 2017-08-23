// //underbar.js

// var array = [2,3,4];
// var slice = array.slice(0,2);

// console.log(slice);


//         var iterations = [];
//         var letters = ['a', 'b', 'c'];
//         letters.someProperty = 'Do not iterate over me!';
//         letters[4] = 'asddf';
//         letters.aProp = 'A bt'
//         letters = ['a', 'b', 'c',letters.someProperty];

//         console.log(letters[3]);


// // var obj = {name: 'bob', age:25, age2: 26};

// // obj.reduce(function(ele) {
// // 	return;
// // })

// console.log(array.slice(1));

var arrayReduce = [1,2,3,4]; // sum of all arrayReduce = 10;

console.log(arrayReduce.reduce(function(start, element) {
	console.log('start', start);
	console.log('ele', element);
	return element + start;
}));

function reduce(array, start, iterator) {
	for ( var i = 0; i < array.length; i++ ) {
		start = iterator(start, array[i]);
	}
	return start;

};

console.log(reduce(arrayReduce, 0, function(start, element) {
	return element + start;
}));


// var reduce = function(collection, iterator, accumulator) {
//     if ( accumulator === undefined ) {
//       accumulator = collection[0];
//       collection.slice(1).forEach(function(element, accumulator) {
//         accumulator = accumulator + iterator(element);
//       })
//       return accumulator;
//     } else {
//       collection.forEach(function(element, accumulator) {
//         accumulator = iterator(element, accumulator);
//       })
//       return accumulator;
//     }
//   };

//   console.log(reduce(arrayReduce, function(start, element) {
//   	return start + element;
//   }));