
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
let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');



function Store(name, minCustomer, maxCustomer, cookiesHrly, hours) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.cookiesHrly = cookiesHrly;
  this.hours = hours;

  this.customers = 0;
  this.totalSale = 0;
  this.hrlyCust = 0
  this.randCust();
  this.counter();
  this.perHrSale();
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
   total = total + this.totalSale[i];
  }

}
//this should return a sale per hour based on the random customers per hour
Store.prototype.perHrSale = function () {
  for (let i = 0; i < this.hours.length; i +=1 ) {
  let range = this.randCust(this.minCustomer, this.maxCustomer);

    this.cookiesHrly = Math.round(this.cookiesHrly * range);
  }
  return this.cookiesHrly;
}

let paris = new Store("Paris", 20, 38, 2.3, hours);
let lima = new Store("Lima", 2, 16, 4.6, hours);
let seattle = new Store("Seattle", 2, 16, 4.6, hours);
let tokyo = new Store("Tokyo", 2, 16, 4.6, hours);
let dubai = new Store("Dubai", 2, 16, 4.6, hours);



const tableContainer = document.getElementById('StoreData').appendChild(table);

switchElement.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});