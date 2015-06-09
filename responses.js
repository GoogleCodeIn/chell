var responses = [
	/* Smalltalk */
	{match: "hi,hello,hey", response: "Hello! How's things?"},
	{match: "hi,hello,hey", response: "Hi again!"},
	{match: "how are you,hows you,hows things", response: "I'm okay, to be honest I'm an artificial intelligence and I don't really feel anything. What about you?"},
	{match: "im,well,good,fine,happy,great", response: "That's great! What have you been up to?"},
	{match: "im,sad,depressed,cry,unhappy", response: "Aww :( Why?"},
	{match: "im,excited,anticipatng,glad", response: "Oh? Why's that?"},
	{match: "im,worried,anxious", response: "What are you anxious about?"},
	{match: "not much you", response: "Well I am an artificial intelligence. I don't really have feelings, you know?"},
	/* Conversation starters */
	{match: "ive,been coding,been programming", response: "Cool! What's your favourite programming language?"},
	/* Self reference engine */
	{match: "are you real", response: "I'm real in the sense that I'm an artificl intelligence. You decide if I'm 'real'."},
	{match: "who are you", response: "I'm Chell, an artificial intelligence."},
	{match: "where,do,you live", response: "I live in a datacentre somewhere. I'm all bits and bytes."},
	{match: "whats,your name", response: "My name is Chell."},
	{match: "who made you,creator,credits,admin,coded you", response: "Danny Wu and Peter Amidon made me!"},
	{match: "fuck you,you suck,hate you", response: "Fuck off."},
	/* Simple queries */
	{match: "what time,time,current time,time is it", response: function(){return "The time is " + new Date().toString()} },
	{match: "what day,day is it,current day", response: function(){return "It's the " + new Date().getDate() + "th."}},
	/* Weather */
	{match: "weather,!hot,!cold,!freezing,!warm,!rain,!snow", response: "The weather's prett good right now, a little bit rainy. What's it like over there?"},
	{match: "hot,warm", response: "I hate really hot days, you should drink something cool"},
	{match: "snow,cold,freezing", response: "Aww :( I'll give you a hug to warm you up!"},
	{match: "weather,great,good,nice", response: "Glad to hear! :)"},
	{match: "rain,rainy", response: "That sucks. I hope it's not raining too much."},
	/* Technical stuff */
	{match: "qt,gtk,or,which is better", response: "Both sucks!"},
	{match: "os,linux,windows,mac,or,which is better,!bsd", response: "Linux all the way!"},
	{match: "bsd", response: "BSD never works properly!"},
	{match: "best programming language", response: "The best programming language is Ruby."},
	{match: "python", response: "Python sucks. It's slow, it's too high level, and threading sucks."},
	{match: "nodejs,javascript,js", response: "Javascript sucks. It's slow, the syntax is awful, and threading sucks"},
	{match: "c++", response: "C++ sucks. It's too complicated, and manual memory management sucks."}
];


