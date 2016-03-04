//Now input days of the month into a single array. Then set the days to match the lunch//

//NEEDS TO BE UPLOADED TO THE HOWARDKAM.COM SERVER. ONLY HOWARD KAM HAS ACCESS.//
var lunch = {
1: "Cheeseburger",
2: "Soft Shell Taco",
3: "Italian Sausage Pizza",
4: "KALUA PORK & CABBAGE",
5: "No school, No lunch service",
6: "No school, No lunch service",
7: "BEEF HOTDOG in WG BUN",
8: "BREADED CHICKEN NUGGETS",
9: "BAKED CREOLE MACARONI",
10: "TURKEY PASTRAMI on WG BUN",
11: "TIDBITS of CHICKEN w/ GRAVY",
12: "No school, No lunch service",
13: "No school, No lunch service",
14: "KRISPY NACHO'S  w/ CHILI",
15: "CHEESEBURGER",
16: "No school, No lunch service",
17: "No school, No lunch service",
18: "No school, No lunch service",
19: "No school, No lunch service",
20: "No school, No lunch service",
21: "No school, No lunch service",
22: "No school, No lunch service",
23: "No school, No lunch service",
24: "No school, No lunch service",
25: "No school, No lunch service",
26: "No school, No lunch service",
27: "No school, No lunch service",
28: "No school, No lunch service",
29: "BEEF STEW",
30: "CHICKEN PASTA",
31: "BBQ PORK PATTY"
};

//Based on the reported day of the clients computer, the food in the array will be displayed.//
function lunchDay() {
    var d = new Date();
    var n = d.getDate();
    document.getElementById('showTheLunch').innerHTML = lunch[n];
    showWeekDay();
}
function lunchTomorrow() {
    var d = new Date();
    var n = d.getDate();
    document.getElementById('showTheLunchTomorrow').innerHTML = lunch[n + 1];
}

function showWeekDay() {
	 var x = new Date();
    var y = x.getDay();
    if (y === 0) {
    	document.getElementById('showTheDayName').innerHTML = 'Sunday';
    }
    else if (y === 1) {
		document.getElementById('showTheDayName').innerHTML = 'Monday';
    }
    else if (y ===2) {
    	document.getElementById('showTheDayName').innerHTML = 'Tuesday';
    }
    else if (y === 3) {
    	document.getElementById('showTheDayName').innerHTML = 'Wednsday';
    }
    else if (y === 4) {
    	document.getElementById('showTheDayName').innerHTML = 'Thursday';
    }
    else if (y === 5) {
    	document.getElementById('showTheDayName').innerHTML = 'Friday';
    }
    else {
    	document.getElementById('showTheDayName').innerHTML = 'Saturday';
    }

}