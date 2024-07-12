// point a Define the Book class
class Book {
    constructor(title, author, publisher, year, genre) {
      this.title = title;
      this.author = author;
      this.publisher = publisher;
      this.year = year;
      this.genre = genre;
    }


    // point b
    describe() {
      console.log(`${this.title} - ${this.author} (${this.year})`);
    }
  
    displayGenre() {
      console.log(`Genre: ${this.genre}`);
    }
};


// point c Create instances of Book
let classicBook = new Book("Pride and Prejudice", "Jane Austen", "T. Egerton", 1813, "Classic");
let sciFiBook = new Book("Dune", "Frank Herbert", "Chilton Books", 1965, "Science Fiction");
  
console.log(classicBook);
console.log(sciFiBook);


// point d
// Call methods on classicBook object
classicBook.describe();
classicBook.displayGenre();
  
// Call methods on sciFiBook object
sciFiBook.describe();
sciFiBook.displayGenre();
  