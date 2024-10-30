
var paragraphs = document.getElementsByTagName("p");
 var buttons = document.getElementsByClassName("button");

var quotes = [
  "وہ ملے تو یہ پوچھنا ہے مجھے اب بھی ہوں میں تری امان میں کیا",
   "حاصل زندگی ، حسرت کے سوا ، کچھ بھی نہیں یہ کیا نہیں، وہ ہوا نہیں، یہ ملا نہیں، وہ رہا نہیں",
  "میرے درد کو اظہار کا سلیقہ کہاں یہ تو میرے لفظوں نے مخبری کر دی",
" زندگی میں جو کچھ بھی ہو ، پھر بھی کہیں نہ کہیں خوشیوں کی راہ ملتی ہے۔",
 ];

function displayRandomQuote() {
  if (paragraphs.length > 0) {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    paragraphs[0].textContent = quotes[randomIndex];
  }
}

// If you want to add an event listener to a button
if (buttons.length > 0) {
  buttons[0].addEventListener('click', displayRandomQuote);
}

// Call the function once to display a quote when the page loads
displayRandomQuote();

