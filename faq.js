const faq = {};

faq.$render = $(".renderFAQ");

faq.prompt = [
  {
    question: "Can we come without an appointment?",
    answer:
      "Walk-ins are welcome, but in order to guarantee availability of the room(s) you would like to try out, we recommend booking your escape room in advance.",
  },
  {
    question: "HOW MANY PLAYERS ARE NEEDED TO PLAY AN ESCAPE GAME?",
    answer:
      "Each room has a recommended and optimal number of players, in addition to a required minimum to book. Please see the rooms page for the recommendations or call us to find out which room might be best for your team.",
  },
  {
    question:
      "CAN WE STILL PARTICIPATE WITH LESS THAN THE RECOMMENDED NUMBER OF PLAYERS?",
    answer:
      "While we suggest sticking to the recommended number of players for each room, you may participate with fewer players provided it meets the minimum number of players for that room. For safety reasons, the recommended maximum number of players must be adhered to.",
  },
  {
    question: "WHAT IS THE MINIMUM AGE FOR PARTICIPATING?",
    answer:
      "The minimum age to participate is 10, and players under the age of 16 must attend with an adult (to sign off on our participation waivers).",
  },
  {
    question: "CAN I BRING MY CELL PHONE INTO THE ESCAPE ROOM?",
    answer:
      "Electronic devices (cell phones, tablets, cameras, etc.) are not permitted inside the escape rooms. We have lockers available to secure your belongings.",
  },
  {
    question:
      "WHAT IF I HAVE TO GO TO THE BATHROOM/NEED TO LEAVE AFTER STARTING THE ESCAPE ROOM?",
    answer:
      "If you need to leave the room once play has started, you are able to do so. However, please note, if you exit before your time is up without completing the mission, this would be considered a failed mission and the game is over. Unfortunately, we cannot issue a refund for failed missions. Please ensure participants visit the restrooms before starting game play as necessary as any bathroom breaks taken after the timer has started will end your game.",
  },
  {
    question: "WHAT HAPPENS IF WE GET STUCK ON A PUZZLE?",
    answer:
      "If you get stumped, there will always be a way to contact your Game Master for help or clarification. There's no limit on the number of clues you can ask for, BUT in order to qualify for our leaderboard, you'll want to use 2 clues or less!",
  },
  {
    question: "How can I book a room?",
    answer:
      "You can book a room by using our simple online booking tool by clicking HERE or visiting us in person!",
  },
];

// console.log(faq[0]["question"]);

faq.renderQuestions = () => {
  for (i = 0; i < faq.prompt.length; i++) {
    faq.$render.append(`<li>${faq.prompt[i].question}</li>
    <li>${faq.prompt[i].answer}</li>`);
  }
};

faq.init = () => {
  faq.renderQuestions();
};

$(() => {
  faq.init();
});

// PSEUDO CODE
// render the questions under the renderFAQ class
