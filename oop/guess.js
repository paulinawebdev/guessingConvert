
class RandomGenerator{
	constructor(min, max){ 
		this.min = min;
		this.max = max;
		//takes in the minimum and maximum values
		//if they are not defined, it sets the minimum to 1, and the max to 10
		//makes storage for the random number

		if ( this.min === undefined  ) {
			this.min = 1;
		} 
		if( this.min === undefined) {
			this.max = 10;
		}

		this.randomNum;
	}


	generate(){
		//make a random value between the minimum and maximum values
		//and store the number into the storage from the constructor
		this.randomNum = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
	}
	getRange(){
		//return an object with min and max, min being the minimum value for the generator, max being the maximum value
		//returns a basic object literal
		var name = {
			min: this.min,
			max: this.max
		}

		return name;

	}
	getNum(){
		//return the random number that was generated by generate()
		return this.randomNum
    }
    
}


class GuessingGame {

    constructor() {
        this.secretNumber = null;
        this.button = $("#submitGuess");
        this.input = $("#userGuess");
        this.displayMsg = $("#display");
        this.clearGuess = this.clearGuess.bind(this);
        this.handleGuess = this.handleGuess.bind(this);
    }
    
    guess_start(){
        // this.secretNumber = this.pickRandomNumber(1,10);
        this.secretNumber = random_num.generate();
        this.secretNumber = random_num.getNum();
        this.attachHandlers();
    }

    // pickRandomNumber(min, max) {
    //     return Math.floor( Math.random() * (max-min)) + min;
    // }

    attachHandlers(){
        this.button.click( this.handleGuess );
        this.input.focus( this.clearGuess );
    }

    handleGuess(){
        var userGuess = parseInt(this.input.val());
        if(userGuess<1 || userGuess>10){
            this.displayResult('invalid range.  Must be between 1 and 10');
            return;
        }
        if(userGuess === this.secretNumber){
            this.displayResult('you got it!');
        } else if (userGuess < this.secretNumber){
            this.displayResult('too low!');
        } else if (userGuess > this.secretNumber){
            this.displayResult('too high!');
        }
    }

    clearGuess(){
        this.input.val('');
    }

    displayResult( message ){
        this.displayMsg.text( message );
    }
}