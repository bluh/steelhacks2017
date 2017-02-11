/*
 *	File contains javascript components that will be integrated into the webpage
 */


//get suit color from dropdown
var suit = document.getElementById("suit");

// get shirt pattern from dropdown
var shirtP = document.getElementById("shirtPattern");

// get shirt color from dropdown
var shirtC = document.getElementById("shirtColor");

// get tie pattern from dropdown
var tieP = document.getElementById("tiePattern");

// get tie color from dropdown
var tieC = document.getElementById("tieColor");

// get shoe and belt color from dropdown
var shoe = document.getElementById("shoeColor");


// Booleans to store whether patterns or colors match
var tieShirtP = false;
var tieShirtC = false;
var suitTieC = true;
var suitShoeC = true;


// Tie and shirt pattern pairings
if(shirtP.value == "Solid" || tieP.value == "Solid" || tieP.value == "Semi-Solid" || tieP.value == "Dotted" || tieP.value == "Floral")
	tieShirtP = true;

else if(tieP.value == "Paisley" && shirtP.value != "Thick Striped")
	tieShirtP = true;

else if(tieP.value == "Thin Striped" && shirtP.value == "Thick Striped")
	tieShirtP = true;
	
else if(tieP.value == "Thick Striped" && (shirtP.value == "Thin Striped" || shirtP.value == "Checked"))
	tieShirtP = true;

else if(tieP.value == "Plaid" && shirtP.value == "Checked"){
	tieShirtP = true;


// Tie and shirt color pairings
if(shirtC.value == "White" || shirtC.value == "Off-White")
	tieShirtC = true;

else if(tieC.value == "Red")
	tieShirtC == true;

else if(tieC.value == "Burgundy")
	tieShirtC = true;
	
else if(tieC.value == "Blue" && (shirtC.value != "Light Blue" && shirt.value != "Lavender"))
	tieShirtC = true;

else if(tieC.value == "Navy")
	tieShirtC = true;

else if(tieC.value == "Orange" && (shirtc.value != "Light Pink" || shirtC.value != "Gold"))
	tieShirtC = true;

else if(tieC.value == "Pink" && (shirtc.value != "Light Pink" || shirtC.value != "Lavender"))
	tieShirtC = true;

else if(tieC.value == "Lavender" && (shirtc.value != "Light Pink" || shirtC.value != "Lavender"))
	tieShirtC = true;

else if(tieC.value == "Yellow" && shirtC.value != "Gold")
	tieShirtC = true;


// Suit and tie pairings
if(tieC.value == "Navy" && suit.value == "Black")
	suitTieC = false;


// Suit and shoe pairings
if(suitC.value == "Navy" || suitC.value == "Blue" || suitC.value == "Medium Grey" || suitC.value == "Light Grey") 
	suitShoeC = true;

else if(suitC.value == "Brown" && shoe.value == "Black")
		suitShoeC = false;

else if(suitC.value == "Charcoal" && shoe.value == "Brown")
		suitShoeC = false;

else if(suitC.value == "Black" && shoe.value != "Black")
	suitShoeC = false;


// Returns feedback
var feedback;

if(tieShirtP == false)
	feedback = "Your shirt and tie have clashing patterns.\n";

if(tieShirtC == false)
	feedback += "Your shirt and tie have clashing colors.\n";

if(suitTieC == false)
	feedback += "Consider wearing a tie that isn't black.\n"

if(suitShoeC == false)
	feedback += "Your suit and shoes have clashing patterns.\n"

return feedback;

	
	
