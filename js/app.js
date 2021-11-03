
'use strict'

const switchElement = document.querySelector(".switch");
let hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
  "8pm",
];

let cookieTable = document.getElementById('cookieTable');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');



function Store(name, minCustomer, maxCustomer, avgCookie, hours) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookie = avgCookie;
  this.hours = hours;

  this.customers = 0;
  this.custPerHrs = []
  this.avgCookieSale = []
  this.totalSale = [];
  this.randCust();
  this.counter();
  this.generateHourlySales();
  this.cookiePerSale();
  this.salesPerHr = []
}
//generates a random number of sales/customers per day
Store.prototype.randCust = function()  {
  let range = this.maxCustomer - this.minCustomer + 1;
  this.customers = Math.floor(Math.random() * range) + this.minCustomer;
}
//returns total number of cookies sold every hour
Store.prototype.counter =  function() {
  let total = this.totalSale[0]
  for (let i = 1; i < this.totalSale.length; i +=1) {
   this.total = total + this.totalSale[i];
  }

}
//this should return a sale per hour based on the random customers per hour
Store.prototype.generateHourlySales = function () {
  for (let i = 0; i < this.hours.length; i +=1) {


const rando = Math.random()
const absCustomerRange = this.maxCustomers - this.minCustomers + 1
const generatedCustomerCount = Math.floor(Math.random() * absCustomerRange) ;
const adjustedCustomerCount = generatedCustomerCount + this.minCustomer
const estimatedSales = Math.ceil(adjustedCustomerCount * this.avgCookieSale)
this.salesPerHr.push(adjustedCustomerCount);
}
}
Store.prototype.cookiePerSale = function () {
for (let i = 0; i < this.hours.length; i+=1) {
  let hrlySale =  Math.floor(this.custPerHrs[i] * this.avgCookie);
  this.avgCookieSale.push(hrlySale);
  this.totalSale += hrlySale;
}
}



// Store.prototype.render = function () {
// let row = document.createElement('tr');
// let tabData = document.createElement('td');
// tabData.textContent = this.name;
// row.appendChild(tabData);
// for (let i = 0; i < this.avgCookie.length; i +=1) {
//   let cell = document.createElement('td');
//   cell.textContent = this.avgCookie[i];
//   row.appendChild(cell);
// };
// let total = document.createElement('td');
// total.textContent =  this.totalSale;
// row.appendChild(total);
// cookieTable.appendChild(row);
// };




let paris = new Store("Paris", 20, 38, 2.3, hours);
let lima = new Store("Lima", 2, 16, 4.6, hours);
let seattle = new Store("Seattle", 2, 16, 4.6, hours);
let tokyo = new Store("Tokyo", 2, 16, 4.6, hours);
let dubai = new Store("Dubai", 2, 16, 4.6, hours);

const stores = ["Paris", 20, 38, 2.3, hours,"Lima", 2, 16, 4.6, hours,
"Seattle", 2, 16, 4.6, hours,
"Tokyo", 2, 16, 4.6, hours,
"Dubai", 2, 16, 4.6, hours]

const hourlyTotals = [];
for (let hourlyIndex=0; hourlyIndex < hours.length; hourlyIndex+=1) {
  const timeSlot = hours[hourlyIndex];
  let hourlySalestotal = 0;
  for(let storesIndex= 0; j < stands.length; storesIndex+=1) {
    const store = stores[storesIndex];
    const hourlySalesForCurrentStand = store.salesPerHr[hourlyIndex]

    hourlySalesTotal =+ hourlySalesForCurrentStand;
  }
  hourlyTotals.push(hourlySalestotal);
}
// seattle.render();

switchElement.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});


//https://www.aspsnippets.com/Articles/Create-dynamic-Table-in-HTML-at-runtime-using-JavaScript.aspx
//https://www.delftstack.com/howto/javascript/create-table-javascript/
//https://www.delftstack.com/howto/javascript/create-table-javascript/
//https://stackoverflow.com/questions/8302166/dynamic-creation-of-table-with-dom
//https://www.tutorialrepublic.com/html-tutorial/html-tables.php
//https://www.codeproject.com/Articles/1036671/Creating-HTML-Tables-with-JavaScript-DOM-Methods