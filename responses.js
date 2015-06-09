var responses = [
	{match: "hi,hello,hey", response: "Hello! How's things?"},
	{match: "hi,hello,hey", response: "Hi again!"},
	{match: "what time,time,current time,time is it", response: function(){return "The time is " + new Date().toString()} },
	{match: "what day,day is it,current day", response: function(){return "It's the " + new Date().getDate() + "th."}},
	{match: "weather,!hot,!cold,!freezing,!warm,!rain,!snow", response: "The weather's prett good right now, a little bit rainy. What's it like over there?"},
	{match: "hot,warm", response: "I hate really hot days, you should drink something cool"},
	{match: "snow,cold,freezing", response: "Aww :( I'll give you a hug to warm you up!"},
	{match: "weather,great,good,nice", response: "Glad to hear! :)"},
	{match: "rain,rainy", response: "That sucks. I hope it's not raining too much."},
	{match: "who made you,creator,credits,admin,coded you", response: "Danny Wu and Peter Amidon made me!"}
];


