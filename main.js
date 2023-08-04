// function SwitchTheme() {
//   var bodySwitch = document.getElementsByTagName("body")[0];
//   var dark = "#2d2d2d";
//   var textColordr = "#ffffff";
//   bodySwitch.style.backgroundColor = dark;
//   bodySwitch.style.color = textColordr;
// }

// var light = '#fff';

// document.getElementById('body-change').addEventListener('click', () => {
// 	SwitchTheme();
// });
// document.getElementById('body-change').addEventListener('click', () => {
// 	if (bodySwitch.style.backgroundColor === dark &&
// 		bodySwitch.style.color === textColordr) {
// 			document.getElementById('body-change').addEventListener('click', () => {
// 				bodySwitch.style.color = '#fff';
// 				bodySwitch.style.backgroundColor === light;
// 			})
// 		}
// });

var currentPlayer = "X";

function CellClick(event) {
  var cell = event.target;
  if (cell.innerHTML !== "") {
    return;
  }
  cell.innerHTML = currentPlayer;
  if (checkWin()) {
    alert(currentPlayer + "wins");
    resetGame();
    return;
  }

  if (checkTie()) {
    alert("Tie!");
    resetGame();
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

var cells = document.getElementsByClassName("cell");
for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", CellClick);
}

function checkWin() {
  var rows = document.getElementsByClassName("row");
  for (var i = 0; i < rows.length; i++) {
    var cells = rows[i].getElementsByClassName("cell");
    if (
      cells[0].innerHTML !== "" &&
      cells[0].innerHTML === cells[1].innerHTML &&
      cells[1].innerHTML === cells[2].innerHTML
    ) {
      return true;
    }
  }
  for (var x = 0; x < 3; x++) {
    if (
      cells[x].innerHTML !== "" &&
      cells[x].innerHTML === cells[x + 3].innerHTML &&
      cells[x + 3].innerHTML === cells[x + 6].innerHTML
    ) {
      return true;
    }
  }
  if (
    cells[2].innerHTML !== "" &&
    cells[2].innerHTML === cells[4].innerHTML &&
    cells[4].innerHTML === cells[6].innerHTML
  ) {
    return true;
  }
  return false;
}

function checkTie() {
  var cells = document.getElementsByClassName("cell");
  for (var i = 0; i < cells.length; i++) {
    if (cells[i].innerHTML === "") {
      return false;
    }
  }
  return true;
}

function resetGame () {
	var cells = document.getElementsByClassName('cell');
	for (var i = 0; i < cells.length; i++) {
		cells[i].innerHTML = '';
	}
	currentPlayer = 'X';
}
