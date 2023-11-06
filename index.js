const theId = document.querySelector('.id');
const theQuote = document.querySelector('.the-quote');
const theButton = document.querySelector('.generator-b');

const fetchQuote = async () => {
  let firstAwait = await fetch("https://api.adviceslip.com/advice");
  let secondAwait = await firstAwait.json()
  theId.textContent = secondAwait.slip.id;
  theQuote.textContent = secondAwait.slip.advice
}

theButton.addEventListener('click', () => {
  fetchQuote()
})