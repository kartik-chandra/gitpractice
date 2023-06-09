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

console.log(playersRun.shift());
console.log(playersRun);

console.log("This JavaScript array's depth is : " + playersRun.length);

const totalRun = stat.reduce((runs, player)=>{
    return runs + player.run;
},0);

console.log(`Total runs are : ${totalRun}`);

const apps = [
    { id: 1, name: "Marcombox", dev: 135, qa: 100 },
    { id: 2, name: "Brandshare", dev: 255, qa: 200 },
    { id: 3, name: "Miranda", dev: 175, qa: 10 },
    { id: 4, name: "UserManagement", dev: 175, qa: 10 },
    { id: 5, name: "Miranda", dev: 175, qa: 10 }
];

const slicedApp = apps.slice(2,4);
console.log(slicedApp);

const spApps = apps.find((x)=> x.dev == 175);
console.log(spApps);

console.log("Way of showing property : " + apps[0]["name"]);

