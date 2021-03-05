	var hourBlocks;
	var currentDay = $("#currentDay");
	var timeBlocks = $(".time-block");
	var descriptions = $('.description');
	var date = $(".display-3");


// 	colorCode();
// 	// get a refernce to all of the save buttons $('.saveBtn')
// 	$(".saveBtn");
// 	// create an array containing the hour blocks
// // loop through the array containing the hours
// function innerTimeBlocks() {

// for (var i = 0; i < hourBlocks.length; i++) {
// 	return hourBlocks[i];
// }
// };
// on click function each of the save buttons
$(".saveBtn").on("click", function () {
	var newText = $(".saveBtn").siblings(".description").val();
	var newTime = $(".saveBtn").parent().attr("id");

	localStorage.setItem(newTime, newText)
});
	// localStorage.getItem(newTime, newText);
// function for current time
// 	function time() {
// 	currentTime = moment().format("hA");
// 	innerTimeBlocks();
// 	colorCode();
// 	return currentTime;
// };
// // function for current day

function colorCode() {
	var currentTime = moment().hour();
	for (let i = 0; i < timeBlocks.length; i++) {
		const element = timeBlocks[i];

		if (element.data("hour") < currentTime) {
			element.removeClass("present");
			element.removeClass("future");
			element.addClass("past");

		} else if (element.data("hour") = currentTime) {
			element.removeClass("past");
			element.removeClass("future");
			element.addClass("present");
		}else {
			element.removeClass("past");
			element.removeClass("present");
			element.addClass("future");
		}
	}
}

// // set items to local storage
// for (var i = 0; i < descriptions.length; i++) {
// 	var key = descriptions[i].attr('id');
// 	descriptions[i].val(localStorage.getItem(key));
// }

var today = moment().format("dddd, MMM Do YYYY, h:mm:ss a");
	date.text(today);

localStorage.getItem("#nine", ".description");
localStorage.getItem("#ten", ".description");
localStorage.getItem("#eleven", ".description");
localStorage.getItem("#twelve", ".description");
localStorage.getItem("#one", ".description");
localStorage.getItem("#two", ".description");
localStorage.getItem("#three", ".description");
localStorage.getItem("#four", ".description");
localStorage.getItem("#five", ".description");

// functions called
// innerTimeBlocks();
colorCode();
setInterval(colorCode, 5000);

// colorCode();

// function colorCode() {
// 	if
// }

// maybe make time block intoa variable for colorcode function
// this keeps yielding undefined

// if current time is before change class to before if pressent present if after after etc.
// ​	$(".timeblock")
// for (let index = 0; index < array.length; index++) {
// 	const element = array[index];
// };


	// add a click handler to each save Button using .on() method

	// 03-Ins_Click-Events and 04-Stu_Click-Events - https://api.jquery.com/on/
// ​
	// traverse the DOM to get values that we need to store in localStorage .parent() .sibling()
	// 07-Ins_Dom-Traversal and 08-Stu_Dom-Traversal - https://api.jquery.com/category/traversing/
	// setItems in localStorage
	// unit 04
// ​
// handle color coding
	// use moment library to get the current hour
	// https://momentjs.com/docs/#/get-set/hour/
// ​
	//  get a refernce to all timeblocks
// ​	$(".timeblock")
// for (let index = 0; index < array.length; index++) {
// 	const element = array[index];
// }

// set items to local storage
// localStorage.setItem("#nine", ".description");
// localStorage.setItem("#ten", ".description");
// localStorage.setItem("#eleven", ".description");
// localStorage.setItem("#twelve", ".description");
// localStorage.setItem("#one", ".description");
// localStorage.setItem("#two", ".description");
// localStorage.setItem("#three", ".description");
// localStorage.setItem("#four", ".description");
// localStorage.setItem("#five", ".description");

// // get items from local storage
// $("#nine").val(localStorage.getItem("#nine"));
// $("#ten").val(localStorage.getItem("#ten"));
// $("#eleven").val(localStorage.getItem("#eleven"));
// $("twelve").val(localStorage.getItem("#twelve"));
// $("#one").val(localStorage.getItem("#one"));
// $("#two").val(localStorage.getItem("#two"));
// $("#three").val(localStorage.getItem("#three"));
// $("#four").val(localStorage.getItem("#four"));
// $("#five").val(localStorage.getItem("#five"));
// 	// loop through the timeblocks
	// **maybe turn them into an array first?
	// unit 03
		// get the data-hour value timeblocks[i].data('hour')
		// if, else - condition we compare the currentHour with the timeBlock < (past), === (present), else (future)
		// unit 03
		// adding or removing (or both) classes
// get the data from localstorage and populate the timeblocks
	// getItem
	// reference to the textarea (id)
	// .val()
	// approach
	// -> $('textarea');
	// -> loop
	// -> get a reference to the id of .parent()
	// -> .val() = localStorage.getItem(parentID)
// current day -> top of calendar
	// moment library - .format()
	// 25-Ins_Moment-Format and 26-Stu_Moment-Format - https://momentjs.com/docs/#/displaying/
// call the colorCoding function
// setInterval -> 15000
// unit 04
// color coding function


// should I wrap my whole code in  $( document ).ready(function() {

    // Your code here.

// });
// mixing and matching js and jquery eg. class list
// onclick versus click
// not all languages can user callbacks
// should I be passing in variabes into functions?
// if js is running at the same time then I shouldn't just call functions
// .each to itirate over arrays and objects
