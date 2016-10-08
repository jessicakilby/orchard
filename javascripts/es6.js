console.log("es6");

//*const cannot be changed

const a = 8;
console.log("a =", a);
// a=12;
// console.log("a =", a);

// const outputDiv = $('#output');

//*let similar to var but only for...is reassignable

let b=8;
console.log("b =", b);
b=12;
console.log("b2 =", b);

function varTest() {
	var x=1;
	if(true) {
		var x=2;
		console.log("inside", x);
	}
	console.log("outside", x);
}
varTest();

function letTest() {
	let y=1;
	if(true) {
		y=12;
		console.log("inside if", y);
	}
	console.log("outside if", y);
}
letTest();

//arrow functions

var sum = function () {
	let a=1, b=2;
	return a+b;
}
console.log("hardcoded sum in es5", sum());

var sum2 = () => {
	let a=1, b=2;
	return a+b;
}
console.log("hardcoded sum2 in es5", sum2());

var reflect = function(value){
	return value;
}
console.log("reflect in es5", reflect('es5 is so yesterday'));

var reflect2 = (value) => {
	return value;
}
console.log("reflect in es6", reflect2('es6 is now the hotness'));

var realSum = function(num1, num2) {
	return num1 + num2;
}
console.log("realSum es5", realSum(2,3));

var realSum2 = (num1, num2) => {
	return num1 + num2;
}
console.log("realSum2 es6", realSum2(4,5));

//*string templates

let m="bite me";
console.log("m", m);
let r= `hello my name is ${m}`;
console.log("r", r);


//object literal property shorthand

let wow="Hi there", es6="es6", numNum = ()=>{console.log("howdy");}

let myOldObject = {
	wow:wow,
	es6:es6,
	numNum:numNum
}
console.log("myOldObject", myOldObject);

let myNewObject = {
	wow, es6
}
console.log("myNewObject", myNewObject);


//method properties

var e5Obj = {
	foo: function() {console.log("foo");},
	bar: function() {console.log("foo");}
}
console.log("e5Obj", e5Obj);

var es6Obj = {
	foo() {console.log("foo");},
	bar() {console.log("bar");}
}
console.log("es6Obj", es6Obj);