let lastRandomIndex=-1;
let quotes=[
    {
        id:0,
        author:"Dr. Martin Luther King, Jr",
        quote:"If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward." 
    },
    {
        id:1,
        author:"Maya Angelou",
        quote:"Do the best you can until you know better. Then when you know better, do better."
    },
    {
        id:2,
        author:"James Baldwin",
        quote:"Those who say it can’t be done are usually interrupted by others doing it."
    },
]

function getRandom(quotes) {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random()*quotes.length);
    } while (randomIndex === lastRandomIndex);
    lastRandomIndex = randomIndex;
    return randomIndex;
    
}

function domdisplay(){
const quoteSection = document.getElementById('aa');
const quoteDisplay = document.getElementById('bb');
const randomIndex=getRandom(quotes)
const randomQ=quotes[randomIndex]
bb.textContent=` ${randomQ.quote} - ${randomQ.author}.`
}

const btn=document.getElementById("btn")
btn.addEventListener("click",domdisplay)

function space(){
const currentQuote = document.getElementById("bb").textContent;
const charCount = currentQuote.replace(/\s/g, '').length;   
alert(`Character Count (Excluding Spaces): ${charCount}`)
}

const btnword=document.getElementById("spaceincluded")
btnword.addEventListener("click",space)

function notspace (){
    const currentQuote = document.getElementById("bb").textContent;
    const charCount = currentQuote.length;   
    alert(`Character Count (Including Spaces): ${charCount}`)
}

const notS=document.getElementById("NOTincluded")
notS.addEventListener("click",notspace)


function word(){
    const currentQuote = document.getElementById("bb").textContent;
    const wordCount = currentQuote.split(/\s+/).filter((word) => word !== '').length;
    alert(`Word Count: ${wordCount}`);
}

const words=document.getElementById("words")
words.addEventListener("click",word)

function likeBtn(){
    const randomIndex = previousQuoteIndex;
    if (randomIndex !== -1) {
        quotes[randomIndex].likes += 1;
        console.log(quotes);
    }
}

const like=document.getElementById("like")
like.addEventListener("click",likeBtn)


const quoteList = document.getElementById("bb");
const authorList = document.getElementById("search");
const prevButton = document.getElementById("PreviousBtn");
const nextButton = document.getElementById("nextBtn");

let filteredQuotes = [];
let currentQuoteIndex = 0;

// filterButton.addEventListener("click", filterQuotesByAuthor);
prevButton.addEventListener("click", showPreviousQuote);
nextButton.addEventListener("click", showNextQuote);

function filterQuotesByAuthor() {
  const filterAuthorName = filterAuthorInput.value.trim().toLowerCase();
  filteredQuotes = arrayOfQuotes.filter(
    (quote) => quote.author.toLowerCase() === filterAuthorName
  );
  currentQuoteIndex = 0;
  displayFilteredQuotes();
}


function displayFilteredQuotes() {
    const quoteDisplay = document.getElementById("quoteDisplay");
    const authorDisplay = document.getElementById("authorDisplay");
    if (filteredQuotes.length === 0) {
      quoteDisplay.innerText = "No quotes found for the specified author";
      authorDisplay.innerText = "";
      return;
    }
    const currentQuote = filteredQuotes[currentQuoteIndex];
    quoteDisplay.innerText = `${currentQuote.quote}`;
    authorDisplay.innerText = `${currentQuote.author}`;
  } 


function showNextQuote() {
    if (filteredQuotes.length === 0) return;
    currentQuoteIndex = (currentQuoteIndex + 1) % filteredQuotes.length;
    displayFilteredQuotes();
  }

  function showPreviousQuote() {
    if (filteredQuotes.length === 0) return;
    currentQuoteIndex =
      (currentQuoteIndex - 1 + filteredQuotes.length) % filteredQuotes.length;
    displayFilteredQuotes();
  }


console.log(getRandom(quotes));

