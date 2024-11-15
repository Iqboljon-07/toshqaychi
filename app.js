let scissors = document.querySelector("#scissors");
let stone = document.querySelector("#stone");
let paper = document.querySelector("#paper");

let container = document.getElementsByClassName("container")[0];

scissors.style.backgroundColor = "red";
scissors.style.borderRadius = "100%";
scissors.style.cursor = "pointer";
scissors.style.display = "flex";
scissors.style.alignItems = "center";
scissors.style.justifyContent = "center";

scissors.style.border = "5px solid blue";
stone.style.backgroundColor = "blue";
stone.style.borderRadius = "100%";
stone.style.cursor = "pointer";
stone.style.display = "flex";
stone.style.alignItems = "center";
stone.style.justifyContent = "center";
stone.style.border = "5px solid grey";
paper.style.backgroundColor = "grey";
paper.style.borderRadius = "100%";
paper.style.cursor = "pointer";
paper.style.display = "flex";
paper.style.alignItems = "center";
paper.style.justifyContent = "center";
paper.style.border = "5px solid red";
//stone.classList.add("fas", "fa-trash-alt", "text-danger");
let game = document.querySelector("#game");
let youresult = document.querySelector("#youresult");
let finish = document.querySelector("#finish");
let icon1 = document.createElement("i");
let icon2 = document.createElement("i");
let icon3 = document.createElement("i");

icon1.style.fontSize = "100px";

icon2.style.fontSize = "100px";

icon3.style.fontSize = "100px";

icon1.classList.add("fas", "fa-scissors");

icon2.classList.add("fas", "fa-hand-rock");

icon3.classList.add("fas", "fa-hand-paper");
youresult.classList.add("textcolor");
game.classList.add("textcolor");
finish.classList.add("textcolor");
scissors.append(icon1);

stone.append(icon2);

paper.append(icon3);

let arr = ["scissors", "stone", "paper"];

scissors.onclick = function () {
  let random = Math.floor(Math.random() * arr.length);
  //arr[random].style.backgroundColor = "yellow";
  game.textContent = arr[random];
  game.style.fontSize = "25px";
  youresult.textContent = "scissors";
  youresult.style.fontSize = "25px";
  finish.style.fontSize = "25px";
  scissors.style.backgroundColor = "green";

  setInterval(() => {
    randomcolor = "#" + Math.random().toString(16).slice(2, 8);
    if (game.textContent == "scissors") {
      scissors.style.backgroundColor = randomcolor;
    }
    if (game.textContent == "stone") {
      stone.style.backgroundColor = randomcolor;
    }
    if (game.textContent == "paper") {
      paper.style.backgroundColor = randomcolor;
    }
  }, 100);
  //bu usulda ham ishlasa bo'ladi
  // if (arr[random] === "stone") {
  //   alert("siz yutqazdiz");
  //   finish.textContent = "Siz yutqazdingiz";
  //   finish.style.fontSize = "25px";
  // } else if (arr[random] === arr[0]) {
  //   alert(" Tenglik");
  //   finish.textContent = "Tenglik";
  //   finish.style.fontSize = "25px";
  // } else {
  //   alert(" Yutdingiz");
  //   finish.textContent = "Yutdingiz";
  //   finish.style.fontSize = "25px";
  // }

  let result;
  switch (random) {
    case 0:
      result = finish.textContent = "Tenglik";
      container.classList.add("gifequal");
      container.classList.remove("gifsad");
      container.classList.remove("gifhappy");

      break;

    case 1:
      result = finish.textContent = "Yutqazdingiz";
      container.classList.add("gifsad");
      container.classList.remove("gifequal");
      container.classList.remove("gifhappy");

      break;

    case 2:
      result = finish.textContent = "Yutdingiz";
      container.classList.add("gifhappy");
      container.classList.remove("gifsad");
      container.classList.remove("gifequal");

      break;
  }
  alert(result);
};

stone.onclick = function () {
  let random = Math.floor(Math.random() * arr.length);
  //arr[random].style.backgroundColor = "yellow";
  game.textContent = arr[random];
  game.style.fontSize = "25px";
  youresult.textContent = "stone";
  youresult.style.fontSize = "25px";
  finish.style.fontSize = "25px";
  stone.style.backgroundColor = "green";
  let randomcolor = "#" + Math.random().toString(16).slice(2, 8);
  let result;
  switch (random) {
    case 0:
      result = finish.textContent = "Yutdingiz";
      container.classList.add("gifhappy");
      container.classList.remove("gifsad");
      container.classList.remove("gifequal");

      break;

    case 1:
      result = finish.textContent = "Tenglik";
      container.classList.add("gifequal");
      container.classList.remove("gifsad");
      container.classList.remove("gifhappy");
      break;

    case 2:
      result = finish.textContent = "Yutqazdingiz";
      container.classList.add("gifsad");
      container.classList.remove("gifequal");
      container.classList.remove("gifhappy");
      break;
  }
  alert(result);

  setInterval(() => {
    randomcolor = "#" + Math.random().toString(16).slice(2, 8);
    if (game.textContent == "scissors") {
      scissors.style.backgroundColor = randomcolor;
    }
    if (game.textContent == "stone") {
      stone.style.backgroundColor = randomcolor;
    }
    if (game.textContent == "paper") {
      paper.style.backgroundColor = randomcolor;
    }
  }, 100);
};

paper.onclick = function () {
  let random = Math.floor(Math.random() * arr.length);
  //arr[random].style.backgroundColor = "yellow";
  game.textContent = arr[random];
  game.style.fontSize = "25px";
  youresult.textContent = "paper";
  youresult.style.fontSize = "25px";
  finish.style.fontSize = "25px";
  paper.style.backgroundColor = "green";

  let result;
  switch (random) {
    case 0:
      result = finish.textContent = "Yutqazdingiz";
      container.classList.add("gifsad");
      container.classList.remove("gifequal");
      container.classList.remove("gifhappy");
      break;

    case 1:
      result = finish.textContent = "Yutdingiz";
      container.classList.add("gifhappy");
      container.classList.remove("gifsad");
      container.classList.remove("gifequal");

      break;

    case 2:
      result = finish.textContent = "Tenglik";
      container.classList.add("gifequal");
      container.classList.remove("gifsad");
      container.classList.remove("gifhappy");
      break;
  }
  alert(result);

  setInterval(() => {
    randomcolor = "#" + Math.random().toString(16).slice(2, 8);
    if (game.textContent == "scissors") {
      scissors.style.backgroundColor = randomcolor;
    }
    if (game.textContent == "stone") {
      stone.style.backgroundColor = randomcolor;
    }
    if (game.textContent == "paper") {
      paper.style.backgroundColor = randomcolor;
    }
  }, 100);
};

// scissors.addEventListener("mouseenter", () => {
//   console.log("opigf");
// });

scissors.onmouseover = () => {
  icon1.style.fontSize = "130px";
  console.log("keldi");
};
scissors.onmouseleave = () => {
  icon1.style.fontSize = "100px";
  console.log("qochdi");
};

stone.onmouseover = () => {
  icon2.style.fontSize = "130px";
  console.log("keldi");
};
stone.onmouseleave = () => {
  icon2.style.fontSize = "100px";
  console.log("qochdi");
};

paper.onmouseover = () => {
  icon3.style.fontSize = "130px";
  console.log("keldi");
};

paper.onmouseleave = () => {
  icon3.style.fontSize = "100px";
  console.log("qochdi");
};
