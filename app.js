// Load words
let cards = JSON.parse(localStorage.getItem("cards")) || [
  {dutch:"het boek", english:"the book", correct:0, wrong:0},
  {dutch:"drinken", english:"to drink", correct:0, wrong:0},
  {dutch:"lopen", english:"to walk", correct:0, wrong:0},
  {dutch:"eruitzien", english:"to look", correct:0, wrong:0},
  {dutch:"geven", english:"to give", correct:0, wrong:0},
  {dutch:"horen", english:"to hear", correct:0, wrong:0},
  {dutch:"huilen", english:"to cry", correct:0, wrong:0}
];

let i = 0;
let flipped = false;

// Flashcards
function showCard() {
  document.getElementById("card").innerText =
    flipped ? cards[i].english : cards[i].dutch;
}
function flipCard() {
  flipped = !flipped;
  showCard();
}
function nextCard() {
  i = Math.floor(Math.random() * cards.length);
  flipped = false;
  showCard();
}

// Add word
function addWord() {
  let d = document.getElementById("dutch").value;
  let e = document.getElementById("english").value;
  if (!d || !e) return;
  cards.push({dutch:d, english:e, correct:0, wrong:0});
  save();
  alert("Added!");
}

// Speak Dutch
function speak() {
  let msg = new SpeechSynthesisUtterance(cards[i].dutch);
  msg.lang = "nl-NL";
  speechSynthesis.speak(msg);
}

// Typing quiz
function newQuiz() {
  i = Math.floor(Math.random() * cards.length);
  document.getElementById("quiz").innerText = cards[i].dutch;
  document.getElementById("answer").value = "";
}
function checkAnswer() {
  let ans = document.getElementById("answer").value.toLowerCase().trim();
  let correct = cards[i].english.toLowerCase();
  if (ans === correct) {
    cards[i].correct++;
    document.getElementById("result").innerText = "✅ Correct!";
  } else {
    cards[i].wrong++;
    document.getElementById("result").innerText = "❌ Wrong: " + correct;
  }
  save();
  updateStats();
  newQuiz();
}

// Stats
function updateStats() {
  let total = cards.reduce((a,c)=>a+c.correct+c.wrong,0);
  let correct = cards.reduce((a,c)=>a+c.correct,0);
  let percent = total ? Math.round((correct/total)*100) : 0;
  document.getElementById("stats").innerText =
    `Answered: ${total} | Correct: ${correct} | Accuracy: ${percent}%`;
}

// Save
function save() {
  localStorage.setItem("cards", JSON.stringify(cards));
}

// Start
showCard();
newQuiz();
updateStats();

