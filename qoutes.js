function transitionToPage(url,container) {
    const currentPage = document.querySelector(`.${container}`);
    currentPage.classList.add('fade-out1');
    setTimeout(() => {
      window.location.href = url;
    }, 2000); // 2-second delay for fade-out
  
  }


const reasons = document.querySelector('.reasons');
const zahra = document.querySelector('.zahra');

const surprise = document.querySelector('.surprise');
if (reasons) {
  reasons.addEventListener("click", () => {
      transitionToPage('Qoutes.html','menuGrid');

  });
} 
if (surprise) {
  surprise.addEventListener("click", () => {
      transitionToPage('suprise.html','menuGrid');

  });
} 
if (zahra) {
  zahra.addEventListener("click", () => {
      transitionToPage('zahra.html','menuGrid');

  });
} 

const qoutes =["Your kindness: You have a genuinely kind heart that inspires everyone around you, you pour that kindness into our love and I am so grateful for that",
  "Your sense of humor: You always know how to lighten my mood and make me laugh, a blessing and a curse bc you do that even when I am being dramatic and make me lose character 🙂‍↔️",
"	Your unwavering support: You stand by me through every challenge and triumph, my biggest fan fr🥹",
  "Your patience: You never rush or pressure me, you give me the time and space I need, I know I am a lot but you handle me with so much patience and love that it leaves me feeling undeserving of you ",
  "Your intelligence: Your thoughts and insights always leave me amazed and inspired and as a sapiosexual, I couldn’t be more grateful.",
  "Your loyalty: I can trust you with my deepest secrets and my heart, I don’t have doubts when it comes  to how much this relationship means to you to know better than to mess it up, I hope we never lose what we have.",
 "Your sense of adventure: You make every moment an exciting journey and as much as I am a “comfort zone” person, I love how excited you get at the prospect of trying new things.",
  "Your love for family: The way you cherish and prioritize your family warms my heart, this I cannot overemphasize, it makes me feel safe with you, knowing you will also prioritize ours and cherish it with all you can offer.",
  "Your protective nature: You always make me feel safe and cared for, like I am the most prized possession you have, my jealous man😹❤️",
"	Your thoughtfulness: You notice the little things that make me feel special and you always try to validate all my emotions no matter how trivial they may seem to others",
"Your ambition: You inspire me with your drive to chase your dreams and achieve your goals.",
"Your emotional depth: You’re not afraid to be vulnerable and share your feelings with me which I appreciate so much bc I know how hard being expressive is for you.",
"Your ability to listen: You genuinely care about what I have to say and make me feel heard.",
"Your compassion: You care deeply about others and go out of your way to help them.",
"Your creativity: You have a unique way of seeing the world and making things special, it is fascinating and refreshing.",
"Your resilience: You face life’s challenges with strength and determination, no matter what life has thrown at you that beautiful smile still remains on your face, I am so proud of you baby.",
"Your passion: You put your whole heart into everything you do.",
"Your humility: You remain grounded and modest, even with all your achievements.",
"Your forgiveness: You never hold grudges and teach me the value of letting go.",
"Your unconditional love: You accept me with all my flaws and love me deeply and in return this has made me love myself more and I am so thankful for you and how you make me feel.",
"Your generosity: You’re always willing to give—whether it’s time, love, or support.",
"Your curiosity: You’re always eager to learn and discover new things, which keeps life interesting.",
"Your calmness under pressure: You’re my rock during stressful situations, this is why I always run to you even over the littlest of things.",
"Your ability to bring out the best in me: You motivate me to be my best self.",
"Your honesty: I can always count on you to be truthful with me",
"Your hugs: They’re warm, comforting, and feel like home.",
"Your smile: Oh your beautiful smile that you do with those beautiful eyes that still make me get butterflies and make me weak in the knees, that cheeky laugh that is so infectious 🥹.",
]

const loadQoutes = () => {
  const containerClassName = "Qoute-container"; // Define the container class
  const quoteClassName = "qoutes"; // Define the quote class
  const qoutesContainer = document.querySelector(`.${containerClassName}`);

  if (!qoutesContainer) {
    console.error(`Error: Container with class '.${containerClassName}' not found.`);
    return; // Exit if container is missing
  }

  qoutes.forEach((qoute) => {
    const qouteContainer = document.createElement("div");
    qouteContainer.classList.add(quoteClassName);

    const qouteElement = document.createElement("p");
    qouteElement.textContent = `- ${qoute}`; // Add a dash before the quote
    qouteContainer.appendChild(qouteElement);

    qoutesContainer.appendChild(qouteContainer);
  });

  // Add the final quote after all the other quotes
  const finalQoute = document.createElement("h1");
  finalQoute.textContent =
    "I could go on forever writing everything and I wouldn’t run out, you’re everything I have prayed for and more, Alhamdulillah for you, your love and the peace it comes with. Going through 8 years of knowing you to finally getting to be in love with you now feels like the type of reward that comes with getting something priceless. I love you so much my baby, happy 27th🥳❤️ Fid duniya wal akhira My love❤️";
  qoutesContainer.appendChild(finalQoute);

};

loadQoutes();



