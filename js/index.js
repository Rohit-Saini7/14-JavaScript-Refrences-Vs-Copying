console.warn(" Let's say we have an array");
const players = ["Wes", "Sarah", "Ryan", "Poppy"];
console.log("players: ", players);

console.warn("And we want to make a copy of it.");
console.warn(
  "You might think we can just do something like this: {const team = players;}"
);
const team = players;
console.log("team: ", team);

console.warn(
  "however what happens when we update that array? like {team[3] ='lux';}"
);
team[3] = "lux";

console.warn("now here is the problem!");
console.log("team: ", team, " and players: ", players);
console.warn(" oh no - we have edited the original array too!");
console.warn(
  "Why? It's because that is an array reference, not an array copy. They both point to the same array!"
);

console.warn("So, how do we fix this? We take a copy instead!");

console.warn("One Way: {const team2 = players.slice();}");
const team2 = players.slice();
console.log("team2: ", team2);
console.warn(
  "Now if we update team2 then what happens? like: {team2[2] = 'rust';}"
);
team2[2] = "rust";
console.log("team2: ", team2, " and players: ", players);

console.warn(
  "Other Way is create a new array and concat the old one in: {const team3 = [].concat(players);}"
);
const team3 = [].concat(players);
console.log("team3: ", team3);
console.warn(
  "Now if we update team2 then what happens? like: {team3[1] = 'Robin';}"
);
team3[1] = "Robin";
console.log("team3: ", team3, " and players: ", players);

console.warn("or use the new ES6 Spread. like: {const team4 = [...players];}");
const team4 = [...players];
console.warn(
  "now when we update it, the original one isn't changed. like {team4[0] = 'marchel';}"
);
team4[0] = "marchel";
console.log("team4: ", team4, " and players: ", players);

console.warn(
  "The same thing goes for objects, let's say we have a person object"
);
const person = {
  name: "Wes Bos",
  age: 80,
};

console.log("person: ", person);

console.warn("and think we make a copy: {const captian = person;}");
const captian = person;
console.log("person is: ", person, " and captian is: ", captian);

console.warn(
  "how do we take a copy instead? : {const captian2 = Object.assign({}, person, { number: 99, age: 12 });}"
);
const captian2 = Object.assign({}, person, { number: 99, age: 12 });
console.log("person is: ", person, " and captian2 is: ", captian2);

console.warn("Lets take another example");
const wes = {
  name: "Wes",
  age: 100,
  social: {
    twitter: "@wesbos",
    facebook: "wesbos.developer",
  },
};
console.log("wes: ", wes);

console.warn("previously shown way is : {const dev = Object.assign({}, wes);}");
const dev = Object.assign({}, wes);
console.log("and result is: ", dev);

console.warn(
  "There is another way to: {const dev2 = JSON.parse(JSON.stringify(wes));}"
);
const dev2 = JSON.parse(JSON.stringify(wes));
console.log("and result from this is: ", dev2);
