export class library {
	constructor() {
		this.books = [];
	}

	makeBook = () => {
		let form = document.querySelectorAll("form > input");
		let title = form[0].value;
		let author = form[1].value;
		let genre = form[2].value;

		let book = {
			title: title,
			author: author,
			genre: genre,
			read: false,
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
		this.books.forEach((book) => {
			const bookDiv = document.createElement("div");
			bookDiv.className = "book";
			bookDiv.innerHTML = `
                <p>${book.title}</p>
                <p>Autor: ${book.author}</p>
                <p>Genero: ${book.genre}</p>
                <p>Leido: ${book.read}</p>
            `;
			bookDiv.style.cssText= `
				border-radius: 20px;
				border: solid gray 2px;
				padding: 5px
			`

			bookDiv.addEventListener("click", ()=>{
				book.read = true
				this.updateLibrary()
			})
			container.appendChild(bookDiv);
		});
	};
}
