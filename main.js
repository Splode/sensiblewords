// Get day of year and convert to number
var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);
console.log("Today is day number " + day + " out of 365 yeardays.");

// Quote list
var quotes = [
["If you have more than three priorities, then you don't have any.", "Jim Collins"],
["Be patient. Nothing worth doing is worth doing quickly. Nothing worth building is worth building in a rush. Nothing of value is formed in a minute.", "Nic Haralambous"],
["Be the change that you wish to see in the world.", "Mahatma Gandhi"],
["It is the way one treats his inferiors more than the way he treats his equals which reveals one’s real character.", "Charles Bayard Miliken"],
["Live as if you were to die tomorrow. Learn as if you were to live forever.", "Mahatma Gandhi"],
["Far better it is to dare mighty things, to win glorious triumphs, even though checkered by failure, than to take rank with those poor spirits who neither enjoy much nor suffer much, because they live in the gray twilight that knows neither victory nor defeat.", "Theodore Roosevelt"],
["To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", "Ralph Waldo Emerson"]
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
       $("h1#quote").animate({"opacity": 0}, 250, function() {
           $("h1#quote").text(quotes[yesterday][0]);
       }).animate({"opacity": 1}, 1000);
		$("h2#author").animate({"opacity": 0}, 250, function() {
           $("h2#author").text(quotes[yesterday][1]);
       }).animate({"opacity": 1}, 1000);
    active = 1;
}

//Today's Quote
function getToday() {
       $("h1#quote").animate({"opacity": 0}, 250, function() {
           $("h1#quote").text(quotes[today][0]);
       }).animate({"opacity": 1}, 1000);
		$("h2#author").animate({"opacity": 0}, 250, function() {
           $("h2#author").text(quotes[today][1]);
       }).animate({"opacity": 1}, 1000);
    active = 0;
}

//console.log(quotes[dayNumber][0]);
//console.log(quotes[dayNumber][1]);
console.log("The current date is: " + weekday);
console.log("Today is day number " + dayNumber + " out of 7 weekdays.");

// Primary jQuery Functions
$(document).ready(function() {
	
	//Establish daily quote
    $("h1#quote").text(quotes[dayNumber][0]);
    $("h2#author").text(quotes[dayNumber][1]);
    
    // Yesterday button
    $('div#yesterday').click (function() {
        if(active != 1) {
       getYesterday();
	  $("div#yesterday").addClass("button-active");
	  $("div#today").removeClass("button-active");
        }
    });
    
    // Today button
    $('div#today').click(function() {
        if(active != 0) {
       getToday();
	  $("div#today").addClass("button-active");
	  $("div#yesterday").removeClass("button-active");
        }
    });
    
    //smooth scroll
   $('a').click(function(){
	$('html, body').animate({
		scrollTop: $( $(this).attr('href') ).offset().top
    }, 750);
    return false;
	});
    
})