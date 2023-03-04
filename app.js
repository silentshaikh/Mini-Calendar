let month = document.getElementById("month");
let dayName = document.getElementById("day");
let dayNum = document.getElementById("date");
let year = document.getElementById("year");

let date = new Date();
month.innerHTML = date.toLocaleString("en",{ month : "long"});
dayName.innerHTML = date.toLocaleString("en",{ weekday : "long"});
let numDate = date.getDate();
dayNum.innerHTML = numDate;
let numYear = date.getFullYear();
year.innerHTML = numYear;
