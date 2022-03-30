while (this.play) {
	if (this.rounds) {
		//========================================================================================================================================================
		this.createRoundElem(this.rounds);
		let userVariant = document.querySelector('.round__try').value;


		// let userVariant = [...prompt('Enter...')]; //забор значений

		this.play = this.check(this.goal, userVariant);//проверка значений
		console.log(this.play ? `${--this.rounds} turns left` : `User wins! ${this.goal}`);//результат
		console.log(this.history);//история значений
	} else {
		console.log(`User lost! ${this.goal}`);//Проигрыш
		console.log(this.history);//история значений
		this.play = false;
	}
}