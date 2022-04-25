# 20_GraphQL Basic

## Resume

Pada materi ini pembahasan adalah mengenai :

1. Apa Itu GraphQL
2. Kelebihan & Karakteristik Dari GraphQL
3. Cara Kerja GraphQL

### 1. Apa Itu GraphQL

- GraphQL merupakan bahasa query untuk sebuah API (Application Program Interface) yang bisa juga dinobatkan sebagai konsep baru API. Oleh karena itu, GraphQL ini tidak bisa ditandingkan dengan SQL atau pun NoSQL. GraphQL diciptakan oleh tim internal Facebook yang juga digunakan untuk keperluan internal pada tahun 2012. Karena dianggap terlalu sakti untuk digunakan Facebook sendiri, akhirnya pada tahun 2015 Facebook merilis GraphQL untuk publik. Project GraphQL kemudian berpindah tangan dari Facebook ke organisasi baru yaitu GraphQL Foundation yang berada di bawah naungan Linux Foundation pada tahun 2018.Ide diciptakannya GraphQL sendiri adalah untuk memecahkan masalah keterbatasan yang dimiliki oleh REST API.

### 2. Kelebihan & Karakteristik Dari GraphQL

- Kelebihan GraphQL

1. Tipe data akan terdefinisi dengan baik sehingga dapat mengurangi miskomunikasi antara klien dan server.
2. Memungkinkan API aplikasi untuk berkembang tanpa memecah kueri yang ada.
   Memiliki banyak ekstensi yang bersifat open source sehingga beberapa fitur yang tidak tersedia dapat ditambahkan.
3. Bersifat introspective. Klien dapat melakukan permintaan list tipe data yang tersedia sehingga sangat ideal untuk auto-generating documentation.
   Klien mendapat apa yang mereka minta tanpa over fetching atau menerima lebih banyak data dari yang dibutuhkan.

- Karakteristik Dari GraphQL

1. Memungkinkan klien untuk menentukan data yang dibutuhkan secara spesifik.
2. Mudah untuk mengumpulkan data dari berbagai sumber.
3. Menggunakan GraphQL type system untuk menggambarkan data.

### 3. Cara Kerja GraphQL

- Cara kerja sebuah GraphQL sebagai sebuah perantara. perantara yang dimaksudkan disini adalah antara Pengguna - API - Server Web GrapHQL bertindak sebagai perantara antara pengguna dan server web. GraphQL juga merupakan abstraksi atau konsep dasar dalam rekayasa perangkat lunak yang bertujuan untuk menyederhanakan mekanisme kompleks dengan hanya berfokus pada detail penting. Dengan adanya GraphQL, pelanggan atau pengguna tidak perlu tahu bagaimana server web beroperasi untuk mendapatkan apa yang dia inginkan. Secara umum, GraphQL bekerja sebagai pembuka pintu ke perangkat lunak atau data berbasis web. GraphQL membuka semua hal itu dengan cara terkontrol dan aman untuk program tersebut. Pengodean yang dimasukkan akan mengirimkan permintaan ke perangkat lunak penerima, dan kemudian data dapat dikembalikan. Panggilan yang dilakukan GraphQL untuk sekumpulan data akan ditampilkan untuk dikonsumsi pengguna akhir.

### Berikut Adalah Hasil Pratikum Pada Materi GraphQL :

- Create Table Anggota

  > <img src=".\screenshots\Tgs-React_GraphQL-Basic(No.2).png">
  > <br></>

- Create Table Keterangan

  > <img src=".\screenshots\Tgs-React_GraphQL-Basic(No.3).png">
  > <br></br>

- Calling Students True

  > <img src=".\screenshots\Tgs-React_GraphQL-Basic(No.6).png">
  > <br></br>

- Insert New Data In Table Anggota

  > <img src=".\screenshots\Tgs-React_GraphQL-Basic(No.7).png">
  > <br></br>
  > <img src=".\screenshots\Tgs-React_GraphQL-Basic(No.7.1).png">
  > <br></br>
  > <img src=".\screenshots\Tgs-React_GraphQL-Basic(No.7.2).png">
  > <br></br>

- Update All False Data To True In Table Keterangan

  > <img src=".\screenshots\Tgs-React_GraphQL-Basic(No.8).png">
  > <br></br>
  > <img src=".\screenshots\Tgs-React_GraphQL-Basic(No.8.1).png">
