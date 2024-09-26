// src/__tests__/library.test.ts
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
