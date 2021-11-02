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
  cookiesHrly: 6.3,
  cookiesHrly: [],
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
  avgOrder: function () {
    for (let i = 0; i < this.hoursOfOperation.length; i += 1) {
      let avgOrder = hourlyCust(this.minCustomer, this.maxCustomer);
      this.cookieTotal[i] = avgOrder * Math.floor(this.cookiesHrly);
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
  cookiesHrly: 1.2,
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
  avgOrder: function () {
    for (let i = 0; i < this.hoursOfOperation.length; i += 1) {
      let avgOrder = hourlyCust(this.minCustomer, this.maxCustomer);
      this.cookieTotal[i] = avgOrder * Math.floor(this.cookiesHrly);
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
  cookiesHrly: 3.7,
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
  avgOrder: function () {
    for (let i = 0; i < this.hoursOfOperation.length; i += 1) {
      let avgOrder = hourlyCust(this.minCustomer, this.maxCustomer);
      this.cookieTotal[i] = avgOrder * Math.floor(this.cookiesHrly);
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
  cookiesHrly: 2.3,
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
  avgOrder: function () {
    for (let i = 0; i < this.hoursOfOperation.length; i += 1) {
      let avgOrder = hourlyCust(this.minCustomer, this.maxCustomer);
      this.cookieTotal[i] = avgOrder * Math.floor(this.cookiesHrly);
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
  cookiesHrly: 4.6,
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
  avgOrder: function () {
    for (let i = 0; i < this.hoursOfOperation.length; i += 1) {
      let avgOrder = hourlyCust(this.minCustomer, this.maxCustomer);
      this.cookieTotal[i] = avgOrder * Math.floor(this.cookiesHrly);
    }
  },
  cookieTotal: [],
  cookiesAmt: 0,
};

seattle.avgOrder();
tokyo.avgOrder();
dubai.avgOrder();
paris.avgOrder();
lima.avgOrder();

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

const storeContainerEl = document.getElementById("StoreData"); // find parent element

const articleElem = document.createElement("article"); // create child element

storeContainerEl.appendChild(articleElem); // add the child to parent

const h2Elem = document.createElement("h2"); // create child
articleElem.appendChild(h2Elem); // append child
h2Elem.textContent = seattle.name; // set/update child content as needed

const listElem = document.createElement("ul");
articleElem.appendChild(listElem);

for (let i = 0; i < seattle.cookieTotal.length; i += 1) {
  const hoursElem = document.createElement("ol");
  listElem.appendChild(hoursElem);
  const hourText = seattle.cookieTotal;
  hoursElem.textContent = hourText;
}

const articleElem1 = document.createElement("article");
storeContainerEl.appendChild(articleElem);
const h2Elem2 = document.createElement("h2"); // create child
articleElem1.appendChild(h2Elem2); // append child
h2Elem2.textContent = tokyo.name;

for (let i = 0; i < tokyo.cookieTotal.length; i += 1) {
  const hoursElem = document.createElement("ol");
  listElem.appendChild(hoursElem);
  const hourText = tokyo.cookieTotal;
  hoursElem.textContent = hourText;
}
// const imgElem = document.createElement("img");
// articleElem.appendChild(imgElem);
// imgElem.setAttribute("src", seattle.imgUrl);
// imgElem.setAttribute("alt", "cute picture of " + seattle.name);
switchElement.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
