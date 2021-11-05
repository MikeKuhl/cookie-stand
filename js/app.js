
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
let stores = [];
let cookieTable = document.getElementById('cookieTable');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');



function Store(name, minCustomers, maxCustomers, avgCookie) {

  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookie = avgCookie;


  this.totalCustomersPerHour = [];
  this.cookiesPerHour = []
  this.totalSale = 0;
  this.customersPerHour();
  this.cookiesPerSale();
  stores.push(this);


}

//returns total number of cookies sold every hour
Store.prototype.customersPerHour =  function() {
  for (let i = 0; i < hours.length; i+= 1) {
    let hourlyCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    this.totalCustomersPerHour.push(hourlyCustomers);
  }
}
//this should return a sale per hour based on the random customersPerHour per hour
Store.prototype.cookiesPerSale = function () {
  for (let i = 0; i < hours.length; i+= 1) {
    let hourlySales = Math.ceil(this.totalCustomersPerHour[i] * this.avgCookie);
    this.cookiesPerHour.push(hourlySales);
    this.totalSale += hourlySales;
  }

}
Store.prototype.render = function () {
let row = document.createElement('tr');
let tabData = document.createElement('td');
tabData.textContent = this.name;
row.appendChild(tabData);
for (let i = 0; i < this.cookiesPerHour.length; i +=1) {
  let cell = document.createElement('td');
  cell.textContent = this.cookiesPerHour[i];
  row.appendChild(cell);
};
let total = document.createElement('td');
total.textContent =  this.totalSale;
row.appendChild(total);
cookieTable.appendChild(row);
};

Store.prototype.renderRow = function() {

}


function renderHeader() {
  let tableRow = document.createElement('tr');
  let thElem =  document.createElement('th');
  thElem.textContent = null;
  cookieTable.appendChild(tableRow);
  tableRow.appendChild(thElem);
  for (let i = 0; i < hours.length; i+=1) {
    thElem = document.createElement('th');
    thElem.textContent = hours[i];
    tableRow.appendChild(thElem);
  }
  thElem = document.createElement('th');
  thElem.textContent = 'Store Total';
  tableRow.appendChild(thElem);
  cookieTable.appendChild(tableRow)
};

function renderStores() {
  for (let i = 0; i < stores.length; i+=1) {
    stores[i].render();
  }
};

function renderFooterRow() {
  let tableRow = document.createElement('tr');
  tableRow.textContent = 'Totals';
  cookieTable.appendChild(tableRow);
  let total = 0;
  for (let hoursIndex = 0; hoursIndex < hours.length; hoursIndex +=1) {
    let hourlyTotal = 0;
    for (let j = 0; j < stores.length; j+=1) {
      hourlyTotal = hourlyTotal + stores[j].cookiesPerHour[hoursIndex];
      total += stores[j].cookiesPerHour[hoursIndex];
    }
    var tdData = document.createElement('td');
    tdData.textContent = hourlyTotal;
    tableRow.appendChild(tdData);
  }
  tdData = document.createElement('td');
  tdData.textContent = total;
  tableRow.appendChild(tdData);
  tableRow.setAttribute('id', 'footerRow');
}

// constructs new stores
let paris = new Store("Paris", 20, 38, 2.3);
let lima = new Store("Lima", 2, 16, 4.6);
let seattle = new Store("Seattle", 2, 16, 4.6);
let tokyo = new Store("Tokyo", 2, 16, 4.6);
let dubai = new Store("Dubai", 2, 16, 4.6);


renderHeader();
renderStores();
renderFooterRow();

const formElem = document.getElementById('form');

formElem.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(formElem);
  let newStore = new Store(
    formData.get('name'),
    formData.get('minCustomers'),
    formData.get('maxCustomers'),
    formData.get('avgCookie')
  );

  newStore.render();
  const footer = document.getElementById('footerRow');
  footer.remove();
  renderFooterRow();
  formElem.reset();
});

//theme
switchElement.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});


//https://www.delftstack.com/howto/javascript/create-table-javascript/
//https://www.delftstack.com/howto/javascript/create-table-javascript/
//https://stackoverflow.com/questions/8302166/dynamic-creation-of-table-with-dom
//https://www.tutorialrepublic.com/html-tutorial/html-tables.php
//https://www.codeproject.com/Articles/1036671/Creating-HTML-Tables-with-JavaScript-DOM-Methods
//https://www.py4u.net/discuss/277466
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form