# 11_React Fundamental

## Resume
Pada materi ini pembahasan adalah mengenai :

1. JSX (Pengertian & Kegunaan)
2. React Component
3. React Lifecycle

#
### 1. JSX (Pengertian & Kegunaan)
* Pengertian JSX
<br>JSX adalah sebuah sintaks extension untuk di gunakan pada react. JSX bukan sintaks javascript sehingga browser tidak bisa membaca sintaks ini. Di butuhkan JSX compiler yang di gunakan untuk menerjemahkan JSX kedalam bahasa reguler javascript supaya bisa dengan mudah di baca oleh browser.
* Kegunaan JSX
<br> Kegunaan dari JSX JSX sebagai bantuan visual saat mengerjakan antarmuka pengguna di dalam kode JavaScript. Menggunakan JSX juga memungkinkan React untuk menampilkan pesan kesalahan (error) dan peringatan (warning) yang lebih bermanfaat.

### 2. React Component
* Component Class
Setiap component selalu di awali dengan component class, yang merupakan sebuah method yang dapat membuat component pada react. Untuk membuat component react kita menggunakan React.createClass. Perhatikan kode berikut.
 > `var React = require('react'); 
var ReactDOM = require('react-dom'); 
var MyComponentClass = React.createClass({ 
  render: function () { 
    return <h1>Hello world</h1>;  
  } 
});
ReactDOM.render( 
  <MyComponentClass />, 
  document.getElementById('app') 
);`

Kode diatas adalah contoh sederhana dalam membuat component pada react dengan method React.createClass yang di simpan dalam sebuah variabel MyComponentClass. Tetapi sebelum kita membahas lebih jauh mengenai component class ini, untuk mereview tulisan sebelumnya saya juga akan menjelaskan struktur dan sintaks lain pada kode diatas.

* Import React
<br>Pada baris kode pertama var React = require('react'); akan mengembalikan sebuah object javascript yang di simpan dalam sebuah variabel yang dinamakan React, object ini berisi beberapa method yang dapat di gunakan pada project react kita.
> var React = require('react');

Pengembalian object ini disebut dengan React library. Pada tulisan saya sebelumnya, kita sudah belajar bagaimana menggunakan React library seperti React.createElement. Yang memanggil elemen JSX untuk di compile. Untuk alasan ini kita harus me-require React library dan menyimpannya dalam sebuah variabel yang dinamakan React.

* Import ReactDOM
> var ReactDOM = require('react-dom');

Sama seperti require('react'), require('react-dom') juga mengembalikan sebuah object javascript. Namun keduanya berisi react method yang berbeda, require('react-dom') di khsuskan untuk berinteraksi dengan DOM, pada kode di atas kita menggunakan method ReactDOM.render.

* Render Component
> `ReactDOM.render( 
  <MyComponentClass />, 
  document.getElementById('app') 
);`

Pada kode diatas kita merender component react yang sudah kita buat. Untuk membuat memanggil render function pada sebuah component, passing component tersebut kepada method ReactDOM.render. ReactDOM.render akan menampilkan `<h1>Hello world</h1>` yang di return pada component class ke sebuah virtual DOM, dan akan terlihat pada browser Hello world.

* Membuat Component Class
<br>Untuk membuat component class, kita gunakan salah satu methods dalam library React, React.createClass. Method React.createClass adalah merupakan salah satu method dari object yang di definisikan dari require(‘react’) pada baris pertama.

>`var MyComponentClass = React.createClass({ 
  render: function () { 
    return <h1>Hello world</h1>;  
  } 
});`

### 3. React Lifecycle
Component — component di react js akan melewati tiga fase hidup, yaitu :
1. Mounting
2. Updating
3. Unmounting

Pada setiap fase, components akan mengeksekusi fungsi atau method yang berbeda-beda.
Fungsi — fungsi ini yang kemudian di sebut sebagai lifecycle methods.

1. Fase Mounting
<br> Fase Mounting adalah fase ketika components di buat atau pertama kali di render ke DOM
Coba perhatikan pada fase Mounting di atas !
Pada fase ini ada tiga methods yang akan di eksekusi yaitu componentWillMount, render, dan componentDidMount.
Urutannya eksekusi setiap methodsnya di mulai dari atas ke bawah seperti pada gambar di atas.
Dalam hal ini componentWillMount adalah method yang akan di eksekusi pertama kali, kemudian akan mengeksekusi method render.
Di dalam method render inilah kita menyimpan file jsx yang nantinya akan di render ke DOM.

2. Fase Updating
<br>Fase updating adalah fase ketika sebuah component akan di render ulang, biasanya ini terjadi ketika ada perubahan pada state atau props yang mengakibatkan perubahan DOM.
* `componentWillReceiveProps` : fungsi ini akan di eksekusi bila state yang ada di component akan di update atau di ubah dengan nilai props yang baru.
* `shouldComponentUpdate` : tugasnya adalah untuk menentukan apakah sebuah component akan di render ulang atau tidak.Method ini akan mengembalikan nilai boolean true & false, jika true maka component akan di render ulang atau sebaliknya.
* `componentWillUpdate` : fungsi ini akan di eksekusi jika fungsi shouldComponentUpdate mengembalikan nilai true.
Kemudian kembali method render akan di jalankan
* `componentDidUpdate` : fungsinya sama dengan componentDidMount yaitu untuk manipulasi DOM dan request data.
3. Fase Unmounting
<br>Fase unmounting adalah fase ketika component di hapus dari DOM.
Pada fase ini hanya ada satu method yang akan di eksekusi yaitu `componentWillUnmount`, yang di jalankan sebelum sebuah component di hapus dari DOM

#
#### Berikut adalah hasil pratikum pada materi React Fundamental:
><img src=".\screenshots\Tgs-React_Fundamental.png">