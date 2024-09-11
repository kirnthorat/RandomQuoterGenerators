var quotes = [
    {
    quote:"Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind.",
    source: '-Dr. Seuss'
    },
    {
    quote:'Every successful person has painful story,every painful story has successful ending, so accept the pain and get ready for the success',
    source:'- Omkar Tupkari'
    },
    {
    quote: "This too, shall pass.",
    source: "Anonymous"
    },
    {
    quote: "Keep your eyes on the stars and your feet on the ground.",
    source: "Theodore Roosevelt"
    },
    {
    quote: "The only person you should try to be better than is the person you were yesterday.",
    source: "Anonymous"
    },
    {
    quote: "Never be bullied into silence. Never allow yourself to be made a victim. Accept no one's definition of your life; define yourself.",
    source: "Harvey Fierstein"
    },
    {
    quote: "Faith is the art of holding on to things your reason has once accepted, in spite of your changing moods.",
    source: "C.S. Lewis"
    },
    {
    quote: "A man who flies from his fear may find that he has only taken a shortcut to meet it.",
    source: "Sador", 
    },
    {
    quote:  "Life's too mysterious to take too serious.",
    source: "Mary Engelbreit"
    },
    {
    quote: "No one can make you feel inferior without your consent.",
    source: "Eleanor Roosevelt"
    },
    {
    quote: "The woman who follows the crowd will usually go no further than the crowd. The woman who walks alone is likely to find herself in places no one has been before.",
    source: "Albert Einstein"
    },
    {
    quote: "You can't go around building a better world for people. Only people can build a better world for people. Otherwise it's just a cage.",
    source: "Terry Pratchett", 
    },
    {
    quote: "There isn't a way things should be. There's just what happens, and what we do.",
    source: "Terry Pratchett",  
    },
    {
    quote: "It's not about how hard you can hit; it's about how hard you can get hit and keep moving forward.",
    source: "Rocky Balboa",
    },
    {
    quote: "More fuck yeah, less fuck that.",
    source: "Anonymous"
    },
    {
    quote: "If you want to go fast, go alone. If you want to go far, go together.",
    source: "African proverb"
    },
    {
    quote: "It's OK to not be OK, as long as you don't stay that way.",
    source: "Anonymous"
    },
];

const quoteEl = document.getElementById('quote');
const sourceEl =  document.getElementById('source');

function getRandomQuote (){
var randomNumber = Math.floor(Math.random()*(quotes.length)); 
var randomQuote = quotes[randomNumber];
return randomQuote;
}

function printQuote(){
var quotes = getRandomQuote();
quoteEl.innerHTML = `${quotes.quote}`;
sourceEl.innerHTML = `${quotes.source}`;
}