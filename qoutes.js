function transitionToPage(url, container) {
  const currentPage = document.querySelector(`.${container}`);
  currentPage.classList.add("fade-out1");
  setTimeout(() => {
    window.location.href = url;
  }, 2000); // 2-second delay for fade-out
}

const reasons = document.querySelector(".reasons");
const Dont = document.querySelector(".Dont");

const surprise = document.querySelector(".surprise");
if (reasons) {
  reasons.addEventListener("click", () => {
    transitionToPage("Qoutes.html", "menuGrid");
  });
}
if (surprise) {
  surprise.addEventListener("click", () => {
    transitionToPage("suprise.html", "menuGrid");
  });
}
if (Dont) {
  Dont.addEventListener("click", () => {
    transitionToPage("Access2.html", "menuGrid");
  });
}

const quotes = [
  "Your kindness: You have a genuinely kind heart that inspires everyone around you. You pour that kindness into everyone around you and we are so grateful for that.",

  "Your sense of humor: You always know how to lighten moods and make people laugh  a blessing and a curse because you do that even when it’s not supposed to be funny ",

  "Your unwavering support: You stand by me through every challenge and triumph, my biggest fan fr ",

  "Your patience: Everyone that knows you knows how patient you are  sometimes even too patient.",

  "Your intelligence: Your thoughts and insights always leave me amazed and inspired.",

  "Your sense of adventure: You make every moment an exciting journey, and as much as I am a comfort-zone person, I love how excited you get at the prospect of trying new things.",

  "Your love for family: The way you cherish and prioritize your family warms my heart this I cannot overemphasize.",

  "Your thoughtfulness: You notice the little things, and those little things mean everything to me.",

  "Your ambition: You inspire me with your drive to chase your dreams and achieve your goals.",

  "Your emotional depth: You’re not afraid to be vulnerable and share your feelings with me.",

  "Your compassion: You care deeply about others and always go out of your way to help them.",

  "Your creativity: You have a unique way of seeing the world and making things special it’s fascinating and refreshing.",

  "Your resilience: You face life’s challenges with strength and determination. No matter what life throws at you, that beautiful smile still tries to show up.",

  "Your passion: You put your whole heart into everything you do.",

  "Your humility: You remain grounded and modest no matter how amazing you are.",

  "Your forgiveness: You don’t hold grudges still weird, but incredibly beautiful.",

  "Your generosity: You’re always willing to give, whether it’s time, care, or support.",

  "Your curiosity: You’re always eager to learn and discover new things, which keeps life interesting.",

  "Your ability to bring out the best in me: You motivate me to be my best self.",

  "Your hugs: They’re warm, comforting, and feel like home.",

  "Your honesty: You always speak your truth, even when it’s hard, and I admire that deeply.",

  "Your strength: Not just physical or emotional, but the quiet strength you carry every single day.",

  "Your consistency: You show up in love, in effort, in care and that means everything to us.",

  "Your empathy: You truly understand people and make them feel seen and safe.",

  "Your presence: Just being around you makes everything feel calmer and better.",

  "Your Heart: i dont think you have the same heart as everyone else, yours is made of gold and pure love.",

  "Your smile: Oh your beautiful smile — the one that comes with those gorgeous eyes and instantly makes my world brighter every single time.",
];

const loadQoutes = () => {
  const containerClassName = "Qoute-container"; // Define the container class
  const quoteClassName = "qoutes"; // Define the quote class
  const qoutesContainer = document.querySelector(`.${containerClassName}`);

  if (!qoutesContainer) {
    console.error(
      `Error: Container with class '.${containerClassName}' not found.`,
    );
    return; // Exit if container is missing
  }

  quotes.forEach((qoute) => {
    const qouteContainer = document.createElement("div");
    qouteContainer.classList.add(quoteClassName);

    const qouteElement = document.createElement("p");
    qouteElement.textContent = `- ${qoute}`; // Add a dash before the quote
    qouteContainer.appendChild(qouteElement);

    qoutesContainer.appendChild(qouteContainer);
  });

  // Add the final quote after all the other quotes
  const finalQoute = document.createElement("h1");
  finalQoute.textContent = `I could go on forever about all the things that make you this incredible person you are but really everything would fall short..... you are an incredible person and May Allah reward you ten folds lol, a Thousand folds and may he Give you all that is good in this life and the next Ameen Ya Rabbal Alamin   Happy Birthday Bunny ❤️`;
  qoutesContainer.appendChild(finalQoute);
};
loadQoutes();
