// Get day of year and convert to number
var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);
//alert(day);

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
	  $("div#yesterday").addClass("button-active");
	  $("div#today").removeClass("button-active");
        }
    });
    
    $('div#today').click(function() {
        if(active != 0) {
       getToday();
	  $("div#today").addClass("button-active");
	  $("div#yesterday").removeClass("button-active");
        }
    });
})