//Now input days of the month into a single array. Then set the days to match the schedule//

//NEEDS TO BE UPLOADED TO THE HOWARDKAM.COM SERVER. ONLY HOWARD KAM HAS ACCESS.//
var bSchedule = {
1: "Normal day",
2: "Periods 1-3-5-7", 
3: "Periods 2-4-6",
4: "Periods 1-3-5-7",
5: "No School", 
6: "No School", 
7: "All Periods",
8: "Periods 2-4-6",
9: "Periods 1-3-5-7",
10: "Periods 2-4-6",
11: "Periods 1-3-5-7",
12: "Junior Prom", 
13: "No School", 
14: "Wednesday Schedule",
15: "Periods 2-4-6",
16: "Spring Break!",
17: "Spring Break!",
18: "Spring Break!",
19: "Spring Break!",
20: "Spring Break!",
21: "Spring Break!",
22: "Spring Break!",
23: "Spring Break!",
24: "Spring Break!",
25: "Spring Break!",
26: "Spring Break!",
27: "Spring Break!",
28: "No School",
29: "Periods 2-4-6",
30: "Periods 1-3-5-7",
31: "Periods 2-4-6"
};

function bell() {
    var d = new Date();
    var n = d.getDate();
    document.getElementById('showSchedule').innerHTML = bSchedule[n];
}