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
	}
	else {
		$(this).addClass('o');
		console.log($(this).html());
		var a = parseFloat($(this).attr('id'));
		arr[a] = 'o';
		moves++;
		console.log(moves);
		playerX = true;
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
	if (arr[0] === arr[1] && arr[0] === arr[2]) {
		checkWinner(arr[0]);
	}
}

function checkWinner(index) {
	if (index === 'x') {
		return 'X wins';
	} else {
		return 'O wins';
	}
}