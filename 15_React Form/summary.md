# 15_React Form

## Resume
Pada materi ini pembahasan adalah mengenai :

1. React Form
2. Controlled Component
3. Uncontrolled Componet

### 1. React Form
1. Pengertian React Form
React Form adalah sebuah from yang dimana from tersebut dibuat menggunakan libary java script yaitu react, yang dimana nantinya dalam pembuatan sebuah from dengan react bisa menggunkan Controlled Compent dan Uncontrolled Compent.
2. Fungsi Dari React Form
React Form sendiri memiliki sebuah fungsi seperti hal nya form itu sendiri from memiliki sebuah fungsi yang krusial dalam sebuah website yang dimana bisanya digunakan untuk login, mendaftarkan sesuatu, memberikan feedback, dan mengisi data. From juga digunakan untuk menghandle inputan dari user. from sangat begitu berarti jika sebuah wesbite tanpa ada nya form maka akan sulit untuk melalukan inputan dan masukan kedalam sebuah website.

### 2. Controlled Component
Dalam sebuah pembuatan form mengunakan library react ada sebuah nama yang disebut Controlled Componet. Controlled Compenet adalah sebuah state pada react yang nantinya komponen react yang akan merender dari form yang dibuat serta juga dapat mengontrol apa yang terjadi dalam from tersebut seperti masukan yang pengguna inputkan. atau secara garis bersar nya setiap inputan yang masuk dalam sebuah from dalam react disebut sebagai "controlled component"
<br> Inputan yang bisa digunakan dalam sebuah form :
1. Textarea
textarea dalam sebuah react ditulis sebgai `<textarea>`
2. Tag Select
Pada React Tag Select dilutils `<select></select>`
3. Handle Banyak Inputan
dalam controlled componet ketika kita membutuhkan penanganan pada banyak elemen maka bisa menambahan atribut name pada setiap element dan membiatkan fungsi handler memilih apa yang harus dilakukan berdasarkan  nilai dari event.target.name

### 3. Uncontrolled Component
Uncontrolled Commpent adalah sebuah alternatif componet. yang dimana nantinya sebuah data from akan ditangani oleh DOM-nya sendiri. Dalam penulisan sebuah Uncontrolled Componet alih-alih kitameulis sebuah event handler untuk setiap pembaruan state, kita bisa menggunakan ref untuk mendapatkn nilai form dari DOM.
<br> Karena hali ini terkadang membuat lebih mudah untuk mengintregasikan kode react dan no-react jika kita menggunakan uncontrolled componet ini menjadi kode lebih cepat walaupun nantinya membuat tidak rapi.

### Berikut Adalah Hasil Pratikum Pada Materi React Form :
* Data Di Input Dan Tampil Di Console Log
><img src=".\screenshots\Tgs-React_From(1).png">
<br></br>

* Data Benar Dan Berhasil Di Submit
><img src=".\screenshots\Tgs-React_From(2).png">
<br></br>

* Data Yang Dimasukan Salah
><img src=".\screenshots\Tgs-React_From(3).png">
<br></br>

* Data Yang Dimasukan Salah dan Submit
><img src=".\screenshots\Tgs-React_From(4).png">
<br></br>

* Data Ketika Akan Di Reset
><img src=".\screenshots\Tgs-React_From(5).png">
<br></br>

* Data Ketika Di Reset dan Klik Ok
><img src=".\screenshots\Tgs-React_From(6).png">
<br></br>

### Untuk Link Code Program Bisa Di Akses Pada Link Ini :
>https://github.com/YusufMaolana/react_yusuf_maolana/tree/master/15_React%20From/pratikum/code_program