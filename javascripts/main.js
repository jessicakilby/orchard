// /*global $*/

"use strict";

let interval = null;
let counter = 1;

const outputDiv = $("#output");
// console.log("main", outputDiv);

// Create a Plant function.
// Plant should have a property of height.
function Plant(){
	this.height = 0;
}

// Create a Tree function.
// Tree should have a property of branches.
function Tree(){
	this.branches = 0;
}

// Plant should be the prototype of Tree.
Tree.prototype = new Plant();

// The Plant prototype should have two methods on it: increaseHeight and decreaseHeight. Each method should accept an integer value as input.
// increaseHeight should increase the value of the height property by the amount passed in as an argument.
// Each time the height of a tree increases by 10, the value of branch should increase by one.
Plant.prototype.increaseHeight = function (growth) {
	for (var i = 0; i < growth; i++) {
		this.height += 1;
		if(this.height%10 === 0) {
			this.branches++;
		}
	}
	// this.height += growth;
};

// decreaseHeight should decrease the value of the height property by the amount passed in as an argument.
Plant.prototype.decreaseHeight = function(growth) {
	this.height -= growth;
};
// The Tree prototype should have two methods on it: grow and trim.
// The grow method should accept an integer value as input.
// The grow method should increase the height of the tree.
Tree.prototype.grow = function (amount) {
	this.increaseHeight(amount);
};

// The trim method should accept an integer value as input.
// The trim method should decrease the height of the tree.
// When the trim method is called, the number of branches should decrease by one.
Tree.prototype.trim = function(amount){
	this.decreaseHeight(amount);
	this.branches -= 1;
};


// Create a PearTree instance of Tree. 
let PearTree = new Tree();

// Create an OakTree instance of Tree.
let OakTree = new Tree();

console.log("PearTree", PearTree);

// Every second, increase the height the pear tree by some integer value and increase the height the oak tree by some integer value that is larger than what you used for the pear tree.
// Also output the current height of each tree and how many branches it has to the DOM.
// Stop growing the trees after they have grown 30 times.
 interval = setInterval(function(){
 	console.log("counter", counter);
 	PearTree.grow(2);
 	OakTree.grow(3);

 	let output = `<p> counter ${counter}</p>`;
 	output += `<p>Pear tree is now ${PearTree.height}cm tall and has ${PearTree.branches} branches</p>`;
 	output += `<p>Oak tree is now ${OakTree.height}cm tall and has ${OakTree.branches} brnaches</p>`;
// Pear tree is now 23cm tall and has 2 branches

// Oak tree is now 57cm tall and has 4 branches

 	outputDiv.append(output);

 	if(counter%10 === 0){
 		PearTree.trim(3);
 		OakTree.trim(5);
 	}

 	counter++;
 	if(counter > 30) {
 		clearInterval(interval);
 		console.log("fishished");
 	}
 	
 }, 1000);



// Every tenth time the trees are grown, invoke the trim method. Pass one value to the method for the pear tree, and a larger value to the method on the oak tree.
