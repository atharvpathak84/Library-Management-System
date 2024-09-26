import { Library } from '../library';

describe('Library Management System', () => {
    it('should allow adding a book to the library', () => {
        const library = new Library();
        library.addBook('123456', 'The Great Gatsby', 'F. Scott Fitzgerald', 1925);
        const book = library.getBook('123456');
        expect(book).toEqual({
            isbn: '123456',
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            year: 1925,
            status: 'available',
        });
    });
});


//for borrowing books writing test
it('should allow borrowing a book from the library', () => {
    const library = new Library();
    library.addBook('123456', 'The Great Gatsby', 'F. Scott Fitzgerald', 1925);
    library.borrowBook('123456');
    const book = library.getBook('123456');
    expect(book?.status).toBe('borrowed');
});

