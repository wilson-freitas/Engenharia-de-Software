class Book {
    constructor(title,description,author){
        this.title = title
        this.description = description
        this.author = author
        this.id = title.slice(0,3) + author.slice(0,3)
    }
}

class Library {
    constructor(){
        this.Books = []
    }

    addBook(book_data){
        let newBook = new Book(book_data['title'],book_data['description'],book_data['author'])        
        this.Books.push(newBook)
        return newBook
    }

    getBooks(){
        if (this.Books.length === 0) {
            console.log("Não há nada aqui, adicione livros para poder consultá-los")
        } 
        
        for (let count = 0; count < this.Books.length; count++) {
            console.log(`Título: ${this.Books[count].title } `, `Descrição: ${this.Books[count].description}`, `Autor: ${this.Books[count].author}`,`ID: ${this.Books[count].id}` )
        }
        return this.Books
    }

    removeBookById(id){
        for (let i = 0; i < this.Books.length; i++) {
            if (this.Books[i].id === id){
                this.Books.splice(i,1)
                console.log(`Livro removido com sucesso`)
                return
            }
        }

        console.log(`ID inválido`)
    }

    getBookById(id){
        for (let i = 0; i < this.Books.length; i++) {
            if (this.Books[i].id === id) {
                console.log(`Livro referente a ID informada: ${this.Books[i].title}`)
                return this.Books[i]
            } 
        }
        console.log(`ID Inválido`)
    }

    updateBookById(ID,info){
        for (let i = 0; i < this.Books.length; i++) {
            if (this.Books[i].id === ID) {
                this.Books[i].title = info['title']
                this.Books[i].description = info['description']
                this.Books[i].author = info['author']
                return this.Books[i]
            } 
        }
        console.log(`ID Inválido`)
    }

}

// teste:
Estante1 = new Library()

Estante1.addBook({title: "Titulo Generico", description: "Descriçao generica" , author: "Autor generico"})

Estante1.addBook({title: "Testando", description: "descricao teste" , author: "autor teste"})

Estante1.getBooks()
Estante1.getBookById('Tesaut')
Estante1.getBooks()