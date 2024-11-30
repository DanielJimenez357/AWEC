export class library {
    books = []

    madeBook = () => {
        let form = document.querySelectorAll("form > input")
        console.log(form)
        let title = form[0].value
        let author = form[1].value
        let genre = form[2].value
        
        let book = {
            title: title,
            author: author,
            genre: genre,
        }
        
        this.pushBook(book)
        
    }
    

    pushBook = (book) => {
        books.push(book)
    }

    call = () =>{
        console.log(library)
    }
}
