

function randomBosses() {
    const soulsBosses = [
    "Darkeater Midir", 
    "Slave Knight Gael", 
    "Champion Gundyr", 
    "Pontiff Sulyvahn", 
    "Soul Of Cinder", 
    "Abyss Watchers", 
    "Old Demon King",
    "Yhorm, The Giant",
    "Dancer Of The Boreal Valley",
    "Dragonslayer Armour",
    "Nameless King",
];
 
 
let newOut = document.getElementById("randomElementOut");
 
let child = newOut.firstChild;
 
while(child){
     
    newOut.removeChild(child)
 
    child = newOut.firstChild;
}
 
let randomBosses = Math.floor(Math.random() * soulsBosses.length);
 
let newBoss = document.createElement("span");
 
newBoss.textContent = soulsBosses[randomBosses];
 
newOut.appendChild(newBoss);
 
return newOut;
}