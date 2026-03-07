export interface TechnicalDetails {
  "Type of girder": string;
  "Effective span": string;
  "Clear span": string;
}

export interface CostDetails {
  "Cost of Rly Portion": number;
  "Cost of State Portion": number;
  "Total Cost": number;
  "Year of sanction": string;
}

export interface PresentStatus {
  "Status of GAD": string;
  "Status of Sanctioned": string;
  "Status of work": string;
  "Status of contract": string;
  "Status of tender": string;
}

export interface Marker {
  id: string;
  "LC No": string;
  "Division": string;
  "Section": string;
  "District": string;
  "Chainage": string;
  "Location": string;
  x: number; 
  y: number; 
  "ROB/RUB/BOTH": string;
  "State government agency": string;
  "Technical Details": TechnicalDetails;
  "Details of Cost": CostDetails;
  "Present Status": PresentStatus;
}

export const INITIAL_MARKERS: Marker[] = [
   
    {
"id": "MAS2MAS-GDR",
"LC No": "2",
"Division": "MAS",
"Section": "MAS-GDR",
"District": "Tiruvallur",
"Chainage": "2A/40-42",
"Location": "Korukkupet",
x : 67.67, 
y : 31.23,
"ROB/RUB/BOTH" : "RoB",
"State government agency"  : "TN / GCC",
"Technical Details" : {
"Type of girder" : "Bowstring",
"Effective span" : "",
"Clear span" : "1 x 60000"
},
"Details of Cost" : {
"Cost of Rly Portion" : 219170821,
"Cost of State Portion" : 251120875,
"Total Cost" : 0,
"Year of sanction": "2023-2024"
},
"Present Status" : {
"Status of GAD" : "Pending for Countersign by CE/HW",
"Status of Sanctioned" : "Estimate pending in  S&T, Elec. OHE",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "MAS2AMAS-GDR",
"LC No": "2A",
"Division": "MAS",
"Section": "MAS-GDR",
"District": "Tiruvallur",
"Chainage": "KOKG 12-14",
"Location": "Korukkupet",
x : 67.2,
y : 29.6,
"ROB/RUB/BOTH" : "RoB", 
"State government agency"  : "TN / GCC",
"Technical Details" : {
"Type of girder" : "Composite",
"Effective span" : "1 X 36000",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 177423447,
"Cost of State Portion" : 193998793,
"Total Cost" : 371422240,
"Year of sanction": "2011-2012"
},
"Present Status" : {
"Status of GAD" : "Pending for Countersign by CE/HW",
"Status of Sanctioned" : "Sanctioned",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "MAS27CGL-AJJ",
"LC No": "27",
"Division": "MAS",
"Section": "CGL-AJJ",
"District": "",
"Chainage": "34/482",
"Location": "",
x : 58.15,  
y : 36.68,
"ROB/RUB/BOTH" : "RoB & LUS",
"State government agency"  : "CE/HIGHWAYS" ,
"Technical Details" : {
"Type of girder" : "",
"Effective span" : "",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction": "2023-2024"
},
"Present Status" : {
"Status of GAD" : "Yet to be prepared",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "MAS28CGL-AJJ",
"LC No": "28",
"Division": "MAS",
"Section": "CGL-AJJ",
"District": "",
"Chainage": "35/400-500",
"Location": "",
x : 63.00, 
y : 36.27,
"ROB/RUB/BOTH" : "RoB & LUS",
"State government agency"  : "CE/HIGHWAYS" ,
"Technical Details" : {
"Type of girder" : "",
"Effective span" : "",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction": "2023-2024"
},
"Present Status" : {
"Status of GAD" : "Yet to be prepared",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "MAS30CGL-AJJ",
"LC No": "30",
"Division": "MAS",
"Section": "CGL-AJJ",
"District": "Kancheepuram",
"Chainage": "38/300-400",
"Location": "Tirumalpur",
x : 56.8, 
y : 28,
"ROB/RUB/BOTH" : "RoB & LUS",
"State government agency"  : "CE/HIGHWAYS" ,
"Technical Details" : {
"Type of girder" : "Bowstring",
"Effective span" : "",
"Clear span" : "1 x 60000"
},
"Details of Cost" : {
"Cost of Rly Portion" : 243221437,
"Cost of State Portion" : 275212652,
"Total Cost" : 0,
"Year of sanction": "2018-2019"
},
"Present Status" : {
"Status of GAD" : "Under Review by Division",
"Status of Sanctioned" : "Elec. estimate pending",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}

},
{
"id": "MAS31MAS-GDR",
"LC No": "31",
"Division": "MAS",
"Section": "MAS-GDR (GQ/GD route-LC not closed)",
"District": "",
"Chainage": "41/36-38",
"Location": "Kavarapettai ",
x : 67.10, 
y : 25,
"ROB/RUB/BOTH" : "RoB & LUS",
"State government agency"  : "CE/HIGHWAYS",
"Technical Details" : {
"Type of girder" : "",
"Effective span" : "",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction": "2019-2020"
},
"Present Status" : {
"Status of GAD" : "Yet to be prepared",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "MAS49DCGL-AJJ",
"LC No": "49D",
"Division": "MAS",
"Section": "CGL-AJJ",
"District": "Ranipet",
"Chainage": "61/800-900",
"Location": "Tirumalpur",
x : 59.50,  
y : 38.00,
"ROB/RUB/BOTH" : "RoB & LUS",
"State government agency"  : "CE/HIGHWAYS",
"Technical Details" : {
"Type of girder" : "Steel Composite",
"Effective span" : "1 X 24000 (SK) 22553 Sq + 1 X 30000 (SK) 28191 Sq + 1 X 24000 (SK) 22553 Sq",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 183815088,
"Cost of State Portion" : 245240749,
"Total Cost" : 429055837,
"Year of sanction": "2018-2019"
},
"Present Status" : {
"Status of GAD" : "Approved",
"Status of Sanctioned" : "Sanctioned",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : "Tender Awarded"
}
},
{
"id": "MAS55MS-VM",
"LC No": "55",
"Division": "MAS",
"Section": "MS-VM",
"District": "",
"Chainage": "63/4-6",
"Location": "",
x : 67,  
y : 38.39,
"ROB/RUB/BOTH" : "RoB & LUS",
"State government agency"  : "CE/HIGHWAYS",
"Technical Details" : {
"Type of girder" : "",
"Effective span" : "",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction": "2023-24"
},
"Present Status" : {
"Status of GAD" : "Yet to be prepared",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "MAS56AJJ-RU",
"LC No": "56",
"Division": "MAS",
"Section": "AJJ-RU",
"District": "",
"Chainage": "",
"Location": "CHITTOOR",
x : 67.3,  
y : 22.8,
"ROB/RUB/BOTH" : "RoB & LUS",
"State government agency"  : "CE/HIGHWAYS",
"Technical Details" : {
"Type of girder" : "",
"Effective span" : "",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction": "2016-2017",
},
"Present Status" : {
"Status of GAD" : "Yet to be prepared",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "MAS61MS-VM",
"LC No": "61",
"Division": "MAS",
"Section": "MS-VM",
"District": "Chengalpattu",
"Chainage": "72/22-73/1",
"Location": "",
x : 67.5,  
y : 39.8,
"ROB/RUB/BOTH" : "RoB & LUS",
"State government agency"  : "CE/HIGHWAYS",
"Technical Details" : {
"Type of girder" : "",
"Effective span" : "",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction": "2023-2024"
},
"Present Status" : {
"Status of GAD" : "Yet to be prepared",
"Status of Sanctioned" : "Estimate pending in  S&T, Elec. OHE",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "MAS61MAS-JTJ",
"LC No": "61",
"Division": "MAS",
"Section": "MAS-JTJ",
"District": "Vellore",
"Chainage": "145/4-6",
"Location": "Latteri",
x : 55.5,  
y : 30.8,
"ROB/RUB/BOTH" : "RuB",
"State government agency"  : "CE/HIGHWAYS",
"Technical Details" : {
"Type of girder" : "RCC box",
"Effective span" : "7x3.6m",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction": "2019-2020"
},
"Present Status" : {
"Status of GAD" : "Pending for Countersign by CE/HW",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "MAS63MS-VM",
"LC No": "63",
"Division": "MAS",
"Section": "MS-VM",
"District": "",
"Chainage": "78/22-24",
"Location": "",
x : 67.4,  
y : 41.3,
"ROB/RUB/BOTH" : "RoB & LUS",
"State government agency"  : "CE/HIGHWAYS",
"Technical Details" : {
"Type of girder" : "",
"Effective span" : "",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction": "2023-2024"
},
"Present Status" : {
"Status of GAD" : "Yet to be prepared",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "MAS64AMAS-JTJ",
"LC No": "64A",
"Division": "MAS",
"Section": "MAS-JTJ",
"District": "Tiruvallur",
"Chainage": "15/36-16/2",
"Location": "Metro",
x : 67.4,  
y : 35.4, 
"ROB/RUB/BOTH" : "RoB",
"State government agency"  : "CE/HIGHWAYS",
"Technical Details" : {
"Type of girder" : "Bow String Steel",
"Effective span" : "1 X 62000",
"Clear span" : "1 X 60000"
},
"Details of Cost" : {
"Cost of Rly Portion" : 238841742,
"Cost of State Portion" : 294098893,
"Total Cost" : 532940635,
"Year of sanction": "2022-2023"
},
"Present Status" : {
"Status of GAD" : "Under Review by Division",
"Status of Sanctioned" : "Sanctioned",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : "Tender Awarded"
}
},
{
"id": "MAS70MAS-JTJ",
"LC No": "70",
"Division": "MAS",
"Section": "MAS-JTJ",
"District": "Vellore",
"Chainage": "165/16-18",
"Location": "Ulli Valathur/Vellore",
x : 51.3,  
y : 28.9, 
"ROB/RUB/BOTH" : "RuB",
"State government agency"  : "CE/HIGHWAYS",
"Technical Details" : {
"Type of girder" : "PRE-CAST RCC BOX SUBWAY",
"Effective span" : "1x7.7x4.0m",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 185883675,
"Cost of State Portion" : 185827505,
"Total Cost" : 371711180,
"Year of sanction": "2011-2012"
},
"Present Status" : {
"Status of GAD" : "Pending for Countersign by CE/HW",
"Status of Sanctioned" : "Elec. estimate pending",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "MAS71MAS-JTJ",
"LC No": "71",
"Division": "MAS",
"Section": "MAS-JTJ",
"District": "Vellore",
"Chainage": "166/30-167/1",
"Location": "Ulli Valathur",
x : 49,  
y : 31.2,
"ROB/RUB/BOTH" : "RoB & LUS",
"State government agency"  : "CE/HIGHWAYS",
"Technical Details" : {
"Type of girder" : "",
"Effective span" : "7x3.6m",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction": "2023-2024"
},
"Present Status" : {
"Status of GAD" : "Pending for Countersign by CE/HW",
"Status of Sanctioned" : "Estimate pending in  S&T, Elec. OHE",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "MAS72AMAS-JTJ",
"LC No": "72A",
"Division": "MAS",
"Section": "MAS-JTJ",
"District": "Tiruvallur",
"Chainage": "21/28-30",
"Location": "Metro",
x : 62.4,  
y : 29.2,
"ROB/RUB/BOTH" : "RoB",
"State government agency"  : "CE/METRO",
"Technical Details" : {
"Type of girder" : "Bow String Steel",
"Effective span" : "1 X 62000",
"Clear span" : "1 X 60000"
},
"Details of Cost" : {
"Cost of Rly Portion" : 233871429,
"Cost of State Portion" : 276380553,
"Total Cost" : 510251982,
"Year of sanction": "2022-2023"
},
"Present Status" : {
"Status of GAD" : "Approved",
"Status of Sanctioned" : "Sanctioned",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : "Tender Awarded"
}
},
{
"id": "MAS74MAS-JTJ",
"LC No": "74",
"Division": "MAS",
"Section": "MAS-JTJ",
"District": "",
"Chainage": "172/8-10",
"Location": "Melpatti",
x : 48.9,  
y : 32.6,
"ROB/RUB/BOTH" : "RoB",
"State government agency"  : "CE/HIGHWAYS",
"Technical Details" : {
"Type of girder" : "Bow String Steel",
"Effective span" : "1 X 62000",
"Clear span" : "1 X 60000"
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction": "2019-2020"
},
"Present Status" : {
"Status of GAD" : "Yet to be prepared",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "MAS500MAS - JTJ",
"LC No": "at km 121/400-500",
"Division": "MAS",
"Section": "MAS-JTJ",
"District": "",
"Chainage": "121/400-500",
"Location": "Thiruvalam - Sevur",
x : 48.9,  
y : 32.6,
"ROB/RUB/BOTH" : "RoB",
"State government agency"  : "CE/HW/C&M",
"Technical Details" : {
"Type of girder" : "Bowstring",
"Effective span" : "2X36000",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction": "Deposit Work (NA)",
} ,
"Present Status" : {
"Status of GAD" : "Approved",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "SA2CBE-MTP",
"LC No": "2",
"Division": "SA",
"Section": "CBE-MTP",
"District": "Coimbatore",
"Chainage": "4/700-800",
"Location": "Coimbatore",
x : 33.2,  
y : 55.3,
"ROB/RUB/BOTH" : "RoB & LUS",
"State government agency"  : "CE/HIGHWAYS",
"Technical Details" : {
"Type of girder" : "",
"Effective span" : "",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction": "2023-2024"
},
"Present Status" : {
"Status of GAD" : "Under preparation",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "SA3CBE-MTP",
"LC No": "3",
"Division": "SA",
"Section": "CBE-MTP",
"District": "Coimbatore",
"Chainage": "5/300-400",
"Location": "Coimbatore",
x : 33.1,  
y : 54.2,
"ROB/RUB/BOTH" : "RoB & LUS",
"State government agency"  : "CE/HIGHWAYS",
"Technical Details" : {
"Type of girder" : "",
"Effective span" : "",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction": "2023-2024"
},
"Present Status" : {
"Status of GAD" : "Yet to be prepared",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "SA4CBE-MTP",
"LC No": "4",
"Division": "SA",
"Section": "CBE-MTP",
"District": "Coimbatore",
"Chainage": "6/800-900",
"Location": "Thudiyalur CBF-MTP",
x : 33,  
y : 53.1,
"ROB/RUB/BOTH" : "RoB & LUS",
"State government agency"  : "CE/HIGHWAYS",
"Technical Details" : {
"Type of girder" : "Composite",
"Effective span" : "6 X C/C OF COLUMN + 1 X 498136 C/C OF COLUMN+ 1 X 17950 C/C OF COLUMN",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 326013552,
"Cost of State Portion" : 334743786,
"Total Cost" : 0,
"Year of sanction": "2016-2017"
},
"Present Status" : {
"Status of GAD" : "Approved",
"Status of Sanctioned" : "Observation",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "SA5ED-TPJ",
"LC No": "5",
"Division": "SA",
"Section": "ED-TPJ",
"District": "Erode",
"Chainage": "5/400-500",
"Location": "Pasur / Erode",
x : 47.9,  
y : 44.3,
"ROB/RUB/BOTH" : "RoB & LUS",
"State government agency"  : "CE/HIGHWAYS",
"Technical Details" : {
"Type of girder" : "Composite Steel",
"Effective span" : "1 X 36000",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 200179676,
"Cost of State Portion" : 273368213,
"Total Cost" : 473547889,
"Year of sanction": "2016-2017"
},
"Present Status" : {
"Status of GAD" : "Approved",
"Status of Sanctioned" : "Sanctioned",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
 },
{
"id": "SA16ED-TPJ",
"LC No": "16",
"Division": "SA",
"Section": "ED-TPJ",
"District": "Erode",
"Chainage": "19/000-100",
"Location": "Pasur",
x : 47.9,  
y : 44.3, 
"ROB/RUB/BOTH" : "RoB & LUS",
"State government agency"  : "CE/HIGHWAYS",
"Technical Details" : {
"Type of girder" : "Composite",
"Effective span" : "1x44000",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction": "2021-2022"
},
"Present Status" : {
"Status of GAD" : "GAD is pending for countersign by CE/HW",
"Status of Sanctioned" : "Under Preparation",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "SA25ED-TPJ",
"LC No": "25",
"Division": "SA",
"Section": "ED-TPJ",
"District": "",
"Chainage": "29/000-100",
"Location": "",
x : 45.5,  
y : 54.3, 
"ROB/RUB/BOTH" : "RoB & LUS",
"State government agency"  : "CE/HIGHWAYS",
"Technical Details" : {
"Type of girder" : "",
"Effective span" : "",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction": "2023-2024"
},
"Present Status" : {
"Status of GAD" : "",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "SA32ED-TPJ",
"LC No": "32",
"Division": "SA",
"Section": "ED-TPJ",
"District": "",
"Chainage": "43/500-600",
"Location": "",
x : 41.4,  
y : 55.9, 
"ROB/RUB/BOTH" : "RoB & LUS",
"State government agency"  : "CE/HIGHWAYS",
"Technical Details" : {
"Type of girder" : "",
"Effective span" : "",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction": "2022-2023"
},
"Present Status" : {
"Status of GAD" : "Yet to be prepared",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "SA33ED-TPJ",
"LC No": "33",
"Division": "SA",
"Section": "ED-TPJ",
"District": "",
"Chainage": "50/100-200",
"Location": "",
x : 41.4,  
y : 57.3, 
"ROB/RUB/BOTH" : "RoB & LUS",
"State government agency"  : "CE/HIGHWAYS",
"Technical Details" : {
"Type of girder" : "",
"Effective span" : "",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction": "2022-2023"
},
"Present Status" : {
"Status of GAD" : "Yet to be prepared",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "SA35ED-TPJ",
"LC No": "35",
"Division": "SA",
"Section": "ED-TPJ",
"District": "",
"Chainage": "57/500-600",
"Location": "",
x : 43.4,  
y : 58.6, 
"ROB/RUB/BOTH" : "RoB & LUS",
"State government agency"  : "CE/HIGHWAYS",
"Technical Details" : {
"Type of girder" : "",
"Effective span" : "",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction": "2022-2023"
},
"Present Status" : {
"Status of GAD" : "Yet to be prepared",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "SA122JTJ-ED",
"LC No": "122",
"Division": "SA",
"Section": "JTJ-ED",
"District": "",
"Chainage": "390/800-900",
"Location": "",
x : 44.2,  
y : 52.9, 
"ROB/RUB/BOTH" : "RoB & LUS",
"State government agency"  : "CE/HIGHWAYS",
"Technical Details" : {
"Type of girder" : "",
"Effective span" : "",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction": "2022-2023"
},
"Present Status" : {
"Status of GAD" : "Yet to be prepared",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "SASGE13 JTJ-ED",
"LC No": "SGE13",
"Division": "SA",
"Section": "JTJ-ED",
"District": "",
"Chainage": "",
"Location": "",
x : 44.2,  
y : 52.9, 
"ROB/RUB/BOTH" : "",
"State government agency"  : "",
"Technical Details" : {
"Type of girder" : "Composite",
"Effective span" : "1x18000 ROB",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction": "2022-2023"
},
"Present Status" : {
"Status of GAD" : "Pending for Countersign by CE/HW",
"Status of Sanctioned" : "Estimate pending in  S&T, Elec. OHE",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "SASGE40JTJ-ED",
"LC No": "SGE40",
"Division": "SA",
"Section": "JTJ-ED",
"District": "",
"Chainage": "",
"Location": "",
x : 44.2,  
y : 52.9, 
"ROB/RUB/BOTH" : "",
"State government agency"  : "",
"Technical Details" : {
"Type of girder" : "Composite",
"Effective span" : "1x18000 ROB + Aqueduct",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction": "2022-2023"
},
"Present Status" : {
"Status of GAD" : "Pending for Countersign by CE/HW",
"Status of Sanctioned" : "Estimate pending in  S&T, Elec. OHE",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "SASGE42JTJ-ED",
"LC No": "SGE42",
"Division": "SA",
"Section": "JTJ-ED",
"District": "",
"Chainage": "",
"Location": "",
x : 44.2,  
y : 52.9, 
"ROB/RUB/BOTH" : "",
"State government agency"  : "",
"Technical Details" : {
"Type of girder" : "Composite",
"Effective span" : "1x18000 ROB",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction": "2022-2023"
},
"Present Status" : {
"Status of GAD" : "Pending for Countersign by CE/HW",
"Status of Sanctioned" : "Estimate pending in  S&T, Elec. OHE",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "SASGE43JTJ-ED",
"LC No": "SGE43",
"Division": "SA",
"Section": "JTJ-ED",
"District": "",
"Chainage": "",
"Location": "Namakkal",
x : 44.2,  
y : 52.9, 
"ROB/RUB/BOTH" : "",
"State government agency"  : "",
"Technical Details" : {
"Type of girder" : "Composite",
"Effective span" : "1x18000 Aqueduct",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction": "2022-2023"
},
"Present Status" : {
"Status of GAD" : "Pending for Countersign by CE/HW",
"Status of Sanctioned" : "Estimate pending in  S&T, Elec. OHE",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "SASGE47JTJ-ED",
"LC No": "SGE47",
"Division": "SA",
"Section": "JTJ-ED",
"District": "",
"Chainage": "",
"Location": "Namakkal",
x : 44.2,  
y : 52.9, 
"ROB/RUB/BOTH" : "",
"State government agency"  : "",
"Technical Details" : {
"Type of girder" : "Composite",
"Effective span" : "1x18000 ROB",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction": "2022-2023"
},
"Present Status" : {
"Status of GAD" : "Pending for Countersign by CE/HW",
"Status of Sanctioned" : "Estimate pending in  S&T, Elec. OHE",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "SASGE48JTJ-ED",
"LC No": "SGE48",
"Division": "SA",
"Section": "JTJ-ED",
"District": "",
"Chainage": "",
"Location": "",
x : 44.2,  
y : 52.9, 
"ROB/RUB/BOTH" : "",
"State government agency"  : "",
"Technical Details" : {
"Type of girder" : "Composite",
"Effective span" : "1x18000 Aqueduct",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction": "2022-2023"
},
"Present Status" : {
"Status of GAD" : "Pending for Countersign by CE/HW",
"Status of Sanctioned" : "Estimate pending in  S&T, Elec. OHE",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "SA119 & 119AJTJ-ED",
"LC No": "119 & 119A",
"Division": "SA",
"Section": "JTJ-ED",
"District": "",
"Chainage": "",
"Location": "",
x : 45.3,  
y : 51.7, 
"ROB/RUB/BOTH" : "RoB & LUS",
"State government agency"  : "CE/HIGHWAYS",
"Technical Details" : {
"Type of girder" : "",
"Effective span" : "",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction": "2023-2024"
},
"Present Status" : {
"Status of GAD" : "Yet to be prepared",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "TPJ40TJ-KIK",
"LC No": "40",
"Division": "TPJ",
"Section": "TJ-KIK",
"District": "",
"Chainage": "66/000-100",
"Location": "",
x : 63.3,  
y : 59.9, 
"ROB/RUB/BOTH" : "RoB & LUS",
"State government agency"  : "CE/HIGHWAYS",
"Technical Details" : {
"Type of girder" : "",
"Effective span" : "",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction": "2023-2024"
},
"Present Status" : {
"Status of GAD" : "Yet to be prepared",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "TPJ117VM-KPD",
"LC No": "117",
"Division": "TPJ",
"Section": "VM-KPD",
"District": "",
"Chainage": "141/500-600",
"Location": "",
x : 57.3,  
y : 35, 
"ROB/RUB/BOTH" : "RoB & LUS",
"State government agency"  : "CE/HIGHWAYS",
"Technical Details" : {
"Type of girder" : "",
"Effective span" : "",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction": "2023-2024"
},
"Present Status" : {
"Status of GAD" : "Yet to be prepared",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "TPJ138VM-TPJ",
"LC No": "138",
"Division": "TPJ",
"Section": "VM-TPJ(Main)",
"District": "Kadalur",
"Chainage": "185/300-400",
"Location": "Panruti",
x : 60.2,  
y : 47.6, 
"ROB/RUB/BOTH" : "RoB & LUS",
"State government agency"  : "CE/HIGHWAYS",
"Technical Details" : {
"Type of girder" : "Composite",
"Effective span" : "1 X 36000",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 186392688,
"Cost of State Portion" : 195262482,
"Total Cost" : 381655170,
"Year of sanction": "2012-2013"
},
"Present Status" : {
"Status of GAD" : "Approved",
"Status of Sanctioned" : "Sanctioned",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "TPJ270TPJ-MV",
"LC No": "270",
"Division": "TPJ",
"Section": "TPJ-MV",
"District": "",
"Chainage": "317/100-200",
"Location": "",
x : 52.3,  
y : 41.4, 
"ROB/RUB/BOTH" : "RoB",
"State government agency"  : "CE/HIGHWAYS",
"Technical Details" : {
"Type of girder" : "",
"Effective span" : "",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction": "2023-2024"
},
"Present Status" : {
"Status of GAD" : "Yet to be prepared",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "MDU46TEN-TCN",
"LC No": "46",
"Division": "MDU",
"Section": "TEN-TCN",
"District": "",
"Chainage": "51/600-700",
"Location": "",
x : 46.4,  
y : 87.3, 
"ROB/RUB/BOTH" : "RoB & LUS",
"State government agency"  : "CE/HIGHWAYS",
"Technical Details" : {
"Type of girder" : "",
"Effective span" : "",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction": "2023-2024"
},
"Present Status" : {
"Status of GAD" : "Yet to be prepared",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "MDU358TPJ-MDU",
"LC No": "358",
"Division" : "MDU",
"Section" : "TPJ-MDU" ,
"District" : "",
"Chainage" : "488/800-900",
"Location" : "",
x : 45.6,  
y : 69.5, 
"ROB/RUB/BOTH" : "RoB & LUS",
"State government agency"  : "CE/HIGHWAYS",
"Technical Details" : {
"Type of girder" : "",
"Effective span" : "",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction" : "2023-2024"
},
"Present Status" : {
"Status of GAD" : "Yet to be prepared",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "MDU372TPJ-KKDI-MNM",
"LC No": "372",
"Division" : "MDU",
"Section" : "TPJ-KKDI-MNM" ,
"District" : "",
"Chainage" : "452/900-453/000",
"Location" : "",
x : 49.6,  
y : 64.4,
"ROB/RUB/BOTH" : "RoB & LUS",
"State government agency"  : "CE/HIGHWAYS",
"Technical Details" : {
"Type of girder" : "",
"Effective span" : "",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction" : " 2023-2024"
},
"Present Status" : {
"Status of GAD" : "Yet to be prepared",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "MDU376TPJ-KKDI-MNM",
"LC No": "376",
"Division" : "MDU",
"Section" : "TPJ-KKDI-MNM" ,
"District" : "Pudukottai",
"Chainage" : "455/800-900",
"Location" : "Pudukottai Station",
x : 49.6,  
y : 65.9,
"ROB/RUB/BOTH" : "RoB & LUS",
"State government agency"  : "CE/HIGHWAYS",
"Technical Details" : {
"Type of girder" : "composite",
"Effective span" : "",
"Clear span" : "1x42000"
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction" : " 2022-2023"
},
"Present Status" : {
"Status of GAD" : "Pending for Countersign by CE/HW",
"Status of Sanctioned" : "Estimate pending in  S&T, Elec. OHE",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "MDU385TPJ-KKDI-MNM",
"LC No": "385",
"Division" : "MDU",
"Section" : "TPJ-KKDI-MNM" ,
"District" : "Pudukottai",
"Chainage" : "463/000-100",
"Location" : "",
x : 52.5,  
y : 66.7,
"ROB/RUB/BOTH" : "RoB & LUS",
"State government agency"  : "CE/HIGHWAYS",
"Technical Details" : {
"Type of girder" : "composite",
"Effective span" : "1x30000",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction" : " 2023-2024"
},
"Present Status" : {
"Status of GAD" : "Under Review by DIvision",
"Status of Sanctioned" : "Estimate pending in  S&T, Elec. OHE",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "MDU411TPJ-KKDI-MNM",
"LC No": "411",
"Division" : "MDU",
"Section" : "TPJ-KKDI-MNM" ,
"District" : "Sivagangai",
"Chainage" : "489/300-400",
"Location" : "",
x : 49.1,  
y : 68.8,
"ROB/RUB/BOTH" : "RoB & LUS",
"State government agency"  : "CE/HIGHWAYS",
"Technical Details" : {
"Type of girder" : "composite",
"Effective span" : "1x24000",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction" : "2023-2024"
},
"Present Status" : {
"Status of GAD" : "",
"Status of Sanctioned" : "Estimate pending in  S&T, Elec. OHE",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "MDU424MDU-MEJ",
"LC No": "424",
"Division" : "MDU",
"Section" : "MDU-MEJ" ,
"District" : "Sattur",
"Chainage" : "565/100-200",
"Location" : "SATTUR",
x : 40.9,  
y : 78.1,
"ROB/RUB/BOTH" : "RoB & LUS",
"State government agency"  : "CE/HIGHWAYS",
"Technical Details" : {
"Type of girder" : "Bowstring",
"Effective span" : "1x44000",
"Clear span" : "1x42000"
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction" : "2017-2018"
},
"Present Status" : {
"Status of GAD" : "Pending for Countersign by CE/HW",
"Status of Sanctioned" : "Estimate pending in  S&T, Elec. OHE",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "MDU454MDU-MEJ",
"LC No": "454",
"Division" : "MDU",
"Section" : "MDU-MEJ" ,
"District" : "",
"Chainage" : "608/700-800",
"Location" : "",
x : 44,  
y : 82.6,
"ROB/RUB/BOTH" : "RoB",
"State government agency"  : "CE/HIGHWAYS",
"Technical Details" : {
"Type of girder" : "",
"Effective span" : "",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction" : "2023-2024"
},
"Present Status" : {
"Status of GAD" : "Yet to be prepared",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "MDU527MNM-RMM",
"LC No": "527",
"Division" : "MDU",
"Section" : "MNM-RMM" ,
"District" : "",
"Chainage" : "650/900 -651/000",
"Location" : "",
x : 52.5,  
y : 81.9,
"ROB/RUB/BOTH" : "RoB",
"State government agency"  : "CE/HIGHWAYS",
"Technical Details" : {
"Type of girder" : "",
"Effective span" : "",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction" : "2023-2024"
},
"Present Status" : {
"Status of GAD" : "Yet to be prepared",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "PGT156PTJ-SRR",
"LC No": "156",
"Division" : "PGT",
"Section" : "PTJ-SRR" ,
"District" : "",
"Chainage" : "Km 523/22-24",
"Location" : "Moru Glass",
x : 35.3,  
y : 59.1,
"ROB/RUB/BOTH" : "RoB",
"State government agency"  : "RBDCK",
"Technical Details" : {
"Type of girder" : "composite",
"Effective span" : "1x36000",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction" : "2016-2017"
},
"Present Status" : {
"Status of GAD" : "Under Review by Division",
"Status of Sanctioned" : "Under Preparation",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "PGT180SRR-MAQ",
"LC No": "180",
"Division" : "PGT",
"Section" : "SRR-MAQ" ,
"District" : "",
"Chainage" : "Km 663/700-800",
"Location" : "Vattampoyil",
x : 24.8,  
y : 54.7,
"ROB/RUB/BOTH" : "",
"State government agency"  : "RBDCK",
"Technical Details" : {
"Type of girder" : "",
"Effective span" : "",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction" : "2013-2014"
},
"Present Status" : {
"Status of GAD" : "Yet to be prepared",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "PGT185CLT-CAN",
"LC No": "185",
"Division" : "PGT",
"Section" : "CLT-CAN" ,
"District" : "",
"Chainage" : "",
"Location" : "Amalapuri",
x : 27.8,  
y : 53.2,
"ROB/RUB/BOTH" : "",
"State government agency"  : "RBDCK",
"Technical Details" : {
"Type of girder" : "",
"Effective span" : "",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction" : "2023-2024"
},
"Present Status" : {
"Status of GAD" : "Yet to be prepared",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "PGT189CLT-CAN",
"LC No": "189",
"Division" : "PGT",
"Section" : "CLT-CAN" ,
"District" : "",
"Chainage" : "Km 669/700-800",
"Location" : "Temple Road",
x : 24.4,  
y : 53,
"ROB/RUB/BOTH" : "RoB",
"State government agency"  : "RBDCK",
"Technical Details" : {
"Type of girder" : "composite",
"Effective span" : "1 X 43000",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction" : "2017-2018"
},
"Present Status" : {
"Status of GAD" : "Under Review by Division",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "PGT190CLT-CAN",
"LC No": "190",
"Division" : "PGT",
"Section" : "CLT-CAN" ,
"District" : "",
"Chainage" : "Km 670/000-100",
"Location" : "Chungam Gate",
x : 24.3,  
y : 51,
"ROB/RUB/BOTH" : "RoB",
"State government agency"  : "RBDCK",
"Technical Details" : {
"Type of girder" : "composite",
"Effective span" : "1 X 36000",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction" : "2016-2017"
},
"Present Status" : {
"Status of GAD" : "Under CBE approval",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "PGT204CLT-CAN",
"LC No": "204",
"Division" : "PGT",
"Section" : "CLT-CAN" ,
"District" : "",
"Chainage" : "Km 690/600-700",
"Location" : "Quilandi- Nelliadikkadavu Kollam-Nelliyadi Rd",
x : 27.8,  
y : 51.7,
"ROB/RUB/BOTH" : "RoB",
"State government agency"  : "RBDCK",
"Technical Details" : {
"Type of girder" : "composite",
"Effective span" : "1x30000",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction" : "2015-2016"
},
"Present Status" : {
"Status of GAD" : "Pending for Countersign by CE/HW",
"Status of Sanctioned" : "Under Preparation",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "PGT205CLT-CAN",
"LC No": "205",
"Division" : "PGT",
"Section" : "CLT-CAN" ,
"District" : "",
"Chainage" : "Km 691/400-500",
"Location" : "Nunjukunnu Muchukunnu",
x : 27.4,  
y : 50.4,
"ROB/RUB/BOTH" : "RoB",
"State government agency"  : "RBDCK",
"Technical Details" : {
"Type of girder" : "composite",
"Effective span" : "1x30000",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction" : "2015-2016"
},
"Present Status" : {
"Status of GAD" : "Pending for Countersign by CE/HW",
"Status of Sanctioned" : "Under Preparation",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "PGT211CLT-CAN",
"LC No": "211",
"Division" : "PGT",
"Section" : "CLT-CAN" ,
"District" : "",
"Chainage" : "701/600-700",
"Location" : "Payyoli - Kottakal Beach",
x : 25.8,  
y : 45.7,
"ROB/RUB/BOTH" : "RoB",
"State government agency"  : "RBDCK",
"Technical Details" : {
"Type of girder" : "composite",
"Effective span" : "1x36000",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction" : "2016-2017"
},
"Present Status" : {
"Status of GAD" : "Pending for Countersign by CE/HW",
"Status of Sanctioned" : "Under Preparation",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "PGT218CLT-CAN",
"LC No": "218",
"Division" : "PGT",
"Section" : "CLT-CAN" ,
"District" : "",
"Chainage" : "Km 722/400-500",
"Location" : "Azhiyur - Monthalkadavu",
x : 27,  
y : 48.6,
"ROB/RUB/BOTH" : "RoB",
"State government agency"  : "RBDCK",
"Technical Details" : {
"Type of girder" : "composite",
"Effective span" : "1x36000",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction" : "2016-2017"
},
"Present Status" : {
"Status of GAD" : "Pending for Countersign by CE/HW",
"Status of Sanctioned" : "Under Preparation",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "PGT224CLT-CAN",
"LC No": "224",
"Division" : "PGT",
"Section" : "CLT-CAN" ,
"District" : "",
"Chainage" : "Km 728/300-400",
"Location" : "Kuriyanchil",
x : 26.4,  
y : 47.6,
"ROB/RUB/BOTH" : "RoB",
"State government agency"  : "RBDCK",
"Technical Details" : {
"Type of girder" : "composite",
"Effective span" : "1x36000",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction" : "2016-2017"
},
"Present Status" : {
"Status of GAD" : "Under CBE Approval",
"Status of Sanctioned" : "Under Preparation",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "PGT265CAN-MAQ-MAJN",
"LC No": "265",
"Division" : "PGT",
"Section" : "CAN-MAQ-MAJN" ,
"District" : "",
"Chainage" : "Km 792/600-700",
"Location" : "Bericherry",
x : 23.9,  
y : 43.2,
"ROB/RUB/BOTH" : "RoB",
"State government agency"  : "RBDCK",
"Technical Details" : {
"Type of girder" : "composite",
"Effective span" : "",
"Clear span" : "1x44000"
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction" : "2015-2016"
},
"Present Status" : {
"Status of GAD" : "Under CBE Approval",
"Status of Sanctioned" : "Under Preparation",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "PGT266CAN-MAQ-MAJN",
"LC No": "266",
"Division" : "PGT",
"Section" : "CAN-MAQ-MAJN" ,
"District" : "",
"Chainage" : "Km 793/300-400",
"Location" : "Tikkotti-Vallapara",
x : 23.9,  
y : 41.9,
"ROB/RUB/BOTH" : "RoB",
"State government agency"  : "RBDCK",
"Technical Details" : {
"Type of girder" : "composite",
"Effective span" : "1x36000",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction" : "2017-2018"
},
"Present Status" : {
"Status of GAD" : "Pending for Countersign by CE/HW",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "PGT267CAN-MAQ-MAJN",
"LC No": "267",
"Division" : "PGT",
"Section" : "CAN-MAQ-MAJN" ,
"District" : "",
"Chainage" : "Km 795/500-600",
"Location" : "Eadchakai-Nadakkavu",
x : 23.1,  
y : 40.6,
"ROB/RUB/BOTH" : "RoB",
"State government agency"  : "RBDCK",
"Technical Details" : {
"Type of girder" : "composite",
"Effective span" : "1x36000",
"Clear span" : "1 X 34750"
},
"Details of Cost" : {
"Cost of Rly Portion" : 53644289,
"Cost of State Portion" : 53644289,
"Total Cost" : 107288578,
"Year of sanction" : "2015-2016",
},
"Present Status" : {
"Status of GAD" : "Approved",
"Status of Sanctioned" : "For Countersign",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "PGT273CAN-MAQ-MAJN",
"LC No": "273",
"Division" : "PGT",
"Section" : "CAN-MAQ-MAJN",
"District" : "",
"Chainage" : " Km 815/200-300",
"Location" : "Kottikulam-Kushal Nagar",
x : 22.2,  
y : 39,
"ROB/RUB/BOTH" : "RoB",
"State government agency"  : "RBDCK",
"Technical Details" : {
"Type of girder" : "composite",
"Effective span" : "1 X 30000",
"Clear span" : "1 X 28800"
},
"Details of Cost" : {
"Cost of Rly Portion" : 36516754,
"Cost of State Portion" : 36516754,
"Total Cost" : 0,
"Year of sanction" : "2014-2015",
},
"Present Status" : {
"Status of GAD" : "Approved",
"Status of Sanctioned" : "For Countersign",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "PGT281CAN-MAQ-MAJN",
"LC No": "281",
"Division" : "PGT",
"Section" : "CAN-MAQ-MAJN" ,
"District" : "",
"Chainage" : "Km 831/700-800",
"Location" : "Uduma",
x : 19.5,  
y : 39.9,
"ROB/RUB/BOTH" : "RoB",
"State government agency"  : "RBDCK",
"Technical Details" : {
"Type of girder" : "composite",
"Effective span" : "1 X 30000",
"Clear span" : "1 X 28800"
},
"Details of Cost" : {
"Cost of Rly Portion" : 36421659,
"Cost of State Portion" : 155268742,
"Total Cost" : 0,
"Year of sanction" : "2013-2014"
},
"Present Status" : {
"Status of GAD" : "Approved",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "PGT289CAN-MAQ-MAJN",
"LC No": "289",
"Division" : "PGT",
"Section" : "CAN-MAQ-MAJN" ,
"District" : "",
"Chainage" : "",
"Location" : "Hosangadi - Bangara Mjs-Nh17",
x : 18.3,  
y : 38,
"ROB/RUB/BOTH" : "RoB",
"State government agency"  : "RBDCK",
"Technical Details" : {
"Type of girder" : "composite",
"Effective span" : "1x24000 + 2x18000",
"Clear span" : "1 X 28800"
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction" : "2023-2024"
},
"Present Status" : {
"Status of GAD" : "Pending for Countersign by CE/HW",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "PGT291CAN-MAQ-MAJN",
"LC No": "291",
"Division" : "PGT",
"Section" : "CAN-MAQ-MAJN" ,
"District" : "",
"Chainage" : "Km 868/700-800",
"Location" : "Manjeswar-Udyavar Road",
x : 18.1,  
y : 36.7,
"ROB/RUB/BOTH" : "RoB",
"State government agency"  : "RBDCK",
"Technical Details" : {
"Type of girder" : "composite",
"Effective span" : "1 X 36000 (SK)33829 Sq",
"Clear span" : "1 X 34380 (SK) 32307 Sq"
},
"Details of Cost" : {
"Cost of Rly Portion" : 47337875,
"Cost of State Portion" : 47337875,
"Total Cost" : 94675750,
"Year of sanction" : "2015-2016"
},
"Present Status" : {
"Status of GAD" : "Pending for Countersign by CE/HW",
"Status of Sanctioned" : "For Countersign",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "TVC2TVC-NCJ",
"LC No": "2",
"Division" : "TVC",
"Section" : "TVC-NCJ" ,
"District" : "",
"Chainage" : "",
"Location" : "",
x : 20,  
y : 36.7,
"ROB/RUB/BOTH" : "",
"State government agency"  : "",
"Technical Details" : {
"Type of girder" : "",
"Effective span" : "",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction" : "2024-2025"
},
"Present Status" : {
"Status of GAD" : "Yet to be prepared",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "TVC6TVC-NCJ",
"LC No": "6",
"Division" : "TVC",
"Section" : "TVC-NCJ" ,
"District" : "",
"Chainage" : "Km 233/100-200",
"Location" : "Balaramapuram",
x : 38.6,  
y : 91.2,
"ROB/RUB/BOTH" : "RoB",
"State government agency"  : "RBDCK",
"Technical Details" : {
"Type of girder" : "Composite",
"Effective span" : "1x36000 + 1x18000",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction" : "2017-2018"
},
"Present Status" : {
"Status of GAD" : "Pending for Countersign by CE/HW",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "TVC17ERS-ALLP-KYJ",
"LC No": "17",
"Division" : "TVC",
"Section" : "TVC-NCJ" ,
"District" : "",
"Chainage" : "Km 18/0-100",
"Location" : "Ezhupunna gate",
x : 24.8,  
y : 72.4,
"ROB/RUB/BOTH" : "RoB",
"State government agency"  : "RBDCK",
"Technical Details" : {
"Type of girder" : "Composite",
"Effective span" : "2x24000",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction" : "2012-2013"
},
"Present Status" : {
"Status of GAD" : "Pending for Countersign by CE/HW",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "TVC24SRR-CHTS",
"LC No": "24",
"Division" : "TVC",
"Section" : "SRR-CHTS" ,
"District" : "",
"Chainage" : "Km 35/7-8",
"Location" : "Nedupuzha",
x : 26.2,  
y : 64.3,
"ROB/RUB/BOTH" : "RoB",
"State government agency"  : "RBDCK",
"Technical Details" : {
"Type of girder" : "Composite",
"Effective span" : "1 X 30000 (SK) 25981 Sq+ 1 X 24000 (SK) 20785 Sq",
"Clear span" : "1 X 27955 (SK) 24210 Sq + 1 X 21924 (SK) 18987 Sq"
},
"Details of Cost" : {
"Cost of Rly Portion" : 199595043,
"Cost of State Portion" : 199595043,
"Total Cost" : 399190086,
"Year of sanction" : "2013-2014"
},
"Present Status" : {
"Status of GAD" : "Approved",
"Status of Sanctioned" : "Sanctioned",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "TVC26SRR-CHTS",
"LC No": "26",
"Division" : "TVC",
"Section" : "SRR-CHTS" ,
"District" : "",
"Chainage" : "Km 39/13-14",
"Location" : "Ollur main gate",
x : 31.9,  
y : 73.6,
"ROB/RUB/BOTH" : "",
"State government agency"  : "RBDCK",
"Technical Details" : {
"Type of girder" : "",
"Effective span" : "",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction" : "2015-2016"
},
"Present Status" : {
"Status of GAD" : "Yet to be prepared",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "TVC28SRR-CHTS",
"LC No": "28",
"Division" : "TVC",
"Section" : "SRR-CHTS" ,
"District" : "",
"Chainage" : "Km 46/600-700",
"Location" : "Pudukkad",
x : 26.6,  
y : 65.4,
"ROB/RUB/BOTH" : "RoB",
"State government agency"  : "RBDCK",
"Technical Details" : {
"Type of girder" : "Composite",
"Effective span" : "1 X 41500 & 1 X 30000",
"Clear span" : "1 X 40250 & 1 X 28750 "
},
"Details of Cost" : {
"Cost of Rly Portion" : 2369596810,
"Cost of State Portion" : 239596810,
"Total Cost" : 479193620,
"Year of sanction" : "2019-2020"
},
"Present Status" : {
"Status of GAD" : "Approved",
"Status of Sanctioned" : "Sanctioned",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "TVC32SRR-CHTS",
"LC No": "32",
"Division" : "TVC",
"Section" : "SRR-CHTS" ,
"District" : "",
"Chainage" : "Km 50/2-3",
"Location" : "",
x : 31.9,  
y : 72.3,
"ROB/RUB/BOTH" : "RoB",
"State government agency"  : "RBDCK",
"Technical Details" : {
"Type of girder" : "",
"Effective span" : "",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction" : "2017-2018"
},
"Present Status" : {
"Status of GAD" : "Yet to be prepared",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "TVC33SRR-CHTS",
"LC No": "33",
"Division" : "TVC",
"Section" : "SRR-CHTS" ,
"District" : "",
"Chainage" : "Km 51/9-10",
"Location" : "Alathur gate / Velankatty gate",
x : 33.4,  
y : 78.8,
"ROB/RUB/BOTH" : "RoB",
"State government agency"  : "RBDCK",
"Technical Details" : {
"Type of girder" : "",
"Effective span" : "",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction" : "2017-2018"
},
"Present Status" : {
"Status of GAD" : "Yet to be prepared",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "TVC61SRR-CHTS",
"LC No": "61",
"Division" : "TVC",
"Section" : "SRR-CHTS" ,
"District" : "",
"Chainage" : "Km 78/2-3",
"Location" : "Champannur",
x : 29.2,  
y : 62,
"ROB/RUB/BOTH" : "",
"State government agency"  : "RBDCK",
"Technical Details" : {
"Type of girder" : "",
"Effective span" : "",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction" : "2019-2020"
},
"Present Status" : {
"Status of GAD" : "Yet to be prepared",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "TVC75ASRR-CHTS",
"LC No": "75A",
"Division" : "TVC",
"Section" : "SRR-CHTS" ,
"District" : "",
"Chainage" : "Km 108/6-7",
"Location" : "Atlantis",
x : 25.2,  
y : 69.9,
"ROB/RUB/BOTH" : "RoB",
"State government agency"  : "RBDCK",
"Technical Details" : {
"Type of girder" : "Composite",
"Effective span" : "1 X 36000",
"Clear span" : "1 X 34750"
},
"Details of Cost" : {
"Cost of Rly Portion" : 345327923,
"Cost of State Portion" : 343901717,
"Total Cost" : 0,
"Year of sanction" : "2018-2019"
},
"Present Status" : {
"Status of GAD" : "Approved",
"Status of Sanctioned" : "For Countersign",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "TVC76SRR-CHTS",
"LC No": "76",
"Division" : "TVC",
"Section" : "SRR-CHTS" ,
"District" : "",
"Chainage" : "Km 111/600-700",
"Location" : "Vathuruthy",
x : 25.2,  
y : 70.9,
"ROB/RUB/BOTH" : "",
"State government agency"  : "RBDCK",
"Technical Details" : {
"Type of girder" : "",
"Effective span" : "",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction" : "2019-2020"
},
"Present Status" : {
"Status of GAD" : "Yet to be prepared",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "TVC543QLN-TVC",
"LC No": "543",
"Division" : "TVC",
"Section" : "QLN-TVC" ,
"District" : "",
"Chainage" : "Km 157/200-300",
"Location" : "S.N.College Gate",
x : 30.1,  
y : 85.3,
"ROB/RUB/BOTH" : "RoB",
"State government agency"  : "RBDCK",
"Technical Details" : {
"Type of girder" : "Composite",
"Effective span" : "1 X 36000",
"Clear span" : "1 X 34750"
},
"Details of Cost" : {
"Cost of Rly Portion" : 178693571,
"Cost of State Portion" : 53658418,
"Total Cost" : 107316836,
"Year of sanction" : "2015-2016"
},
"Present Status" : {
"Status of GAD" : "Approved",
"Status of Sanctioned" : "Approach portion under vetting",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "TVC549QLN-TVC",
"LC No": "549",
"Division" : "TVC",
"Section" : "QLN-TVC" ,
"District" : "",
"Chainage" : "Km 162/000-100",
"Location" : "Kottikada",
x : 33,  
y : 83.2,
"ROB/RUB/BOTH" : "RoB",
"State government agency"  : "RBDCK",
"Technical Details" : {
"Type of girder" : "Composite",
"Effective span" : "1 X 30000",
"Clear span" : "1 X 28800"
},
"Details of Cost" : {
"Cost of Rly Portion" : 164887303,
"Cost of State Portion" : 235886740,
"Total Cost" : 0,
"Year of sanction" : "2016-2017"
},
"Present Status" : {
"Status of GAD" : "Approved",
"Status of Sanctioned" : "Under Vetting",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "TVC554QLN-TVC",
"LC No": "554",
"Division" : "TVC",
"Section" : "QLN-TVC" ,
"District" : "",
"Chainage" : "",
"Location" : "Ollal Gate",
x : 33.1,  
y : 84.6,
"ROB/RUB/BOTH" : "RoB",
"State government agency"  : "RBDCK",
"Technical Details" : {
"Type of girder" : "Composite",
"Effective span" : "1x36000",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction" : "2023-2024"
},
"Present Status" : {
"Status of GAD" : "Approved",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "TVC558QLN-TVC",
"LC No": "558",
"Division" : "TVC",
"Section" : "QLN-TVC" ,
"District" : "",
"Chainage" : "Km 177/800-900",
"Location" : "Punnaamoodu",
x : 33.4,  
y : 85.7,
"ROB/RUB/BOTH" : "RoB",
"State government agency"  : "RBDCK",
"Technical Details" : {
"Type of girder" : "Composite",
"Effective span" : "1x36000",
"Clear span" : "1 X 34750"
},
"Details of Cost" : {
"Cost of Rly Portion" : 116311535,
"Cost of State Portion" : 243947905,
"Total Cost" : 0,
"Year of sanction" : "2016-2017"
},
"Present Status" : {
"Status of GAD" : "Approved",
"Status of Sanctioned" : "Under Vetting",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "TVC567QLN-TVC",
"LC No": "567",
"Division" : "TVC",
"Section" : "QLN-TVC" ,
"District" : "",
"Chainage" : "Km 192/100-200",
"Location" : "Sarkara",
x : 33.8,  
y : 86.7,
"ROB/RUB/BOTH" : "",
"State government agency"  : "RBDCK",
"Technical Details" : {
"Type of girder" : "",
"Effective span" : "",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction" : "2013-2014"
},
"Present Status" : {
"Status of GAD" : "Yet to be prepared",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "TVC569QLN-TVC",
"LC No": "569",
"Division" : "TVC",
"Section" : "QLN-TVC" ,
"District" : "",
"Chainage" : "Km 192/800-900",
"Location" : "Manjadimmodu",
x : 31.2,  
y : 87.5,
"ROB/RUB/BOTH" : "",
"State government agency"  : "RBDCK",
"Technical Details" : {
"Type of girder" : "",
"Effective span" : "",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction" : "2013-2014"
},
"Present Status" : {
"Status of GAD" : "Yet to be prepared",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "TVC573QLN-TVC",
"LC No": "573",
"Division" : "TVC",
"Section" : "QLN-TVC" ,
"District" : "",
"Chainage" : "Km 202/700-800",
"Location" : "Kanniyapuram",
x : 35.2,  
y : 88.3,
"ROB/RUB/BOTH" : "RoB",
"State government agency"  : "RBDCK",
"Technical Details" : {
"Type of girder" : "Composite",
"Effective span" : "2x18000+1x24000",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction" : "2013-2014"
},
"Present Status" : {
"Status of GAD" : "Pending for Countersign by CE/HW",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "TVC574QLN-TVC",
"LC No": "574",
"Division" : "TVC",
"Section" : "QLN-TVC" ,
"District" : "",
"Chainage" : "Km 203/13-14",
"Location" : "Vettur road gate",
x : 29.9,  
y : 89,
"ROB/RUB/BOTH" : "RoB",
"State government agency"  : "RBDCK",
"Technical Details" : {
"Type of girder" : "Composite",
"Effective span" : "1 X 36000",
"Clear span" : "1 X 34750"
},
"Details of Cost" : {
"Cost of Rly Portion" : 206140190,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction" : "2015-2016",
},
"Present Status" : {
"Status of GAD" : "Approved",
"Status of Sanctioned" : "Approach portion under vetting",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "TVC577-BQLN-TVC",
"LC No": "577-B",
"Division" : "TVC",
"Section" : "QLN-TVC" ,
"District" : "",
"Chainage" : "Km 212/600-700",
"Location" : "Clay gate",
x : 33.5,  
y : 91.4,
"ROB/RUB/BOTH" : "RoB",
"State government agency"  : "RBDCK",
"Technical Details" : {
"Type of girder" : "Bow String",
"Effective span" : "",
"Clear span" : "1x72000"
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction" : "2013-2014"
},
"Present Status" : {
"Status of GAD" : "Yet to be prepared",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": "TVC220BSRR-CHTS",
"LC No": "220-B",
"Division" : "TVC",
"Section" : "SRR-CHTS" ,
"District" : "",
"Chainage" : "Km 107/200-300",
"Location" : "Ernakulam South",
x : 38,  
y : 60,
"ROB/RUB/BOTH" : "RoB",
"State government agency"  : "RBDCK",
"Technical Details" : {
"Type of girder" : "",
"Effective span" : "",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction" : "2013-2014"
},
"Present Status" : {
"Status of GAD" : "Under Review by Division",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
},
{
"id": " SA352ED YARD",
"LC No": "352",
"Division" : " SA",
"Section" : "ED YARD" ,
"District" : "",
"Chainage" : "",
"Location" : "",
x : 38.6,  
y : 53.7,
"ROB/RUB/BOTH" : "",
"State government agency"  : "CE/HIGHWAYS",
"Technical Details" : {
"Type of girder" : "",
"Effective span" : "",
"Clear span" : ""
},
"Details of Cost" : {
"Cost of Rly Portion" : 0,
"Cost of State Portion" : 0,
"Total Cost" : 0,
"Year of sanction" : "2024-2025"
},
"Present Status" : {
"Status of GAD" : "",
"Status of Sanctioned" : "",
"Status of work" : "",
"Status of contract" : "",
"Status of tender" : ""
}
}
];
