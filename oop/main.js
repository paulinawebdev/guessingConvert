
$(document).ready(startApp);

var guess_start;

var random_num;

function startApp(){
	random_num = new RandomGenerator(1, 10);
	guess_start = new GuessingGame();
	guess_start.guess_start();
}