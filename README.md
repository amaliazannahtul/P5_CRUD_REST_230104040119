# P5_CRUD_REST_230104040119
Praktikum 3 Web Service Architecture

  
### Membangun RESTful CRUD API dengan Express

---

### Identitas Mahasiswa
- Nama: Amilia Zannahtul Putria  
- NIM: 230104040119  
- Mata Kuliah: Web Service Engineering  
- Praktikum: 5  

---

## A. Tujuan Praktikum
1. Memahami konsep RESTful API dan resource.
2. Mendesain endpoint CRUD untuk satu resource.
3. Mengimplementasikan operasi Create, Read, Update, dan Delete.
4. Memahami penggunaan HTTP Method dan Status Code.
5. Menyajikan response JSON yang konsisten.

---

## B. Tools yang Digunakan
- GitHub (repository dan dokumentasi)
- Express.js (perancangan REST API)
- Postman (pengujian API)

---

## C. Deskripsi Project
Pada praktikum ini dibuat sebuah RESTful API sederhana menggunakan Express.js
dengan resource products.
API ini menyediakan fitur CRUD (Create, Read, Update, Delete) yang diakses
menggunakan HTTP Method standar REST.

---

## D. Desain Endpoint API

Method | Endpoint | Deskripsi  
GET | /products | Mengambil semua data produk  
GET | /products/:id | Mengambil data produk berdasarkan ID  
POST | /products | Menambahkan produk baru  
PUT | /products/:id | Mengupdate data produk  
DELETE | /products/:id | Menghapus data produk  

---

## E. Format Response JSON

Response Berhasil  
{
  "status": "success",
  "data": {},
  "message": "Operasi berhasil"
}

Response Gagal  
{
  "status": "error",
  "message": "Data tidak ditemukan"
}

---

## F. Penjelasan Singkat Kode
File server.js berisi implementasi REST API menggunakan Express.js.
Data produk disimpan sementara dalam bentuk array objek, dan setiap endpoint
mengatur operasi CRUD sesuai dengan HTTP Method yang digunakan.

---

## G. Evidence Pengujian
Bukti pengujian endpoint CRUD (POST, GET, PUT, DELETE) disimpan dalam folder:

/evidence

---

## H. Kesimpulan
Melalui praktikum ini, mahasiswa dapat memahami konsep dasar RESTful API,
penggunaan HTTP Method, serta pentingnya konsistensi response dan status code
dalam pengembangan web service.

---
