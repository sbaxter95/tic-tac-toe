var playerX = true;
var moves = 0;
var arr = [];

//Alternate between X and O 
var $grid = $('.grid');
$grid.one('click', function (event){
	if (playerX === true) {
		$(this).addClass('x');
		moves++;
		console.log(moves);
		playerX = false;
	}
	else {
		$(this).addClass('o');
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