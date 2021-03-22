
const GHOSTS = [
	{
		name:"spirit",
		evidence:[
			"SPIRIT_BOX",
			"FINGERPRINTS",
			"GHOST_WRITING"
		],
		description:"A Spirit is the most common Ghost you will come across. However, it is still very powerful and dangerous. They are usually discovered at one of their hunting grounds after an unexplained death.",
		strength:"A basic ghost with no strengths.",
		weakness:"Using smudge sticks stops from hunting for a long time.",
		tips:""
	},
	{
		name:"wraith",
		evidence:[
			"FREEZING_TEMPERATURES",
			"FINGERPRINTS",
			"SPIRIT_BOX"
		],
		description:"A Wraith is one of the most dangerous Ghosts you will find. It is also the only known Ghost that has the ability of flight and has sometimes been known to travel through walls.",
		strength:"One of the most dangerous ghosts. Can fly through walls and will only leave footprints very rarely.",
		weakness:"Has a toxic reaction to salt.",
		tips:""
	},
	{
		name:"phantom",
		evidence:[
			"FREEZING_TEMPERATURES",
			"EMF_LEVEL_5",
			"GHOST_ORB"
		],
		description:"A rather slow but dangerous type of ghost. Similar to the Yurei, the Phantom has a significant effect on your Sanity, but only if you look at it. You can avoid it by using a photo camera on it, making it disappear forever. This, however, will only work if the ghost is in shadow form. If it is hunting, it will not stop it from attacking.",
		strength:"Looking at the Phantom will reduce player sanity.",
		weakness:"Scared of photos, capturing a photo will cause it to disappear, though not during a hunt.",
		tips:""
	},
	{
		name:"poltergeist",
		evidence:[
			"SPIRIT_BOX",
			"FINGERPRINTS",
			"GHOST_ORB"
		],
		description:"A Poltergeist is infamous for throwing objects around. It's important to note that this isn't the only ghost that will throw objects around but it is most well known for this. Because of this, the Poltergeist is almost powerless in an empty room.",
		strength:"Throws multiple objects about at once. Can also roam far from its ghost room, leading players to search the wrong areas.",
		weakness:"Rooms clear of any movable objects.",
		tips:""
	},
	{
		name:"banshee",
		evidence:[
			"FREEZING_TEMPERATURES",
			"EMF_LEVEL_5",
			"FINGERPRINTS"
		],
		description:"Banshees are the ghosts that react the strongest to a Crucifix out of all the ghosts in the game. They will attempt to slowly stalk and pick off the ghost hunters one by one.",
		strength:"Only targets one specific player at a time each time it hunts, putting the targeted player in much greater danger.",
		weakness:"Hates the Crucifix, making it especially effective.",
		tips:""
	},
	{
		name:"jinn",
		evidence:[
			"SPIRIT_BOX",
			"EMF_LEVEL_5",
			"GHOST_ORB"
		],
		description:"A Jinn is a territorial Ghost that will attack when threatened. It has also been known to be able to travel at high speeds, and will do so while hunting distant paranormal investigators. However, cutting off a location's power via the breaker box will limit its speed.",
		strength:"The Jinn moves faster the further away a target is from it.",
		weakness:"Cutting off the location’s power supply will limit the Jinn’s speed.",
		tips:""
	},
	{
		name:"mare",
		evidence:[
			"FREEZING_TEMPERATURES",
			"SPIRIT_BOX",
			"GHOST_ORB"
		],
		description:"A Mare is a ghost that attacks primarily in the dark. Thus, keeping the lights on and remaining out of dark areas will lower its aggression, but beware as it will attempt to turn the lights off so it may hunt.",
		strength:"Attacks more frequently in the dark, with a tendency to switch off lights by itself.",
		weakness:"Keeping the lights on.",
		tips:"Does it attack in the dark?"
	},
	{
		name:"revenant",
		evidence:[
			"FINGERPRINTS",
			"EMF_LEVEL_5",
			"GHOST_WRITING"
		],
		description:"A Revenant is a ghost that can attack indiscriminately regardless of sanity levels when hunting. Hiding from the Revenant will cause it to move slowly, but will travel faster than any other ghost in the game if it's hunting a victim.",
		strength:"Attacks anyone, regardless of sanity levels; can switch targets at any given time when hunting.",
		weakness:"Moves extremely slowly when players hide.",
		tips:"Does it switch targets while hunting?"
	},
	{
		name:"shade",
		evidence:[
			"GHOST_WRITING",
			"EMF_LEVEL_5",
			"GHOST_ORB"
		],
		description:"A Shade is considered to be a \"shy ghost.\" It will not attack if there are multiple people nearby, but that also means it is harder to find in larger groups.",
		strength:"Extremely shy, making it hard to find and detect.",
		weakness:"Will not hunt if players are in a group.",
		tips:"Are you not being hunted in a group?"
	},
	{
		name:"demon",
		evidence:[
			"FREEZING_TEMPERATURES",
			"SPIRIT_BOX",
			"GHOST_WRITING"
		],
		description:"A Demon is one of the worst ghosts to encounter. Highly aggressive, it will attack more often than any other ghost, so a crucifix is recommended to prevent hunts. However, it will also allow ghost hunters to use the Ouija Board without a major hit to their sanity.",
		strength:"One of the most dangerous ghosts. Extremely aggressive and hunts very often.",
		weakness:"Using the Ouija board to ask questions doesn’t drain sanity.",
		tips:"Is it hunting frequently?"
	},
	{
		name:"yurei",
		evidence:[
			"FREEZING_TEMPERATURES",
			"GHOST_WRITING",
			"GHOST_ORB"
		],
		description:"A Yurei is a type of ghost that has the ability to drain the player's sanity quicker than any other ghost. Smudging the room the Yurei was found in will prevent it from wandering from the location for a long time.",
		strength:"Drains player sanity especially quickly.",
		weakness:"Using a smudge stick in the same room will stop the Yurei from moving.",
		tips:"Is your sanity draining quickly?"
	},
	{
		name:"oni",
		evidence:[
			"SPIRIT_BOX",
			"EMF_LEVEL_5",
			"GHOST_WRITING"
		],
		description:"An Oni is a very active ghost and it’s likely that it will show itself within the first few minutes of the game. It’s also likely to wander around near the ghost room. It’s recommended to hide in a closet and wait for it to leave.",
		strength:"Extremely active and moves objects quickly.",
		weakness:"Extreme activity with lots of players nearby makes it easy to identify.",
		tips:""
	},
];

const BUTTONS = {
	PLAY: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16"><path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/></svg>',
	PAUSE: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16"><path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/></svg>',
	RESET: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16"><path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/><path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/></svg>',
}


function init(){

	// Get all evidences
	let evidences = new Set();
	GHOSTS.forEach( (i) => {

		i.evidence.forEach( (e) => {
			evidences.add(e);
		});

	});

	// Add evidences to dropdowns
	let evidenceDropdowns = document.getElementsByClassName("evidence-list");
	evidences.forEach( (e) => {
		for ( let d of evidenceDropdowns ){
			d.innerHTML += `<option value='${e}'>${e}</option>`;
		};
	});

}


let addFilters = new Set();
let discountFilters = new Set();

function findEvidence(){

	let select = document.getElementById("add-evidence");

	if( addFilters.has(select.value )){
		addFilters.delete(select.value);
	} else {
		addFilters.add(select.value);
	}

	drawEvidenceFilters();
}

function discountEvidence(){

	let select = document.getElementById("discount-evidence");

	if( discountFilters.has(select.value )){
		discountFilters.delete(select.value);
	} else {
		discountFilters.add(select.value);
	}



	drawEvidenceFilters();
}



function drawEvidenceFilters(){

	// Reset Dropdowns
	let evidenceDropdowns = document.getElementsByClassName("evidence-list");
	for ( let d of evidenceDropdowns ){
			d.value = "default";
		};

	// Draw list
	let str = "";
	addFilters.forEach( (f) => {
		str += `<div class='add'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-plus" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z"/>
  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
</svg> ${f}</div>`;
	});
	discountFilters.forEach( (f) => {
		str += `<div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-minus" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M5.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"/>
  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
</svg> ${f}</div>`;
	});
	document.getElementById("add-evidence-filters").innerHTML = str;


	drawPossibleGhosts();
}



function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


function drawPossibleGhosts(){
	let possibleGhosts = [...GHOSTS];


	possibleGhosts = possibleGhosts.filter( (g) => {
		let found = true;
		addFilters.forEach( (f) => {
			if( !g.evidence.includes(f)) found = false;
		});
		return found;
	});

	possibleGhosts = possibleGhosts.filter( (g) => {
		let found = true;
		discountFilters.forEach( (f) => {
			if( g.evidence.includes(f)) found = false;
		});
		return found;
	});

	let str = "";

	let showDetails = document.getElementById("details").checked;

	possibleGhosts.forEach( (i) => {
		let tip = "";
		if(possibleGhosts.length < 7 || showDetails){
			tip = i.tips + "<br/>";

			for( e of i.evidence){
				if( !addFilters.has(e) ){
					tip += `+ ${e}<br/>`;
				}
			}
		};
		str += `<div class="ghost">
			<div>${capitalizeFirstLetter(i.name)}</div>
			<div>${tip}</div>
		</div>`;
	});

	document.getElementById("candidate-ghosts").innerHTML = str;
}



/* ADVANCED GAME TRACKING */

const DEFAULT_GAME_CONTEXT = {
	offset:0,	// Times in seconds
	startTime:0,
	state:"INACTIVE",
}

let gameContext = DEFAULT_GAME_CONTEXT;


function gameUIUpdate(){

	let tSeconds = Date.now()/1000;
	let time = 0;

	if( gameContext.state == "INACTIVE"){
		document.getElementById("action_start").style.display = "block";
		document.getElementById("action_pause").style.display = "none";
		document.getElementById("action_reset").style.display = "block";

		document.getElementById("header").classList = "header";

	} else if ( gameContext.state == "ACTIVE" ){
		document.getElementById("action_start").style.display = "none";
		document.getElementById("action_pause").style.display = "block";
		document.getElementById("action_reset").style.display = "none";

		time = gameContext.offset + tSeconds - gameContext.startTime;

		document.getElementById("header").classList = "header active";

	} else if ( gameContext.state == "PAUSED"){
		document.getElementById("action_start").style.display = "block";
		document.getElementById("action_pause").style.display = "none";
		document.getElementById("action_reset").style.display = "block";

		time = gameContext.offset;

		document.getElementById("header").classList = "header paused";
	}



	document.getElementById("timer").innerHTML = timeConverter(time);

}


document.getElementById("action_start").addEventListener("click",()=>{
	gameContext.startTime = Date.now()/1000;
	gameContext.state = "ACTIVE";

	gameUIUpdate();
});
document.getElementById("action_pause").addEventListener("click",()=>{
	gameContext.offset += Date.now()/1000 - gameContext.startTime;
	gameContext.state = "PAUSED";

	gameUIUpdate();
});
document.getElementById("action_reset").addEventListener("click",()=>{

	addFilters = new Set();
	discountFilters = new Set();
	drawEvidenceFilters();

	gameContext.offset = 0;
	gameContext.state = "INACTIVE";

	gameUIUpdate();
});


gameUIUpdate();
setInterval(gameUIUpdate,1000);

init();
drawPossibleGhosts();





function pad(num, size) {
    var s = "000000000" + num;
    return s.substr(s.length-size);
}

function timeConverter(t){
	t = Math.floor(t);
	let seconds = t % 60;
	let minutes = Math.floor(t/60);
	return `${pad(minutes,2)}:${pad(seconds,2)}`;
}
