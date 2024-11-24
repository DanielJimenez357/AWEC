//create the hand of cards. Return the hand
export let hand = []; //each hand has 5 pairs and each pair has the same two cards
export const makeCards = () => {
	let cardNumber = 0;
	for (let i = 0; i < 10; i++) {
		if (i % 2 == 0) cardNumber++;
		let card = {
			//card atributes
			number: cardNumber,
			display: false,
			found: false,
		};
		hand.push(card);
	}
	return hand;
};

//mix the cards. Return the mixed hand
export const mixCards = (hand) => {
	hand.sort(function () {
		return 0.5 - Math.random();
	});
	return hand;
};

//render the cards. return void
export const makeDOM = () => {
	
    let cardRepresentation = document.getElementById("cards");
    cardRepresentation.style.display = "grid";
    cardRepresentation.style.gridTemplateColumns = "repeat(5, 1fr)";
    cardRepresentation.style.gridTemplateRows = "repeat(2, 1fr)";
    
    let firstCard = null;
    let secondCard = null;
	let time = false 

    hand.forEach((element) => {
        let cardDOM = document.createElement("span");
        cardDOM.id = element.number;
        cardDOM.style.cssText = `
            padding: 80px;
            margin: 20px;
            background: steelBlue;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 24px;
            color: white;
            cursor: pointer;
        `;

        cardDOM.addEventListener("click", () => {
			if (!time) {
				start()
				time = true 
			}
            if (element.display || element.found) return;

            if (firstCard && secondCard) {
                if (firstCard.element.number !== secondCard.element.number) {
                    firstCard.element.display = false;
                    firstCard.cardDOM.innerHTML = " ";
                    firstCard.cardDOM.style.background = "steelBlue";

                    secondCard.element.display = false;
                    secondCard.cardDOM.innerHTML = " ";
                    secondCard.cardDOM.style.background = "steelBlue";
                }
                firstCard = null;
                secondCard = null;
            }

            element.display = true;
            cardDOM.innerHTML = element.number;
            cardDOM.style.background = "darkBlue";

            if (!firstCard) {
                firstCard = { element, cardDOM };
            } else if (!secondCard) {
                secondCard = { element, cardDOM };

                if (firstCard.element.number === secondCard.element.number) {
                    firstCard.element.found = true;
                    secondCard.element.found = true;
                }
            }
        });

        cardDOM.innerHTML = " ";
        cardRepresentation.appendChild(cardDOM);
    });
};

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

export const checkWin = () => {
	let interval2 = setInterval(() => {
		if (hand.every((element => element.found == true))) {
			alert("HAS GANADO")
			clearInterval(interval2)
			clearInterval(interval)
		}
	} , 1000)
}


