const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = {};

rl.question(' What's your name ? Nicknames are also acceptable : ) ', (userName) => {
profile["Name"] = userName;

rl.question('What's an activity you like doing ? ', (userHobbies) => {
  profile["Hobbies"] = userHobbies;

rl.question('What do you listen to while doing that? ', (userMusic) => {
  profile["Music"] = userMusic;

  rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (userFavoriteMeal) => {
    profile["Favorite Meal"] = userFavoriteMeal;

    rl.question('What's your favourite thing to eat for that meal ?
      ', (userFavoriteFood) => {
  profile["Favorite Food"] = userFavoriteFood;

    rl.question('Which sport is your absolute favourite? ', (userFavoriteSport) => {
      profile["Favorite Sport"] = userFavoriteSport;

      rl.question('What is your superpower? In a few words, tell us what you are amazing at!
', (userSuperpower) => {
  profile["Superpower"] = userSuperpower;

      console.log(`${userName} listening to ${userMusic} while ${userHobbies}, devouring ${userFavoriteFood} for ${userFavoriteMeal}, prefers ${userFavoriteSport} over any other sport, and is amazing at ${userSuperpower}.`)
      rl.close();
    });
  });
});
});
});
});
});
