const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let books = [
  { id: 1, title: 'Judul Buku 1', author: 'Penulis 1', category: 'Kategori 1' },
  { id: 2, title: 'Judul Buku 2', author: 'Penulis 2', category: 'Kategori 2' },
  { id: 3, title: 'Judul Buku 3', author: 'Penulis 1', category: 'Kategori 2' },
  { id: 4, title: 'Judul Buku 4', author: 'Penulis 3', category: 'Kategori 1' },

];

// Endpoint: Read All Books with Search and Pagination
app.get('/api/books', (req, res) => {
  const { page = 1, limit = 5, search } = req.query;

  let filteredBooks = books;
  if (search) {
    const searchKeyword = search.toLowerCase();
    filteredBooks = books.filter(book =>
      book.title.toLowerCase().includes(searchKeyword) ||
      book.author.toLowerCase().includes(searchKeyword) ||
      book.category.toLowerCase().includes(searchKeyword)
    );
  }

  const totalPages = Math.ceil(filteredBooks.length / limit);

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedBooks = filteredBooks.slice(startIndex, endIndex);

  res.status(200).json({
    total_pages: totalPages,
    current_page: page,
    books: paginatedBooks
  });
});

// Endpoint: Read Book by ID
app.get('/api/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find(book => book.id === bookId);

  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }

  res.status(200).json({ book });
});

// Endpoint: Create Book
app.post('/api/books', (req, res) => {
  const { title, author, category } = req.body;
  const newBook = { id: books.length + 1, title, author, category };
  books.push(newBook);

  res.status(201).json({ message: 'Book created successfully', book: newBook });
});

// Endpoint: Update Book
app.put('/api/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title, author, category } = req.body;
  const index = books.findIndex(book => book.id === bookId);

  if (index === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }

  books[index] = { ...books[index], title, author, category };
  res.status(200).json({ message: 'Book updated successfully', book: books[index] });
});

// Endpoint: Delete Book
app.delete('/api/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const index = books.findIndex(book => book.id === bookId);

  if (index === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }

  const deletedBook = books.splice(index, 1);
  res.status(200).json({ message: 'Book deleted successfully', deleted_book: deletedBook[0] });
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
