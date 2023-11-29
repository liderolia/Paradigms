let i = 0;
const sqEl = document.querySelectorAll(".square");
const contEl = document.querySelector(".tic_tac_toe");
const mesEl = document.querySelector(".message");

sqEl.forEach((el, index) => {
  el.textContent = index;
  el.style.color = "white";
});

function paste(e) {
  const square = e.target;
  if (i % 2 == 0) {
    square.style.color = "black";
    square.textContent = "X";
    i++;
    isVin();
  } else {
    square.style.color = "black";
    square.textContent = "0";
    i++;
    isVin();
  }
}

sqEl.forEach((element) => {
  element.addEventListener("click", paste, { once: true });
});

function isVin() {
  let block = document.querySelectorAll(".square");
  let items = [];
  for (let i = 0; i < block.length; i++) {
    items.push(block[i].textContent);
  }

  if (
    (items[0] == "X" && items[1] == "X" && items[2] == "X") ||
    (items[3] == "X" && items[4] == "X" && items[5] == "X") ||
    (items[6] == "X" && items[7] == "X" && items[8] == "X") ||
    (items[0] == "X" && items[3] == "X" && items[6] == "X") ||
    (items[1] == "X" && items[4] == "X" && items[7] == "X") ||
    (items[2] == "X" && items[5] == "X" && items[8] == "X") ||
    (items[0] == "X" && items[4] == "X" && items[8] == "X") ||
    (items[6] == "X" && items[4] == "X" && items[2] == "X")
  ) {
    mesEl.textContent = "Победили X";
    sqEl.forEach((element) => {
      element.removeEventListener("click", paste);
    });
  } else if (
    (items[0] == "0" && items[1] == "0" && items[2] == "0") ||
    (items[3] == "0" && items[4] == "0" && items[5] == "0") ||
    (items[6] == "0" && items[7] == "0" && items[8] == "0") ||
    (items[0] == "0" && items[3] == "0" && items[6] == "0") ||
    (items[1] == "0" && items[4] == "0" && items[7] == "0") ||
    (items[2] == "0" && items[5] == "0" && items[8] == "0") ||
    (items[0] == "0" && items[4] == "0" && items[8] == "0") ||
    (items[6] == "0" && items[4] == "0" && items[2] == "0")
  ) {
    mesEl.textContent = "Победили 0";
    sqEl.forEach((element) => {
      element.removeEventListener("click", paste);
    });
  } else if (i === 9) {
    mesEl.textContent = "Game over!";
  }
}
