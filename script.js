var nav = document.body.querySelector(".nav");
var display = document.body.querySelector(".display");
var txt = document.body.querySelector(".text");
var num = document.body.querySelector(".number");
var list = [];
var pages = [
  {
    title: "Grade View",
    content: "Grades"
  },
  {
    title: "Add Grade",
    content: "Submit Grade"
  }
];

function login() {
  var messEle = document.body.querySelector(".valMess");
  var username = document.body.querySelector(".username").value;
  var password = document.body.querySelector(".password").value;
  if (username === "cool" && password === "password") {
    for (var i = 0; i < pages.length; i++) {
      createPage(pages[i]);
    }
    contentWrite(pages[0].content, "Grades");
  } else if (username !== "cool" && password !== "password") {
    messEle.innerHTML = "You didn't type anything vaild!";
  } else if (username !== "cool" && password === "password") {
    messEle.innerHTML = "You didn't type in vaild username!";
  } else if (username === "cool" && password !== "password") {
    messEle.innerHTML = "You didn't type in valid password!";
  }
}
document.body.querySelector(".login").addEventListener("click", function () {
  login();
});
function createPage(pg) {
  var button = document.createElement("button");
  button.addEventListener("click", function () {
    contentWrite(pg.content, pg.title);
  });
  button.innerHTML = pg.title;
  nav.appendChild(button);
}

function GradeViewPage() {
  display.innerHTML = "Grades";
  txt.style.display = "none";
  num.style.display = "none";
  document.body.querySelector(".Submit").style.display = "none";
}

function AddGradePage() {
  display.innerHTML = "";
  txt.style.display = "";
  num.style.display = "";
  document.body.querySelector(".Submit").style.display = "";
}

function contentWrite(wd, pg) {
  if (wd === "Grades") {
    GradeViewPage();
  } else {
    AddGradePage();
  }
}

function renderItem() {
  txt.style.display = "none";
  num.style.display = "none";
  document.body.querySelector(".Submit").style.display = "none";
  document.body.querySelector(".display").innerHTML = "";
  for (var i = 0; i < list.length; i++) {
    var ele = document.createElement("div");
    ele.innerHTML = list[i];
    document.body.querySelector(".display").appendChild(ele);
  }
}

function submit() {
  var txt = document.body.querySelector(".text").value;
  var num = document.body.querySelector(".number").value;
  if (txt.length !== 0) {
    list.push(txt);
  }
  if (num.length !== 0) {
    list.push(num);
  }
  renderItem();
}

renderItem();