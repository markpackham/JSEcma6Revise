const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//Old for loop to compare things to
/*
for (let i = 0; i < companies.length; i++) {
    console.log(companies[i]);
}
*/

//forEach, way better than for loop for arrays
companies.forEach(function (company) {
    document.writeln(company.name);
});
// Company One Company Two Company Three Company Four Company Five Company Six Company Seven Company Eight Company Nine

//filter
/* Old for loop way
let canDrink = [];
for(let i =0; i<ages.length;i++){
    if(ages[i] >= 16){
        canDrink.push(ages[i]);
    }
}
console.log(canDrink);
*/

document.writeln("<br>");
//Get 16 and older
const canDrink = ages.filter(function (age) {
    if (age >= 16) {
        return true;
    }
});
document.writeln(canDrink);
// 33,20,16,54,21,44,61,45,25,64,32
document.writeln("<br>");

//ECMA6 filter
const canDrink2 = ages.filter(age => age >= 16);
document.writeln(canDrink2);
//Same output but neater  33,20,16,54,21,44,61,45,25,64,32

//Filter retail companies
const retailCompanies = companies.filter(company => company.category === 'Retail');
document.writeln("<br>");
document.writeln(retailCompanies);

//Filter companies that started in the 80s
const eightiesCompanies = companies.filter(company => (company.start > 1979 && company.start < 1990));
document.writeln("<br>");
document.writeln(eightiesCompanies);

//Filter companies that lasted 10 years and over
const decadeCompanies = companies.filter(company => (company.end - company.start) >= 10);
document.writeln("<br>");
document.writeln(decadeCompanies);
console.log(decadeCompanies);

//map
// Create array of company names
const companyNames = companies.map(company => company.name);
document.writeln("<br>");
document.writeln(companyNames);
// Company One,Company Two,Company Three,Company Four,Company Five,Company Six,Company Seven,Company Eight,Company Nine

//Output details
const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
document.writeln("<br>");
document.writeln(testMap);
//Company One [1981 - 2004],Company Two [1992 - 2008],Company Three [1999 - 2007],Company Four [1989 - 2010],Company Five [2009 - 2014],Company Six [1987 - 2010],Company Seven [1986 - 1996],Company Eight [2011 - 2016],Company Nine [1981 - 1989]

//Square root the ages then * 2
const agesSquare2 = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2);
document.writeln("<br>");
document.writeln(agesSquare2);
// 11.489125293076057,6.928203230275509,8.94427190999916,8,4.47213595499958,14.696938456699069,9.16515138991168,13.2664991614216,15.620499351813308,7.211102550927978,7.745966692414834,13.416407864998739,10,16,11.313708498984761

//sort companies by start year
const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanies);

//Shorter way to sort by start year
const sortedCompaniesShort = companies.sort((a, b) => a.start - b.start);﻿
console.log(sortedCompaniesShort);

//sort companies by age in asceding order
const sortAges = ages.sort((a, b) => a - b);
document.writeln("<br>");
document.writeln(sortAges);
// 5,12,13,15,16,20,21,25,32,33,44,45,54,61,64

//sort companies by age in descending order
const sortAges2 = ages.sort((a, b) => b - a);
document.writeln("<br>");
document.writeln(sortAges2);
// 64,61,54,45,44,33,32,25,21,20,16,15,13,12,5

// reduce, old slow way via for loop
/*
let ageSum = 0;
for(let i = 0; i<ages.length;i++){
    ageSum += ages[i];
}
document.writeln("<br>");
document.writeln(ageSum);
*/

//Reduce (0 is our staring point)
const ageSum2 = ages.reduce((total, age) => total + age, 0);
document.writeln("<br>");
document.writeln(ageSum2);
//460

//Get total years for all companies
const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
document.writeln("<br>");
document.writeln(totalYears);
//119

//Combine the functions
const combined = ages
//* all by 2
    .map(age => age * 2)
    //get all ages > 40
    .filter(age => age > 40)
    //put them in ascedning order
    .sort((a, b) => a - b)
    //add them all together
    .reduce((a, b) => a + b, 0);

document.writeln("<br>");
document.writeln(combined);
//758