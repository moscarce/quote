const quotes = [
    { quote: "If you want to achieve greatness stop asking for permission.", owner: "Anonymous" },
    { quote: "The only limit to our realization of tomorrow will be our doubts of today.", owner: "Franklin D. Roosevelt" },
    { quote: "The only way to do great work is to love what you do.", owner: "Steve Jobs" },
    { quote: "You are never too old to set another goal or to dream a new dream.", owner: "C.S. Lewis" },
    { quote: "Do not wait to strike till the iron is hot, but make it hot by striking.", owner: "William Butler Yeats" },
    { quote: "Believe you can and you're halfway there.", owner: "Theodore Roosevelt" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", owner: "Winston Churchill" },
    { quote: "The journey of a thousand miles begins with one step.", owner: "Lao Tzu" },
    { quote: "It does not matter how slowly you go, as long as you do not stop.", owner: "Confucius" },
    { quote: "Life is really simple, but we insist on making it complicated.", owner: "Confucius" },
    { quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", owner: "Albert Einstein" },
    { quote: "It's not whether you get knocked down, it's whether you get up.", owner: "Vince Lombardi" },
    { quote: "The purpose of our lives is to be happy.", owner: "Dalai Lama" },
    { quote: "Don't count the days, make the days count.", owner: "Muhammad Ali" },
    { quote: "Success is stumbling from failure to failure with no loss of enthusiasm.", owner: "Winston Churchill" },
    { quote: "Life is what happens when you're busy making other plans.", owner: "Allen Sanders" },
    { quote: "Your time is limited, don't waste it living someone else's life.", owner: "Steve Jobs" },
    { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", owner: "Nelson Mandela" },
    { quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", owner: "Ralph Waldo Emerson" },
    { quote: "In three words I can sum up everything I've learned about life: it goes on.", owner: "Robert Frost" },
    { quote: "The only thing we have to fear is fear itself.", owner: "Franklin D. Roosevelt" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", owner: "Winston Churchill" },
    { quote: "If you want to achieve greatness stop asking for permission.", owner: "Anonymous" },
    { quote: "The only limit to our realization of tomorrow will be our doubts of today.", owner: "Franklin D. Roosevelt" },
    { quote: "The only way to do great work is to love what you do.", owner: "Steve Jobs" },
    { quote: "You are never too old to set another goal or to dream a new dream.", owner: "C.S. Lewis" },
    { quote: "Do not wait to strike till the iron is hot, but make it hot by striking.", owner: "William Butler Yeats" },
    { quote: "Believe you can and you're halfway there.", owner: "Theodore Roosevelt" },
    { quote: "Success is not in what you have, but who you are.", owner: "Bo Bennett" },
    { quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", owner: "Ralph Waldo Emerson" },
    { quote: "The best way to predict the future is to create it.", owner: "Peter Drucker" },
    { quote: "You miss 100% of the shots you don't take.", owner: "Wayne Gretzky" },
    { quote: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.", owner: "Jimmy Dean" },
    { quote: "Success is not in what you have, but who you are.", owner: "Bo Bennett" },
    { quote: "Life is 10% what happens to us and 90% how we react to it.", owner: "Charles R. Swindoll" },
    { quote: "Believe you can and you're halfway there.", owner: "Theodore Roosevelt" },
    { quote: "Don't watch the clock; do what it does. Keep going.", owner: "Sam Levenson" },
    { quote: "Do not wait to strike till the iron is hot, but make it hot by striking.", owner: "William Butler Yeats" },
    { quote: "You are never too old to set another goal or to dream a new dream.", owner: "C.S. Lewis" },
    { quote: "The purpose of our lives is to be happy.", owner: "Dalai Lama" },
    { quote: "It's not whether you get knocked down, it's whether you get up.", owner: "Vince Lombardi" },
  ];

let button = document.querySelector('.newQuote');
function generateCode(){
    let paragraph = document.querySelector('.quote');
    let header = document.querySelector(".owner");
    let index = Math.floor(Math.random() * quotes.length);
    let {quote, owner} = quotes[index];
    paragraph.innerText = quote;
    header.innerText = owner;
}
button.addEventListener('click',generateCode);


