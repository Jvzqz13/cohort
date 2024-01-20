
// Menu data structure
const menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

const mainEl = document.querySelector("main");
mainEl.style.marginTop = "-50%";
mainEl.style.backgroundColor = "#4a4e4d";
mainEl.classList.add("flex-ctr");
// mainEl.innerHTML = `<h1> SBA 316 The DOM </h1>`;


const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "black";
topMenuEl.classList.add("flex-around");

menuLinks.forEach((link) => {
  const anchorEl = document.createElement("a");

  anchorEl.href = link.href;
  anchorEl.textContent = link.text;

  topMenuEl.appendChild(anchorEl);
});


const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "10%";
subMenuEl.style.backgroundColor = "grey";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

const form = document.getElementById("inputForm");
form.style.display = 'none'

const button = document.getElementById("clickMe");

button.addEventListener("click", (e) => {
  e.preventDefault();
  form.style.display = (form.style.display === 'none') ? 'block' : 'none';
});

function buildSubmenu(subLinks) {
  // Clear current contents of subMenuEl
  subMenuEl.innerHTML = "";
  //creating sublink element
  subLinks.forEach((link) => {
    const subLinkElement = document.createElement("a");
    subLinkElement.href = link.href;
    subLinkElement.textContent = link.text;

    // Append the new element to subMenuEl
    subMenuEl.appendChild(subLinkElement);
  });
}



//selects all <a>
const topMenuLinks = document.querySelectorAll("a");
console.log(topMenuLinks);

//starts the event listener
topMenuEl.addEventListener("click", (e) => {
  e.preventDefault();

  //verifies which <a> is clicking/active
  if (e.target.matches("a")) {
    console.log(e.target.textContent);
  }

  //toggle active class list
  e.target.classList.toggle("active");

  topMenuLinks.forEach((activeLink) => {
    if (activeLink === e.target) {
      console.log("active");
    }
  });

  //finds what each click link has
  const clickedLink = menuLinks.find(
    (link) => link.text === e.target.textContent,
  );
  console.log(clickedLink);

  //unhides submenu links
  if (clickedLink && clickedLink.subLinks) {
    subMenuEl.style.top = "5%";
    subMenuEl.style.width = "100%";
    buildSubmenu(clickedLink.subLinks);
  } else {
    subMenuEl.style.top = "0";
  }

  if (clickedLink.text === "about") {
    mainEl.innerHTML = "<h1> ABOUT US </h1>";
  }

  //turns off active when another is clicked
  topMenuLinks.forEach((link) => {
    if (link !== e.target) {
      link.classList.remove("active");
    }
  });
});



subMenuEl.addEventListener("click", (e) => {
  e.preventDefault();

  subMenuEl.style.top = "0";
  console.log("Submenu item clicked:", e.target.textContent);
  mainEl.innerHTML = `<h1> ${e.target.textContent} </h1>`;
});
