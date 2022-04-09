# 16_Global State Management and Data Fetching

## Resume

Pada materi ini pembahasan adalah mengenai :

1. Global State Management
2. Persited State
3. Data Fetching

### 1. Global State Management

- Apa Itu Redux? Redux adalah library yang membantu kita dalam menangani state global (State yang sama yang dipakai di beberapa halaman / komponen).

- Mengapa Harus Menggunakan Redux ? karena ketika kita menggunakan React dengan Redux kita tidak perlu lagi memindahkan state dari satu component ke component lain, karena Redux mengubah state menjadi global state dan menempatkannya pada suatu tempat bernama store.Setiap component dapat menggunakan state yang ada di store secara langsung.Semua modifikasi state juga dilakukan melalui Redux, store pada Redux menjadi satu-satunya tempat untuk mengelola state(single source of truth).Aplikasi menjadi lebih konsisten dan mudah untuk ditest.

- Kapan Kita Harus Menggunakan Sebuah Redux ?
  1. Ketika banyak state yang perlu di gunakan di banyak tempat.
  2. Ketika sebuah logic yang digunakan pada state sangat begitu kompleks
  3. Ketika State App sering berubah-ubah.
  4. Ketika nantinya ingin mengetahui bagaimana sebuah state di update.
  5. Ketika code base yang dikerjakanukurannya sedang hingga besar serta dikerjakan oleh banyak orang

### 2. Persited State

- Apa itu persited State? Persited state adalah bagian dari global state yang dimana persited state ini berfungsi untuk nantinya menyimpan state-state kedalam sebuah storage.

### 3. Data Fetching

- Apa itu data fetching ? data Fetching adalah sebuah hal yang hampir sering dilakukan dalam setiap aplikasi saat ini, data fetching ini memiliki sebuah fungsi yang memita data serta mengedit data lalu menyimpannya. Tujuan dari data fetching adalah untuk membuat UX menjadi sesederhana mungkin dan serapih mungkin bagi pengguna. Dengan adanya data fetching in data bisa kita lihat bagaimana, dimana dan kapan data tersebut didapat dalam sebuah aplikasi react.

### Berikut Adalah Hasil Pratikum Pada Materi Global State Management and Data Fetching :

- Hasil Tampilan (1)

  > <img src=".\screenshots\Tgs-React_Global-State&Data-Fenching(1).png">
  > <br></br>

- Hasil Tampilan (2)
  > <img src=".\screenshots\Tgs-React_Global-State&Data-Fenching(2).png">
  > <br></br>

### Untuk Link Code Program Bisa Di Akses Pada Link Ini :

>
