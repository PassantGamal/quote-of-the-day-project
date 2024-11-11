var Quotes = [
  {author:  `“Be yourself; everyone else is already taken.”`, Quote: `― Oscar Wilde`},
  {author: `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst”`, Quote: `― Marilyn Monroe`},
  {author:  `“So many books, so little time.”`, Quote: `― Frank Zappa`},
  {author:  `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`, Quote: `― Albert Einstein`},
  {author:  `“A room without books is like a body without a soul.”`, Quote: `― Marcus Tullius Cicero`},
  {author:  `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`, Quote: `― Bernard M. Baruch`},
  {author:  `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`, Quote: `― Dr. Seuss`},
  {author:  `“You only live once, but if you do it right, once is enough.”`, Quote: `― Mae West`},
  {author:  `“Be the change that you wish to see in the world.”`, Quote: `― Mahatma Gandhi`},
  {author:  `“In three words I can sum up everything I've learned about life: it goes on.”`, Quote: `― Robert Frost`},
];

var lastUsedIndex = -1; 

function rand() {
    var index;
    do {
        index = Math.floor(Math.random() * Quotes.length);
    } while (index === lastUsedIndex);  
    lastUsedIndex = index;  
    var ele1 = document.getElementById('demo1');
    ele1.innerHTML = Quotes[index].author;
    var ele2 = document.getElementById('demo2');
    ele2.innerHTML = Quotes[index].Quote;
}
