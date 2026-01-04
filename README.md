![1000281297](https://github.com/user-attachments/assets/ff9ee669-cd5a-4c06-88d8-41ecabce5ad7)# P5_CRUD_REST_230104040119
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
Pengujian endpoint dilakukan menggunakan HTTP Request Shortcuts dengan server dummy (httpbin.org) untuk mensimulasikan request dan response REST API. Hal ini dilakukan karena pengerjaan menggunakan perangkat mobile tanpa menjalankan server secara lokal. Struktur endpoint, method HTTP, header, dan payload telah disesuaikan dengan desain API pada modul praktikum.

![1000281293](https://github.com/user-attachments/assets/d605f9a5-70b3-4716-bf35-4488150d2d64)
![1000281292](https://github.com/user-attachments/assets/b4f4928e-fa58-4005-b63c-aa5ba381a240)
![1000281274](https://github.com/user-attachments/assets/fb411dea-7cb3-49ad-b603-c95e1e5260dd)
![1000281250](https://github.com/user-attachments/assets/7aaec372-b0fb-4051-bad6-4f2d27b7706c)
![1000281294](https://github.com/user-attachments/assets/4bc6b473-8f81-4811-9dfd-0e08b90274c6)


---

## H. Kesimpulan
Melalui praktikum ini, mahasiswa dapat memahami konsep dasar RESTful API,
penggunaan HTTP Method, serta pentingnya konsistensi response dan status code
dalam pengembangan web service.

---
