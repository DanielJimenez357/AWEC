export class library {
	constructor() {
		this.books = [];
	}

	makeBook = () => {
		let form = document.querySelectorAll("form > input");
		console.log(form);
		let title = form[0].value;
		let author = form[1].value;
		let genre = form[2].value;

		let book = {
			title: title,
			author: author,
			genre: genre,
		};

		this.pushBook(book);
		this.updateLibrary();
	};

	pushBook = (book) => {
		this.books.push(book);
	};

	updateLibrary = () => {
		const container = document.querySelector(".container");
		container.innerHTML = "";
		this.books.forEach((book, index) => {
			const bookDiv = document.createElement("div");
			bookDiv.className = "book";
			bookDiv.innerHTML = `
                <p>${book.title}</p>
                <p>Autor: ${book.author}</p>
                <p>Genero: ${book.genre}</p>
            `;
			container.appendChild(bookDiv);
		});
	};
}
