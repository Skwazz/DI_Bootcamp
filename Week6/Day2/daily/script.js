const gameInfo = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];

let usernames = [];

const usr = () => {
  gameInfo.forEach((game) => {
    usernames.push(`${game.username}!`);
  });
  console.log(usernames);
};
usr();

let winners = [];
const score = () => {
  gameInfo.forEach((game) =>
    game.score > 5 ? winners.push(game.username) : null
  );
  console.log(winners);
};

score();

let total = 0;
const totalScore = () => {
  gameInfo.forEach((game) => {
    total += game.score;
  });
  console.log(total);
};

totalScore();
