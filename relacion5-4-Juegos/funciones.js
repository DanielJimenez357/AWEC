//game 1
let interval;

const start = () => {
	interval = setInterval(() => {
		let seconds = document.getElementById("segundos");
		seconds.innerHTML = parseInt(seconds.innerHTML) + 1;
		if (seconds.innerHTML == 60) {
			seconds.innerHTML = 0;
			let minutes = document.getElementById("minutos");
			minutes.innerHTML = parseInt(minutes.innerHTML) + 1;
		}
	}, 1000);
};

const stop = () => {
	clearTimeout(interval);
};

const reset = () => {
	let seconds = document.getElementById("segundos");
	seconds.innerHTML = "00";
	let minutes = document.getElementById("minutos");
	minutes.innerHTML = "00";
	stop();
};

//game 2
let letters = "abcdefghijklmnopqrstuwyxz";
let arrLetters = [];

const randomWords = [
	"aurora",
	"relampago",
	"horizonte",
	"murmullo",
	"laberinto",
	"escarcha",
	"centella",
	"travesia",
	"alboroto",
	"penumbra",
];

//module to generate objects for each letter
(() => {
	for (let i = 0; i < letters.length; i++) {
		let letterModule = letters.at(i);
		letterModule = {
			letter: letters.at(i),
			inWord: false,
			discovered: false,
		};
		arrLetters.push(letterModule);
	}
})();

//display the letters with DOM as buttons
const showLetters = () => {
	let wordsButton = document.getElementById("words");
	arrLetters.forEach((element) => {
		let letter = document.createElement("span");
		letter.style.padding = "10px";
		letter.style.background = "rgb(156, 186, 170)";
		letter.style.margin = "5px";
		letter.innerHTML = element.letter;
		letter.onclick = () => guessLetter(element);
		wordsButton.appendChild(letter);
	});
};

//get a randomWord
const randomNum = randomWords[Math.floor(Math.random() * 10)];

//separate the letters of the word into an array
const parseArr = (word) => {
	let randomWord = [];
	for (let i = 0; i < word.length; i++) {
		let letterToFind = word.at(i);
		let found = arrLetters.find((element) => element.letter === letterToFind);
		randomWord.push(found);
	}
	randomWord.forEach((letter) => (letter.inWord = true));
	return randomWord;
};
const randomWord = parseArr(randomNum);

//display the letters you guess of the word
const guessWord = () => {
	let div = document.getElementById("wordToGuess");
	div.innerHTML = "";
	randomWord.forEach((letter) => {
		let empty = document.createElement("span");
		if (letter.discovered !== true) {
			empty.innerHTML = "-";
		} else {
			empty.innerHTML = letter.letter;
		}
		div.appendChild(empty);
	});
};

const guessLetter = (element) => {
	if (element.inWord) {
		element.discovered = true;
	} 
	guessWord();
};

showLetters();
guessWord();

