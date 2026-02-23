// Load words
let cards = JSON.parse(localStorage.getItem("cards")) || [
  {dutch:"binnenkomen", english:"to come in", correct:0, wrong:0},
  {dutch:"drinken", english:"to drink", correct:0, wrong:0},
  {dutch:"eruitzien", english:"to look", correct:0, wrong:0},
  {dutch:"geven", english:"to give", correct:0, wrong:0},
  {dutch:"horen", english:"to hear", correct:0, wrong:0},
  {dutch:"kennen", english:"to know (person/place)", correct:0, wrong:0},
  {dutch:"kijken", english:"to look", correct:0, wrong:0},
  {dutch:"kunnen", english:"can / to be able to", correct:0, wrong:0},
  {dutch:"leven", english:"to live", correct:0, wrong:0},
  {dutch:"liggen", english:"to lie", correct:0, wrong:0},
  {dutch:"lopen", english:"to walk", correct:0, wrong:0},
  {dutch:"maken", english:"to make", correct:0, wrong:0},
  {dutch:"mogen", english:"may / to be allowed to", correct:0, wrong:0},
  {dutch:"moeten", english:"must / to have to", correct:0, wrong:0},
  {dutch:"nemen", english:"to take", correct:0, wrong:0},
  {dutch:"ontmoeten", english:"to meet", correct:0, wrong:0},
  {dutch:"openen", english:"to open", correct:0, wrong:0},
  {dutch:"proberen", english:"to try", correct:0, wrong:0},
  {dutch:"reizen", english:"to travel", correct:0, wrong:0},
  {dutch:"roepen", english:"to call", correct:0, wrong:0},
  {dutch:"slaan", english:"to hit", correct:0, wrong:0},
  {dutch:"sluiten", english:"to close", correct:0, wrong:0},
  {dutch:"spreken", english:"to speak", correct:0, wrong:0},
  {dutch:"staan", english:"to stand", correct:0, wrong:0},
  {dutch:"vinden", english:"to find", correct:0, wrong:0},
  {dutch:"vragen", english:"to ask", correct:0, wrong:0},
  {dutch:"werken", english:"to work", correct:0, wrong:0},
  {dutch:"zien", english:"to see", correct:0, wrong:0},
  {dutch:"zitten", english:"to sit", correct:0, wrong:0},
  {dutch:"zwemmen", english:"to swim", correct:0, wrong:0},
  {dutch:"denken", english:"to think", correct:0, wrong:0},
  {dutch:"doen", english:"to do", correct:0, wrong:0},
  {dutch:"dragen", english:"to wear / carry", correct:0, wrong:0},
  {dutch:"eten", english:"to eat", correct:0, wrong:0},
  {dutch:"gaan", english:"to go", correct:0, wrong:0},
  {dutch:"helpen", english:"to help", correct:0, wrong:0},
  {dutch:"houden", english:"to hold / like", correct:0, wrong:0},
  {dutch:"komen", english:"to come", correct:0, wrong:0},
  {dutch:"kopen", english:"to buy", correct:0, wrong:0},
  {dutch:"krijgen", english:"to get", correct:0, wrong:0},
  {dutch:"leren", english:"to learn", correct:0, wrong:0},
  {dutch:"lezen", english:"to read", correct:0, wrong:0},
  {dutch:"luisteren", english:"to listen", correct:0, wrong:0},
  {dutch:"rijden", english:"to drive / ride", correct:0, wrong:0},
  {dutch:"schrijven", english:"to write", correct:0, wrong:0},
  {dutch:"slapen", english:"to sleep", correct:0, wrong:0},
  {dutch:"spelen", english:"to play", correct:0, wrong:0},
  {dutch:"studeren", english:"to study", correct:0, wrong:0},
  {dutch:"wonen", english:"to live (reside)", correct:0, wrong:0},
    {dutch:"het huis", english:"the house", correct:0, wrong:0},
  {dutch:"de kat", english:"the cat", correct:0, wrong:0},
  {dutch:"de hond", english:"the dog", correct:0, wrong:0},
  {dutch:"de man", english:"the man", correct:0, wrong:0},
  {dutch:"de vrouw", english:"the woman", correct:0, wrong:0},
  {dutch:"het kind", english:"the child", correct:0, wrong:0},
  {dutch:"de auto", english:"the car", correct:0, wrong:0},
  {dutch:"de fiets", english:"the bicycle", correct:0, wrong:0},
  {dutch:"het werk", english:"the work", correct:0, wrong:0},
  {dutch:"de school", english:"the school", correct:0, wrong:0},
  {dutch:"de stad", english:"the city", correct:0, wrong:0},
  {dutch:"het land", english:"the country", correct:0, wrong:0},
  {dutch:"de dag", english:"the day", correct:0, wrong:0},
  {dutch:"de nacht", english:"the night", correct:0, wrong:0},
  {dutch:"de week", english:"the week", correct:0, wrong:0},
  {dutch:"het jaar", english:"the year", correct:0, wrong:0},
  {dutch:"de tijd", english:"the time", correct:0, wrong:0},
  {dutch:"de mensen", english:"the people", correct:0, wrong:0},
  {dutch:"het water", english:"the water", correct:0, wrong:0},
  {dutch:"het eten", english:"the food", correct:0, wrong:0},
  {dutch:"de winkel", english:"the shop", correct:0, wrong:0},
  {dutch:"de straat", english:"the street", correct:0, wrong:0},
  {dutch:"het geld", english:"the money", correct:0, wrong:0},
  {dutch:"de taal", english:"the language", correct:0, wrong:0},
  {dutch:"de wereld", english:"the world", correct:0, wrong:0},
  {dutch:"het probleem", english:"the problem", correct:0, wrong:0},
  {dutch:"het antwoord", english:"the answer", correct:0, wrong:0},
  {dutch:"de vraag", english:"the question", correct:0, wrong:0},
  {dutch:"het boek", english:"the book", correct:0, wrong:0},
  {dutch:"de tafel", english:"the table", correct:0, wrong:0},
  {dutch:"de stoel", english:"the chair", correct:0, wrong:0},
  {dutch:"het raam", english:"the window", correct:0, wrong:0},
  {dutch:"de deur", english:"the door", correct:0, wrong:0},
  {dutch:"het bed", english:"the bed", correct:0, wrong:0},
  {dutch:"de kamer", english:"the room", correct:0, wrong:0},
  {dutch:"de keuken", english:"the kitchen", correct:0, wrong:0},
  {dutch:"de badkamer", english:"the bathroom", correct:0, wrong:0},
  {dutch:"de vriend", english:"the friend", correct:0, wrong:0},
  {dutch:"de vriendin", english:"the girlfriend", correct:0, wrong:0},
  {dutch:"de familie", english:"the family", correct:0, wrong:0},
  {dutch:"het werkwoord", english:"the verb", correct:0, wrong:0},
  {dutch:"het zelfstandig naamwoord", english:"the noun", correct:0, wrong:0},
  {dutch:"het bijvoeglijk naamwoord", english:"the adjective", correct:0, wrong:0},

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

function bulkImport() {
  let text = document.getElementById("bulk").value;
  let lines = text.split("\n");

  let count = 0;
  lines.forEach(line => {
    let parts = line.split("-");
    if (parts.length >= 2) {
      let dutch = parts[0].trim();
      let english = parts[1].trim();
      cards.push({dutch, english, correct:0, wrong:0});
      count++;
    }
  });

  save();
  alert("Imported " + count + " words!");
}



