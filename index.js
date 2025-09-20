const dialogueObj = {
  welcome: {
    w1: 'Welcome to DeCode: The Interview-Based Study Game!\n\nA tool designed to test your knowledge and help you prepare for interviewing at tech companies.',
    w2: 'Would you like to play and train with us?',
    w2n: 'Wow... not even a little bravery?\n\nThe real world must be terrifying for you...',
    w2y: "Excellent. Let's begin!\n\nWhat's your name?",
  },

  sceneSetUp: {
    SU1: 'You are a prospective Software Engineer, about to head into an interview for a position at TerryTech. Last night, you stayed up making cue cards with all the information you might need!\n\n It’s not like anything could happen to them the morning of your interview, right?...riiight?\n\nLet’s continue...',
    SU2: "As you head out, you notice a puddle of slobber where your cards used to be and a dreadful trail of drool leading to the back rooms.You chase down the culprit only to find your dog has chewed up the answer portions of your cue cards!!!\n\n...Now it’s up to you to use context clues and your base knowledge to unscramble these words during the interview.\n\nGood luck and don't let ANXIETY get to you....",
    SU3: '** Rules of the Game ** \n\n1. Use your CARDS to fully answer interview questions by unscrambling the chewed word. \n\n2. You will be given a maximum of three guesses per question. If you do not guess correctly, the SENIOR DEVELOPER will move on and count against you. \n\n3. You can skip 1 question but after that, no more bailouts! \n\nSCORING: Answer all 10 questions correctly to land the job! Answer 6+ questions to stay in the application pool....get 5 losses and it’s game over!',
    SU4: 'You arrive at the sleek TerryTech offices, praying your cards don’t make you smell like dog slobber.\n\nA receptionist leads you to a conference room.\n\nTHE Senior Developer enters and shakes your hand...',
  },

  evaluation: {
    fail: 'SENIOR DEVELOPER: We appreciate your time today. While your profile isn’t the perfect match for this role, we encourage you to focus your studies.',
    followUp:
      'SENIOR DEVELOPER: Thank you for a great conversation. We’d like to invite you back for a second interview. We recommend reviewing these topics before then.',
    landed:
      'SENIOR DEVELOPER:That was impressive!You have a strong foundational knowledge, and we’re excited to offer you the Junior Developer position.\n\nWelcome to the TerryTech team.',
  },
};

const qaBank = {
  question1: {
    q1: "SENIOR DEVELOPER: Hi [name], thanks for coming in. Let's jump right in with a few simple questions.\n\nAre you ready to begin?",
    q1n: 'SENIOR DEVELOPER: I wish you the best in your future endeavors.',
  },
  question2: {
    q: 'SENIOR DEVELOPER: What is one thing you should always do at the end of an interview?',
    qa: 'CARDS: Ask thoughtful',
    answer: 'Questions',
  },
  question3: {
    q: 'SENIOR DEVELOPER: Briefly, what does the acronym STAR stand for?',
    qa: 'CARDS: It is a clear and concise way to discuss past experiences in interviews.STAR stands for: Situation, Task, Action,',
    answer: 'Result',
  },
  question4: {
    q: 'SENIOR DEVELOPER: Why is it important to research the company before your interview?',
    qa: 'CARDS: To demonstrate genuine interest and informed',
    answer: 'Enthusiasm',
  },
  question5: {
    q: 'SENIOR DEVELOPER: What is a key first step to building a genuine professional connection?',
    qa: 'CARDS: Finding common ground or a shared',
    answer: 'Interest',
  },
  question6: {
    q: 'SENIOR DEVELOPER: Why is it important to offer help to your contacts when you can?',
    qa: 'CARDS: It builds a relationship based on mutual support, not just',
    answer: 'Conversation',
  },
  question7: {
    q: 'SENIOR DEVELOPER: What is an effective way to maintain a connection after meeting someone?',
    qa: 'CARDS: Sending a brief, personalized follow-up',
    answer: 'Message',
  },
  question8: {
    q: 'SENIOR DEVELOPER: Why is a binary search considered a highly efficient algorithm?',
    qa: 'CARDS: It drastically reduces the number of',
    answer: 'Elements',
  },
  question9: {
    q: 'SENIOR DEVELOPER: In Object-Oriented Programming, what is the concept of bundling data and methods together called?',
    qa: 'CARDS: ',
    answer: 'Encapsulation',
  },
  question10: {
    q: 'SENIOR DEVELOPER: What is the main advantage of using a function?',
    qa: 'CARDS: To avoid code repetition and promote',
    answer: 'Reusability',
  },
  question11: {
    q: 'SENIOR DEVELOPER: In JavaScript, what keyword is used to skip the current iteration of a loop and move on to the next one?',
    qa: 'CARDS: The keyword used for this purpose is',
    answer: 'Continue',
  },
};

const correctBank = {
  c1: `~SELF-ESTEEM~ \n\n You’re stellar!`,
  c2: `~SELF-ESTEEM~ \n\n You’re so smart!`,
  c3: `~SELF-ESTEEM~ \n\n You really showed that dog huh!`,
  c4: `~SELF-ESTEEM~ \n\n Questions are scared of you, the way you’re killing them!`,
  c5: `~SELF-ESTEEM~ \n\n I know I'm a game but I swear you’re the smartest person I know. `,
  c6: `~SELF-ESTEEM~ \n\n You’re on a roll!`,
};

const falseBank = {
  f1: `**ANXIETY** \n\n Yikes, try again?`,
  f2: `**ANXIETY** \n\n It’s okay to be wrong. Lets try not do that too many times...`,
  f3: `**ANXIETY** \n\n Sigh, one can only gentle parent but so much...`,
  f4: `**ANXIETY** \n\n Okay, I see you’re nervous, but this time lets try to answer correctly.`,
  f5: `**ANXIETY** \n\n Are you sure you have index cards? I mean, it's okay to USE them… `,
  f6: `**ANXIETY** \n\n More studying....more studying for everyone!`,
};

const moveOnBank = {
  m1: `SENIOR DEVELOPER: Let's just count this one as a loss because we have to move on...`,
  m2: `SENIOR DEVELOPER: Know what. Let's just mark this as a loss. Gotta keep going.`,
  m3: `SENIOR DEVELOPER: No more guesses. Let's move on...`,
  m4: `SENIOR DEVELOPER: Better luck next time. Next question...`,
  m5: `SENIOR DEVELOPER: The wheel is spinning but the hamster took a coffee break. Let's just proceed...`,
  m6: `SENIOR DEVELOPER: That's a swing and a miss. Next pitch!`,
};

function scramble(word) {
  let copy = '';
  let n = 0;
  let store = [];

  function newNum(n) {
    n = Math.floor(Math.random() * word.length);
    if (store.includes(n)) {
      n = newNum(n);
    }
    return n;
  }

  for (let x = 0; x < word.length; x++) {
    n = newNum(n);
    copy = copy.concat(word[n]);
    store.push(n);
  }

  return copy;
}

function isCorrect(guess, answer) {
  if (guess.toLowerCase().trim() === answer.toLowerCase()) {
    return true;
  }
  return false;
}

function createPlayer(name) {
  let points = 0;
  let asked = 0;
  let losses = 0;
  let skipsUsed = 0;
  let wrongIds = new Set();

  let safeName = name && name.trim() ? name.trim() : 'Player';
  return {
    name: safeName,
    score: function () {
      return points;
    },
    asked: function () {
      return asked;
    },
    losses: function () {
      return losses;
    },
    skipsUsed: function () {
      return skipsUsed;
    },
    wrongIds: function () {
      return Array.from(wrongIds);
    },

    incrPoints: function () {
      points += 1;
    },
    incrAsked: function () {
      asked += 1;
    },
    incrLosses: function () {
      losses += 1;
    },

    allowSkip: function () {
      return skipsUsed < 1;
    },

    useSkip: function () {
      if (skipsUsed < 1) {
        skipsUsed += 1;
        return true;
      }
      return false;
    },

    recordWrong: function (id) {
      wrongIds.add(id);
    },
    cleanWrong: function (id) {
      wrongIds.delete(id);
    },

    stats: function () {
      return {
        name: safeName,
        points: points,
        asked: asked,
        losses: losses,
        skipsUsed: skipsUsed,
        wrongIds: Array.from(wrongIds),
      };
    },
  };
}

function startGame() {
  let name;
  alert(dialogueObj.welcome.w1);
  const train = confirm(dialogueObj.welcome.w2);
  if (train) {
    name = prompt(dialogueObj.welcome.w2y);
  } else {
    alert(dialogueObj.welcome.w2n);
    return; //check if this ends game
  }
  const player = createPlayer(name);
  alert(dialogueObj.sceneSetUp.SU1);
  alert(dialogueObj.sceneSetUp.SU2);
  alert(dialogueObj.sceneSetUp.SU3);
  alert(dialogueObj.sceneSetUp.SU4);

  const ready = confirm(
    qaBank.question1.q1.replace('[name]', player.stats().name)
  );

  if (ready) {
    runMainRound(player);
  } else {
    confirm(qaBank.question1.q1n);
    return; //check if this works
  }
}

function runMainRound(player) {
  const orderArr = [
    'question2',
    'question3',
    'question4',
    'question5',
    'question6',
    'question7',
    'question8',
    'question9',
    'question10',
    'question11',
  ];
  for (let i = 0; i < orderArr.length + 1; i++) {
    let qid = orderArr[i];
    if (checkGameOver(player) === 'over') {
      return;
    } else {
      playQuestion(player, qid);
    }
  }
}

function skip(guess) {
  return !!guess && guess.trim().toLowerCase() === 'skip';
}

function playQuestion(player, qid) {
  let done = false;
  alert(qaBank[qid].q);
  let randomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
  };
  let guess;
  let answer = qaBank[qid].answer;
  let attempt = 1;

  while (done === false) {
    guess = prompt(
      `POINTS: ${
        player.stats().points
      }   ~   SKIPS USED: ${player.skipsUsed()}   ~   LOSSES: ${
        player.stats().losses
      }\n\n` +
        qaBank[qid].qa +
        '...' +
        scramble(answer) +
        '...??? \n'
    );
    const didSkip = skip(guess);

    if (didSkip) {
      if (player.allowSkip()) {
        alert(
          "<< SKIP >>\n\n I see you're using your one skip. 👀 Alright then, on to the next question!"
        );
        player.useSkip();
        player.incrAsked();
        done = true;
        continue;
      } else {
        alert(
          `>> NO SKIPS LEFT!! <<\n\n Are you expecting me to act like I didn't see you use your skip earlier? Lol. 🙃`
        );
        continue;
      }
    }

    const correct = isCorrect(guess, answer);

    if (correct) {
      const key = `c${randomNumber()}`;
      alert(correctBank[key]);
      player.incrPoints();
      player.incrAsked();
      done = true;
    } else if (!correct) {
      attempt++;
      if (attempt < 4) {
        const key = `f${randomNumber()}`;
        alert(falseBank[key]);
      } else {
        const key = `m${randomNumber()}`;
        alert(moveOnBank[key]);
        player.incrAsked();
        player.incrLosses();
        player.recordWrong(qid);
        done = true;
      }
    }
  }
  return;
}

function checkGameOver(player) {
  const { asked, points, losses } = player.stats();
  const total = 10;

  if (losses >= 5 || asked >= total) {
    if (losses >= 5) {
      alert(`**ANXIETY** \n\n W-O-W. Couldn't even finish the game...LOSER.`);
    } else if (points === 10) {
      alert(dialogueObj.evaluation.landed + `You got 10 out of 10.`);
    } else if (points >= 8) {
      alert(
        dialogueObj.evaluation.followUp +
          `You got ${player.stats().points} out of 10.`
      );
      if (
        confirm(
          `SENIOR DEVELOPER: You got moxy, kid. I like it...Want to try to get some of those points back?`
        )
      ) {
        runReviewRound(player);
      } else {
        alert(`Fine. Keep losing, I guess...DORK`);
      }
    } else if (points >= 6) {
      alert(
        dialogueObj.evaluation.fail +
          `You got ${player.stats().points} out of 10.`
      );
      if (
        confirm(
          `SENIOR DEVELOPER: You messed up, but I'm all about second chances. I'm going to go out on a limb...Want to try to get some of those points back?`
        )
      ) {
        runReviewRound(player);
      } else {
        alert(`**ANXIETY** \n\n Fine. Keep losing, I guess...DORK.`);
      }
    }
    endGame(player);
    return 'over';
  }
  return 'still on';
}

function percentCorrect(player) {
  let correct = player.score(); //how many questions asked correctly
  let percent = (correct / 10) * 100; //calculate percent
  return Math.round(percent); //round whole number
}

function endGame(player) {
  const { wrongIds } = player.stats();
  alert(`GAME OVER \n\n You officially scored ${percentCorrect(player)}%!`);
  if (wrongIds) {
    alert(`Sounds like you could use a study guide...don't worry we got you!`);
    alert(
      `The DeCode Study Guide: \n \n` +
        wrongIds
          .map(
            (wrong) =>
              qaBank[wrong].q.replace('SENIOR DEVELOPER:', 'QUESTION:') +
              `\n` +
              qaBank[wrong].qa.replace('CARDS:', 'ANSWER:') +
              ` ` +
              qaBank[wrong].answer +
              `\n \n`
          )
          .join('')
    );
  } else {
    return;
  }
}

function runReviewRound(player) {
  const { wrongIds } = player.stats();

  for (let i = 0; i < wrongIds.length; i++) {
    let wid = wrongIds[i];
    playReviewQuestion(player, wid);
  }

  alert(`**ANXIETY** \n\n Welp, guess that's the best you can do afterall...`);
}

function playReviewQuestion(player, wid) {
  let done = false;
  alert(qaBank[wid].q);
  let randomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
  };
  let guess;
  let answer = qaBank[wid].answer;
  let attempt = 1;

  while (done === false) {
    guess = prompt(qaBank[wid].qa + ' ... ' + scramble(answer) + ' ...??? ');

    if (isCorrect(guess, answer)) {
      const key = `c${randomNumber()}`;
      alert(correctBank[key]);
      player.incrPoints();
      player.cleanWrong(wid);
      done = true;
    } else if (!isCorrect(guess, answer)) {
      attempt++;
      if (attempt < 4) {
        const key = `f${randomNumber()}`;
        alert(falseBank[key]);
      } else {
        const key = `m${randomNumber()}`;
        alert(moveOnBank[key]);
        done = true;
      }
    }
    return;
  }
}

startGame();
