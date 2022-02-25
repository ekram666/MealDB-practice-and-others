const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data));
}

const displayQuote = quote => {
    const quoteElement = document.getElementById('blog');
    quoteElement.innerText = quote.blog;
    console.log(quote.blog);
}


console.log(JSON.stringify({eventName:"birthday", date: Date().tomorrow()}));