const app = {
	numbersContainer: null,
	output: null,
	outputValue: '',

	init() {
		this.output = document.querySelector('#output');
		this.numbersContainer = document.querySelector('#numbers');

		this.handleEvents();
	},

	handleEvents() {
		this.numbersContainer.addEventListener('click', this.addNumber.bind(this));
	},

	addNumber(evt) {
		const { target: { dataset: { number } } } = evt;
		this.outputValue += number;
		this.output.value = this.outputValue;
	},
};

app.init();