Endpoints :

1. GET /api/books/:id_title
Request: 
params: 
{"id_title" : "integer"}

body:
{
  "books": [
    {
      "id_buku": 1,
      "judul": "string",
      "penulis": "string",
      "kategori": "string"
    },
    {
      "id_buku": 2,
      "judul": "Judul Buku 2",
      "penulis": "Penulis 2",
      "kategori": "Kategori 2"
    },
  ]
}

Response (404 - Bad Request)

{
  "code": "404",
  "message": "Buku tidak ditemukan"
}
Response (500 - Internal Server Error)

{
  "message": "Internal Server Error"
}

2. GET /api/authors/:id_author
Request: 
params:
{"id_author": "integer"} 

body:
{
  "authors": [
    {
      "id_penulis": 1,
      "nama_penulis": "string
    },
    {
      "id_penulis": 2,
      "nama_penulis": "string"
    },
  ]
}

Response (404 - Bad Request)

{
  "code": "404",
  "message": "author tidak ditemukan"
}
Response (500 - Internal Server Error)

{
  "message": "Internal Server Error"
}


2. GET /api/categories/:id_category
Request: 
params:
{"id_author": "integer"} 

body:
{
  "categories": [
    {
      "id_kategori": 1,
      "nama_kategori": "string
    },
    {
      "id_kategori": 2,
      "nama_kategori": "string"
    },
  ]
}

Response (404 - Bad Request)

{
  "code": "404",
  "message": "kategori tidak ditemukan"
}
Response (500 - Internal Server Error)

{
  "message": "Internal Server Error"
}

