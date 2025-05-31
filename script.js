
// Home
const op1 = document.querySelector("#op1");
const main = document.querySelector(".main");
op1.addEventListener("click", () => {
  console.log("Scroll to Home (Sidebar)");
  main.scrollIntoView({ behavior: "smooth" });
});

// About
const abtbtn = document.querySelector("#abtbtn");
const op2 = document.querySelector("#op2");
const box = document.querySelector(".box");
abtbtn.addEventListener("click", () => {
  box.scrollIntoView({ behavior: "smooth" });
});
op2.addEventListener("click", () => {
  box.scrollIntoView({ behavior: "smooth" });
});

// Projects
const projbtn = document.querySelector("#projbtn");
const op3 = document.querySelector("#op3");
const proj = document.querySelector(".proj");

projbtn.addEventListener("click", () => {
  proj.scrollIntoView({ behavior: "smooth" });
});
op3.addEventListener("click", () => {
  
  proj.scrollIntoView({ behavior: "smooth" });
});

// Resume
const resbtn = document.querySelector("#resbtn");
const op4 = document.querySelector("#op4");
const resume = document.querySelector(".resume");
resbtn?.addEventListener("click", () => {
  resume.scrollIntoView({ behavior: "smooth" });
});
op4.addEventListener("click", () => {
  resume.scrollIntoView({ behavior: "smooth" });
});

// Contact Me
const op5 = document.querySelector("#op5");
const contact = document.querySelector(".cme");
const cmeb = document.querySelector(".cmeb");
op5.addEventListener("click", () => {
  contact.scrollIntoView({ behavior: "smooth" });
});
cmeb.addEventListener("click", () => {
  contact.scrollIntoView({ behavior: "smooth" });
});

// Dropdown toggle (sidebar menu)
const list = document.querySelector(".list");
const sidebox = document.querySelector(".sidebox");
let visible = false;
list?.addEventListener("click", () => {
  visible = !visible;
  sidebox.style.display = visible ? "block" : "none";
});
if(window.innerWidth>768){
  sidebox.style.display="none";
  visible=false;
}


// Email Function
function sendEmail() {
  const email = "kushalphadnis2006@gmail.com";
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
