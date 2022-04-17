# 17_Testing

## Resume

Pada materi ini pembahasan adalah mengenai :

1. Apa Itu Testing
2. Membuat Basic Testing
3. Testing Dengan Costum Hook

### 1. Apa Itu Tesing

- Apa itu Testing? Testing adalah proses memverifikasi bahwa test assertions kita benar dan bahwa mereka tetap benar sepanjang masa aplikasi. Test assertion ini adalah ekspresi boolean yang mengembalikan nilai true kecuali ada bug di kode Anda.Ada banyak strategi pengujian otomatis yang digunakan oleh pengembang front-end untuk menguji kode mereka. KIta akan membatasi diskusi kita hanya dengan tiga paradigma uji perangkat lunak yang populer dengan React: pengujian unit, pengujian fungsional, dan pengujian integrasi.

### 2. Membuat Basic Testing

1. Render Dan Debug
   Dalam React Testing ada sebuah fungsi bernama render RTL yang biasanya digunakan untuk merender sebuah file JSX yang digunakan. setelah fungsi render RTL tadi maka kita bisa mengakses komponen React yang akan kita test. untuk mengetahui file JSX kita sudah terender atau belum kita bisa menggunakan sebuah fungsi bernama debug RTL. Lalu ada juga React Testing Library yang biasanya digunakan untuk berinteraksi dengan komponen kita seperti manusia. itulah yang menyebab kan biasanya kita bisa melihat struktur HTML sebagai output dari fungsi render.
2. Memilih Sebuah Element
   Dalam React Testing kita harus mengetahui Element-Element yang bisa digunakan fungsi dari element sendiri adalah untuk assertions atau untuk interaksi pengguna. Untuk memilih sebuah element kita bisa menggunakan fungsi object screen RTL
3. Kategori Dari Testing

- LabelText = getByLabetText
- PlaceholderText = getByPlaceholderText
- AltText = getByAltText
- DisplayValue = getByDisplayValue

### 3. Testing Dengan Costum Hook

- Kita juga bisa membuat sebuah testing dengan costum hook. untuk libary yang digunakan dalam sebuah testing dengan costum hook adalah @testing-library/react-hooks. yang dimana nantinya fungsi nya untuk memberikan alat untuk mengetes sebuah hooks tanpa merender satu komponen.

### Berikut Adalah Hasil Pratikum Pada Materi Testing :

- Hasil Testing (1)

  > <img src=".\screenshots\Tgs-React_Testing(1).png">
  > <br></>

- Hasil Testing (2)
  > <img src=".\screenshots\Tgs-React_Testing(2).png">
  > <br></br>

### Untuk Link Code Program Bisa Di Akses Pada Link Ini :

>
