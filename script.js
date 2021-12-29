const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');


let apiQuotes =[];

// Show loading
function loading(){
    loader.hidden=false;
    quoteContainer.hidden=true;
}

// hide loading
function complete(){
    loader.hidden=true;
    quoteContainer.hidden=false;
}

//Show new Quote
function newQuote(){
  loading();
    // pick a random quote from array
    const quote=apiQuotes[Math.floor(Math.random()* apiQuotes.length)];
    // to fetch local quotes
    // const quote=localQuotes[Math.floor(Math.random()* localQuotes.length)];
    // check if author field is blank and replace with quote unknown

    if(!quote.author){ authorText.textContent='Unknown';}
    else{authorText.textContent = quote.author;}

    // check quote length to determine styling
    if (quote.text.length>120){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');

    }
    //set Quote and Hide loader
   quoteText.textContent=quote.text;
   complete();
}


// Get Quotes from API
async function getQuotes(){
    loading();
    const apiUrl ='https://type.fit/api/quotes';
    try{
        const response = await fetch (apiUrl);
        apiQuotes=await response.json();
        newQuote();
    }catch(error){
        // catch Error here
    }
}

// To Tweet a Quote
function tweetQuote(){
    const twitterUrl =`https://twitter.com/intent/tweet?text="${quoteText.textContent}" - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

//Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On Load
getQuotes();