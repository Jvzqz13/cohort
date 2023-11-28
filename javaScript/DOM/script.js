// const appElement = document.getElementById('app')
// console.log(appElement);

// const appElemName = document.getElementsByName("appName")
// console.log(appElemName); //probably not gonna use it

// const querySelec = document.querySelector('#app')
// console.log(querySelec);

// const p1Element = document.querySelector('p')
// console.log(p1Element.textContent);

// const conactAnchor = document.querySelector('#contact')
// console.log(conactAnchor);


////////

const codeEl = document.querySelector("code");
console.log(codeEl);

const app = document.querySelector("#app");
console.log(app);
console.log(app.childNodes);

const firstSelect = document.querySelector("input[type=checkbox]");
console.log(firstSelect);

const div = document.querySelector("div:nth-child(2)")
console.log(div);


const ol = document.body
  .appendChild(document.createElement("div"))
  .appendChild(document.createElement("ol"));

  const ul = document.body
  .appendChild(document.createElement("div"))
  .appendChild(document.createElement("ul"));

for (let i = 0; i < 5; i++) {
  ol.appendChild(document.createElement("li"));
  ul.appendChild(document.createElement("li"));
}