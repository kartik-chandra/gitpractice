console.log("This is the beginning!");
console.log("LiveServer is enabled!");

const players = ["Saurav Ganguly", "Sachin Tendulkar", "Rahul Deavid", "Arivind De Silva", "Brian Lara"];
console.log(players);

const stat = [
    { id: 1, name: "Saurav Ganguly", run: 13500, wicket: 100 },
    { id: 2, name: "Sachin Tendulkar", run: 25500, wicket: 200 },
    { id: 3, name: "Rahul Dravid", run: 17500, wicket: 10 }
];

const allrounder = stat.filter(x=> (x.run > 10000 && x.wicket >= 100));
console.log(allrounder);

const playersRun = stat.map((x)=> { return {id: x.id, name: x.name, run: x.run}});
console.log(playersRun);
