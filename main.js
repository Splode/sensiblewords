// Get day of year and convert to number
var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);
//alert(day);

// Quote list
var quotes = [
	["Quote 1", "Author 1"],
	["If you have more than three priorities, then you don't have any.", "- Jim Collins"],
	["Simpflify, simplify, simplify.", "- Henry David Thoreau"],
	["Quote 4", "Author 4"],
	["Quote 5", "Author 5"],
	["Quote 6", "Author 6"],
	["Quote 7", "Author 7"]
];

// Get day of week and convert to number
var weekday = new Date();
var dayNumber = weekday.getDay();
var today = dayNumber;
var yesterday = today -1;
var active = 0;

//Ensure yesterday always hits
if(yesterday < 0) {
	yesterday = 0;
}

//Yesterday's Quote
function getYesterday() {
       $("h1#quote").animate({"opacity": 0}, 500, function() {
           $("h1#quote").text(quotes[yesterday][0]);
       }).animate({"opacity": 1}, 1000);
		$("h2#author").animate({"opacity": 0}, 500, function() {
           $("h2#author").text(quotes[yesterday][1]);
       }).animate({"opacity": 1}, 1000);
    active = 1;
}

//Today's Quote
function getToday() {
       $("h1#quote").animate({"opacity": 0}, 500, function() {
           $("h1#quote").text(quotes[today][0]);
       }).animate({"opacity": 1}, 1000);
		$("h2#author").animate({"opacity": 0}, 500, function() {
           $("h2#author").text(quotes[today][1]);
       }).animate({"opacity": 1}, 1000);
    active = 0;
}

//alert(quotes[dayNumber][0]);
//alert(quotes[dayNumber][1]);
//alert(weekday);
//alert(dayNumber);

$(document).ready(function() {
    $("h1#quote").text(quotes[dayNumber][0]);
    $("h2#author").text(quotes[dayNumber][1]);
    
    $('div#yesterday').click (function() {
        if(active != 1) {
       getYesterday();
        }
    });
    
    $('div#today').click(function() {
        if(active != 0) {
       getToday();
        }
    });
})