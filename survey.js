const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profile = {
  userName: "",
  activity: "",
  meal: "",
  dish: "",
  sport: "",
  superpower: ""
};

rl.question(`What's your name? Nicknames are also acceptable :)`, (answer) => {
  profile.userName = answer;
  rl.question(`What's an activity you like doing?)`, (answer) => {
    profile.activity = answer;
    rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)`, (answer) => {
      profile.meal = answer;
      rl.question(`What's your favourite thing to eat for that meal?)`, (answer) => {
        profile.dish = answer;
        rl.question(`Which sport is your absolute favourite?)`, (answer) => {
          profile.sport = answer;
          rl.question(`What is your superpower? In a few words, tell us what you are amazing at)`, (answer) => {
            profile.superpower = answer;
            console.log(profile);
            rl.close();
          });
        });
      });
    });
  });
});










// //const readline = require('node:readline');
// const { stdin: input, stdout: output } = require('node:process');

// const rl = readline.createInterface({ input, output });

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });