"use strict";
const switchElement = document.querySelector(".switch");

switchElement.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

function hourlyCust(min, max) {
  let range = max - min + 1;
  return Math.floor(Math.random() * range) + min;
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
  //seattle
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
tokyo.avgCustomer();

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

const storeContainerEl = document.getElementById("StoreData"); // find parent element

const articleElem = document.createElement("article"); // create child element

storeContainerEl.appendChild(articleElem); // add the child to parent

const h2Elem = document.createElement("h2"); // create child
articleElem.appendChild(h2Elem); // append child
h2Elem.textContent = seattle.name; // set/update child content as needed

// need little description in p tag along with age

// move to use of const as you see fit for now, otherwise use let

// list of likes
const listElem = document.createElement("ul");
articleElem.appendChild(listElem);

for (let i = 0; i < seattle.hoursOfOperation.length; i += 1) {
  const hoursElem = document.createElement("li");
  listElem.appendChild(hoursElem);
  const hourText = seattle.hoursOfOperation;
  hoursElem.textContent = hourText;
}

// const imgElem = document.createElement("img");
// articleElem.appendChild(imgElem);
// imgElem.setAttribute("src", seattle.imgUrl);
// imgElem.setAttribute("alt", "cute picture of " + seattle.name);
