// "use strict";

const switchElement = document.querySelector(".switch");
let hoursOfOperation = [
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

function Store(name, minCustomer, maxCustomer, avgCookies, hours) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookies = avgCookies;
  this.hoursOfOperation = hours;
}
function hourlyCust(min, max) {
  let range = max - min + 1;
  return Math.floor(Math.random() * range) + min;
}

function Store(name, minCustomer, maxCustomer, avgCookies, hours) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookies = avgCookies;
  this.hoursOfOperation = hours;
  this.cookieTotal = [];
  this.cookiesAmt = 0;
}

let seattle = {
  //seattle
  name: "Seattle",
  minCustomer: 23,
  maxCustomer: 65,
  avgCookies: 6.3,
  hoursOfOperation: [
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
  ],
  avgCustomer: function () {
    for (let i = 0; i < this.hoursOfOperation.length; i += 1) {
      let avgCustomer = hourlyCust(this.minCustomer, this.maxCustomer);
      this.cookieTotal[i] = avgCustomer * Math.floor(this.avgCookies);
    }
  },
  cookieTotal: [],
  cookiesAmt: 0,
};
let tokyo = {
  //tokyo
  name: "Tokyo",
  minCustomer: 3,
  maxCustomer: 24,
  avgCookies: 1.2,
  hoursOfOperation: [
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
  ],
  avgCustomer: function () {
    for (let i = 0; i < this.hoursOfOperation.length; i += 1) {
      let avgCustomer = hourlyCust(this.minCustomer, this.maxCustomer);
      this.cookieTotal[i] = avgCustomer * Math.floor(this.avgCookies);
    }
  },
  cookieTotal: [],
  cookiesAmt: 0,
};
let dubai = {
  //dubai
  name: "dubai",
  minCustomer: 11,
  maxCustomer: 38,
  avgCookies: 3.7,
  hoursOfOperation: [
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
  ],
  avgCustomer: function () {
    for (let i = 0; i < this.hoursOfOperation.length; i += 1) {
      let avgCustomer = hourlyCust(this.minCustomer, this.maxCustomer);
      this.cookieTotal[i] = avgCustomer * Math.floor(this.avgCookies);
    }
  },
  cookieTotal: [],
  cookiesAmt: 0,
};
let paris = {
  //paris
  name: "paris",
  minCustomer: 20,
  maxCustomer: 38,
  avgCookies: 2.3,
  hoursOfOperation: [
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
  ],
  avgCustomer: function () {
    for (let i = 0; i < this.hoursOfOperation.length; i += 1) {
      let avgCustomer = hourlyCust(this.minCustomer, this.maxCustomer);
      this.cookieTotal[i] = avgCustomer * Math.floor(this.avgCookies);
    }
  },
  cookieTotal: [],
  cookiesAmt: 0,
};
let lima = {
  //lima
  name: "lima",
  minCustomer: 2,
  maxCustomer: 16,
  avgCookies: 4.6,
  hoursOfOperation: [
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
  ],
  avgCustomer: function () {
    for (let i = 0; i < this.hoursOfOperation.length; i += 1) {
      let avgCustomer = hourlyCust(this.minCustomer, this.maxCustomer);
      this.cookieTotal[i] = avgCustomer * Math.floor(this.avgCookies);
    }
  },
  cookieTotal: [],
  cookiesAmt: 0,
};

seattle.avgCustomer();
tokyo.avgCustomer();
dubai.avgCustomer();
paris.avgCustomer();
lima.avgCustomer();
function cookieCounter(store) {
  let total = store.cookieTotal[0];
  for (let i = 1; i < store.cookieTotal.length; i += 1) {
    total = total + store.cookieTotal[i];
  }
  store.cookiesAmt = total;
  return total;
}

cookieCounter(seattle);
cookieCounter(tokyo);
cookieCounter(dubai);
cookieCounter(paris);
cookieCounter(lima);

// function avgCustomer(store) {
//   for (let i = 0; i < store.hoursOfOperation.length; i += 1) {
//     let avgCustomer = hourlyCust(store.minCustomer, store.maxCustomer);
//     this.cookieTotal[i] = avgCustomer * Math.floor(store.avgCookies);
//   }
//   cookieTotal = [];
//   cookiesAmt = 0;
// }

// function Store(name, minCustomer, maxCustomer, avgCookies, hours) {
//   this.name = name;
//   this.minCustomer = minCustomer;
//   this.maxCustomer = maxCustomer;
//   this.avgCookies = avgCookies;
//   this.hoursOfOperation = hours;
// }

// cookieTotal = [];
// cookiesAmt = 0;

// var paris = new Store("Paris", 20, 38, 2.3, hoursOfOperation);
// var lima = new Store("Lima", 2, 16, 4.6, hoursOfOperation);

const storeContainerEl = document.getElementById("StoreData"); // find parent element

const articleElem = document.createElement("article"); // create child element

storeContainerEl.appendChild(articleElem); // add the child to parent

const h2Elem = document.createElement("h2"); // create child
articleElem.appendChild(h2Elem); // append child
h2Elem.textContent = seattle.name; // set/update child content as needed

const listElem = document.createElement("ul");
articleElem.appendChild(listElem);

for (let i = 0; i < seattle.cookieTotal.length; i += 1) {
  const hoursElem = document.createElement("li");
  listElem.appendChild(hoursElem);
  const hourText = seattle.cookieTotal;
  hoursElem.textContent = hourText;
}

// const imgElem = document.createElement("img");
// articleElem.appendChild(imgElem);
// imgElem.setAttribute("src", seattle.imgUrl);
// imgElem.setAttribute("alt", "cute picture of " + seattle.name);
switchElement.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
