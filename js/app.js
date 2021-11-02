// "use strict";

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

function hourlyCust(min, max) {
  let range = max - min + 1;
  return Math.floor(Math.random() * range) + min;
}
function cookieTotal(store) {
  for (let i = 0; i < store.cookiesHrly; i += 1) {
    let hourlyCustSale = hourlyCust(store.minCustomer, store.maxCustomer);
    store.cookieTotal[i] = Math.round(store.cookiesHrly * hourlyCustSale);
  }
  return store.cookieTotal;
}
function saleHrs(store) {
  for (let i = 0; i < store.hours; i += 1) {
    let custHourly = hourlyCust(store.minCustomer, store.maxCustomer);
    store.cookiesHrly[i] = Math.round(store.cookiesHrly * custHourly);
  }
  return store.cookiesHrly;
}

// function Store(name, minCustomer, maxCustomer, cookiesHrly, hours) {
//   this.name = name;
//   this.minCustomer = minCustomer;
//   this.maxCustomer = maxCustomer;
//   this.cookiesHrly = cookiesHrly;
//   this.hours = hours;
//   this.cookieTotal = 0;
//   this.saleHrs = 0;
// }

// let paris = new Store("Paris", 20, 38, 2.3, hours);
// let lima = new Store("Lima", 2, 16, 4.6, hours);
// let seattle = new Store("Lima", 2, 16, 4.6, hours);
// let tokyo = new Store("Lima", 2, 16, 4.6, hours);
// let dubai = new Store("Lima", 2, 16, 4.6, hours);

function creator(
  name,
  minCustomer,
  maxCustomer,
  cookiesHrly,
  hoursOfOperation
) {
  return {
    name,
    minCustomer,
    maxCustomer,
    cookiesHrly,
    hoursOfOperation,

    avgOrder: function () {
      for (let i = 0; i < this.hoursOfOperation.length; i += 1) {
        let avgOrder = hourlyCust(this.minCustomer, this.maxCustomer);
        this.cookieTotal[i] = avgOrder * Math.floor(this.cookiesHrly);
      }
    },
    cookieTotal: [],
    cookiesAmt: 0,
  };
}

// let seattle = {
//   //seattle
//   name: "Seattle",
//   minCustomer: 23,
//   maxCustomer: 65,
//   cookiesHrly: 6.3,
//   cookiesHrly: [],
//   hoursOfOperation: [
//     "6am",
//     "7am",
//     "8am",
//     "9am",
//     "10am",
//     "11am",
//     "12pm",
//     "1pm",
//     "2pm",
//     "3pm",
//     "4pm",
//     "5pm",
//     "6pm",
//     "7pm",
//     "8pm",
//   ],
//   avgOrder: function () {
//     for (let i = 0; i < this.hoursOfOperation.length; i += 1) {
//       let avgOrder = hourlyCust(this.minCustomer, this.maxCustomer);
//       this.cookieTotal[i] = avgOrder * Math.floor(this.cookiesHrly);
//     }
//   },
//   cookieTotal: [],
//   cookiesAmt: 0,
// };
// let tokyo = {
//   //tokyo
//   name: "Tokyo",
//   minCustomer: 3,
//   maxCustomer: 24,
//   cookiesHrly: 1.2,
//   hoursOfOperation: [
//     "6am",
//     "7am",
//     "8am",
//     "9am",
//     "10am",
//     "11am",
//     "12pm",
//     "1pm",
//     "2pm",
//     "3pm",
//     "4pm",
//     "5pm",
//     "6pm",
//     "7pm",
//     "8pm",
//   ],
//   avgOrder: function () {
//     for (let i = 0; i < this.hoursOfOperation.length; i += 1) {
//       let avgOrder = hourlyCust(this.minCustomer, this.maxCustomer);
//       this.cookieTotal[i] = avgOrder * Math.floor(this.cookiesHrly);
//     }
//   },
//   cookieTotal: [],
//   cookiesAmt: 0,
// };
// let dubai = {
//   //dubai
//   name: "dubai",
//   minCustomer: 11,
//   maxCustomer: 38,
//   cookiesHrly: 3.7,
//   hoursOfOperation: [
//     "6am",
//     "7am",
//     "8am",
//     "9am",
//     "10am",
//     "11am",
//     "12pm",
//     "1pm",
//     "2pm",
//     "3pm",
//     "4pm",
//     "5pm",
//     "6pm",
//     "7pm",
//     "8pm",
//   ],
//   avgOrder: function () {
//     for (let i = 0; i < this.hoursOfOperation.length; i += 1) {
//       let avgOrder = hourlyCust(this.minCustomer, this.maxCustomer);
//       this.cookieTotal[i] = avgOrder * Math.floor(this.cookiesHrly);
//     }
//   },
//   cookieTotal: [],
//   cookiesAmt: 0,
// };
// let paris = {
//   //paris
//   name: "paris",
//   minCustomer: 20,
//   maxCustomer: 38,
//   cookiesHrly: 2.3,
//   hoursOfOperation: [
//     "6am",
//     "7am",
//     "8am",
//     "9am",
//     "10am",
//     "11am",
//     "12pm",
//     "1pm",
//     "2pm",
//     "3pm",
//     "4pm",
//     "5pm",
//     "6pm",
//     "7pm",
//     "8pm",
//   ],
//   avgOrder: function () {
//     for (let i = 0; i < this.hoursOfOperation.length; i += 1) {
//       let avgOrder = hourlyCust(this.minCustomer, this.maxCustomer);
//       this.cookieTotal[i] = avgOrder * Math.floor(this.cookiesHrly);
//     }
//   },
//   cookieTotal: [],
//   cookiesAmt: 0,
// };
// let lima = {
//   //lima
//   name: "lima",
//   minCustomer: 2,
//   maxCustomer: 16,
//   cookiesHrly: 4.6,
//   hoursOfOperation: [
//     "6am",
//     "7am",
//     "8am",
//     "9am",
//     "10am",
//     "11am",
//     "12pm",
//     "1pm",
//     "2pm",
//     "3pm",
//     "4pm",
//     "5pm",
//     "6pm",
//     "7pm",
//     "8pm",
//   ],
//   avgOrder: function () {
//     for (let i = 0; i < this.hoursOfOperation.length; i += 1) {
//       let avgOrder = hourlyCust(this.minCustomer, this.maxCustomer);
//       this.cookieTotal[i] = avgOrder * Math.floor(this.cookiesHrly);
//     }
//   },
//   cookieTotal: [],
//   cookiesAmt: 0,
// };

function cookieCounter(store) {
  let total = store.cookieTotal[0];
  for (let i = 1; i < store.cookieTotal.length; i += 1) {
    total = total + store.cookieTotal[i];
  }
  store.cookiesAmt = total;
  return total;
}

// function Store(name, minCustomer, maxCustomer, cookiesHrly, hours) {
//   this.name = name;
//   this.minCustomer = minCustomer;
//   this.maxCustomer = maxCustomer;
//   this.cookiesHrly = cookiesHrly;
//   this.hoursOfOperation = hours;
// }

function showSeattle() {
  for (let i = 0; i < seattle.hoursOfOperation.length; i += 1) {
    const saleElem = document.getElementById("Seattle");
    const listElem = document.createElement("li");
    saleElem.appendChild(listElem);
    let salesEntry = `${hours[i]}: ${seattle.cookieTotal[i]} cookies`;

    listElem.textContent = salesEntry;
  }
  const saleElem = document.getElementById("Seattle");
  const totalElem = document.createElement("li");
  saleElem.appendChild(totalElem);

  totalElem.textContent = `Total:${cookieCounter(seattle)} cookies`;
}

function showTokyo() {
  for (let i = 0; i < tokyo.hoursOfOperation.length; i += 1) {
    const saleElem = document.getElementById("Tokyo");
    const listElem = document.createElement("li");
    saleElem.appendChild(listElem);
    let salesEntry = `${hours[i]}: ${tokyo.cookieTotal[i]} cookies`;

    listElem.textContent = salesEntry;
  }
  const saleElem = document.getElementById("Tokyo");
  const totalElem = document.createElement("li");
  saleElem.appendChild(totalElem);

  totalElem.textContent = `Total:${cookieCounter(tokyo)} cookies`;
}
function showDubai() {
  for (let i = 0; i < dubai.hoursOfOperation.length; i += 1) {
    const saleElem = document.getElementById("Dubai");
    const listElem = document.createElement("li");
    saleElem.appendChild(listElem);
    let salesEntry = `${hours[i]}: ${dubai.cookieTotal[i]} cookies`;

    listElem.textContent = salesEntry;
  }
  const saleElem = document.getElementById("Dubai");
  const totalElem = document.createElement("li");
  saleElem.appendChild(totalElem);

  totalElem.textContent = `Total:${cookieCounter(dubai)} cookies`;
}
function showParis() {
  for (let i = 0; i < paris.hoursOfOperation.length; i += 1) {
    const saleElem = document.getElementById("Paris");
    const listElem = document.createElement("li");
    saleElem.appendChild(listElem);
    let salesEntry = `${hours[i]}: ${paris.cookieTotal[i]} cookies`;

    listElem.textContent = salesEntry;
  }
  const saleElem = document.getElementById("Paris");
  const totalElem = document.createElement("li");
  saleElem.appendChild(totalElem);

  totalElem.textContent = `Total:${cookieCounter(paris)} cookies`;
}
function showLima() {
  for (let i = 0; i < lima.hoursOfOperation.length; i += 1) {
    const saleElem = document.getElementById("Lima");
    const listElem = document.createElement("li");
    saleElem.appendChild(listElem);
    let salesEntry = `${hours[i]}: ${lima.cookieTotal[i]} cookies`;

    listElem.textContent = salesEntry;
  }
  const saleElem = document.getElementById("Lima");
  const totalElem = document.createElement("li");
  saleElem.appendChild(totalElem);

  totalElem.textContent = `Total:${cookieCounter(lima)} cookies`;
}

let seattle = new creator("Seattle", 23, 65, 6.3, hours);
seattle.avgOrder();
cookieCounter(seattle);
saleHrs(seattle);
cookieTotal(seattle);
showSeattle();
let tokyo = new creator("Tokyo", 3, 24, 1.2, hours);
tokyo.avgOrder();
cookieCounter(tokyo);
saleHrs(tokyo);
cookieTotal(tokyo);
showTokyo();
let dubai = new creator("Dubai", 11, 38, 3.7, hours);
dubai.avgOrder();
cookieCounter(dubai);
saleHrs(dubai);
cookieTotal(dubai);
showDubai();
let paris = new creator("Paris", 20, 38, 2.3, hours);
paris.avgOrder();
saleHrs(paris);
cookieCounter(paris);
cookieTotal(paris);
showParis();
let lima = new creator("Lima", 2, 15, 4.6, hours);
lima.avgOrder();
cookieCounter(lima);
saleHrs(lima);
cookieTotal(lima);
showLima();

switchElement.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// solution found here https://medium.com/@mandeepkaur1/object-literal-vs-constructor-in-javascript-df143296b816 and here https://www.javascripttutorial.net/es6/object-literal-extensions/
