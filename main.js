var playerX = true;
var moves = 0;
var arr = [];

//Alternate between X and O and create a virtual representation in an array
var $grid = $('.grid');
$grid.one('click', function (event){
	if (playerX === true) {
		$(this).addClass('x');
		var a = parseFloat($(this).attr('id'));
		arr[a] = 'x';
		moves++;
		console.log(moves);
		playerX = false;
		logic(arr);
	}
	else {
		$(this).addClass('o');
		console.log($(this).html());
		var a = parseFloat($(this).attr('id'));
		arr[a] = 'o';
		moves++;
		console.log(moves);
		playerX = true;
		logic(arr);
	}
});

//After each player has made a move, check to see if someone has won
//Array

//If winner, display winner's message

//Maximum of 9 moves - variable - gets to 9 - tie?
if (moves === 9) {
	//Tie
}

function logic(arr) {
	if (arr[0] !== undefined && arr[0] === arr[1] && arr[0] === arr[2]) {
		checkWinner(arr[0]);
	} else if (arr[3] !== undefined && arr[3] === arr[4] && arr[3] === arr[5]) {
		checkWinner(arr[3]);
	} else if (arr[6] !== undefined && arr[6] === arr[7] && arr[6] === arr[8]) {
		checkWinner(arr[6]);
	} else if (arr[0] !== undefined && arr[0] === arr[3] && arr[0] === arr[6]) {
		checkWinner(arr[0]);
	} else if (arr[1] !== undefined && arr[1] === arr[4] && arr[1] === arr[7]) {
		checkWinner(arr[1]);
	} else if (arr[2] !== undefined && arr[2] === arr[5] && arr[2] === arr[8]) {
		checkWinner(arr[2]);
	} else if (arr[0] !== undefined && arr[0] === arr[4] && arr[0] === arr[8]) {
		checkWinner(arr[0]);
	} else if (arr[2] !== undefined && arr[2] === arr[4] && arr[2] === arr[6]) {
		checkWinner(arr[2]);
	} else if (moves === 9) {
		alert('Tie');
	}
}

function checkWinner(index) {
	if (index === 'x') {
		alert('X wins');
	} else {
		alert('O wins');
	}
}