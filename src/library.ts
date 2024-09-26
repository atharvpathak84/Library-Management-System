type Book = {
    isbn: string;
    title: string;
    author: string;
    year: number;
    status: 'available' | 'borrowed';
};

export class Library {
    private books: { [isbn: string]: Book } = {};

    addBook(isbn: string, title: string, author: string, year: number): void {
        this.books[isbn] = {
            isbn,
            title,
            author,
            year,
            status: 'available',
        };
    }

    getBook(isbn: string): Book | undefined {
        return this.books[isbn];
    }

    //Borrowing books
    borrowBook(isbn: string): void {
    const book = this.books[isbn];
        if (book && book.status === 'available') {
            book.status = 'borrowed';
        } else {
            throw new Error('Book not available');
        }
    }

    //Returning books
    returnBook(isbn: string): void {
        const book = this.books[isbn];
        if (book && book.status === 'borrowed') {
          book.status = 'available';
        } else {
          throw new Error('Book was not borrowed');
        }
    }

    //get available books
    getAvailableBooks(): Book[] {
        return Object.values(this.books).filter((book) => book.status === 'available');
    }
    
}