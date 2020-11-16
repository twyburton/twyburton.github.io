
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
		str += `<div>+ ${f}</div>`;
	});
	discountFilters.forEach( (f) => {
		str += `<div>- ${f}</div>`;
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
	
	possibleGhosts.forEach( (i) => {
		let tip = "";
		if(possibleGhosts.length < 5){ 
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

init();
drawPossibleGhosts();
