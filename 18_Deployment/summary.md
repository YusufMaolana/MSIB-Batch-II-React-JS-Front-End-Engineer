# 18_Deployment

## Resume

Pada materi ini pembahasan adalah mengenai :

1. Apa itu Deployment
2. Tujuan Dari Deployment
3. Penyedia Layanan Build Tools (Continous Deployment )

### 1. Apa itu Deployment

- Deployment adalah proses menyalin, mengkonfigurasi, dan mengaktifkan aplikasi tertentu ke URL dasar tertentu di sebuah server atau di cluster. Cara kerja deploy sendiri, adapun setelah proses penerapan selesai, aplikasi tersebut menjadi dapat diakses publik di URL (baca pengertian URL menurut para ahli disini) dasar. Alur proses penerapan atau deploy aplikasi ini terdiri dari beberapa langkah meliputi planning (perencanaan), development (pengembangan), testing (pengujian), deployment (penerapan) dan monitoring (pemantauan).

### 2. Tujuan Dari Deployment

- Deployment sendiri memiliki sebuah tujuan yang dimana bertujuan untuk mem-push, mendorong perubahan atau update (pembaruan) dari satu lingkungan penerapan ke lingkungan penerapan (application environment) lainnya. Saat menyiapkan sebuah situs web, kita akan memiliki situs web live dalam artian dapat diakses secara langsung, dimana itu disebut dengan live atau production environment. atau dengan bahasa yang dapat mudah dimengerti Deployment bertujuan untuk menyebarkan aplikasi yang telah dikerjakan oleh para pembuatnya. Yang dimana penyebarannya dapat melalui beragam cara tergantung dari jenis aplikasinya. Jika aplikasi Web, maka dihosting pada server.

### 3. Penyedia Layanan Build Tools (Continous Deployment )

1. Surge
   Surge atau surge.sh adalah sebuah build tools yang dimana berguna untuk layanan seperti hosting plus subdomain \*.surge.sh gratis, dan hanya saja extensi file yang bisa diupload dibatasi hanya bisa file html, css, dan javascript. Dengan surge.sh ini aplikasi react yang kita buat bisa di lihat secara online dimana pun kapanpun hanya dengan akses sebuah internet.<br> Untuk menginstal sebuah surge kita bisa menggunakan perintah `npm install --global surge`

2. Netlify
   Netlify adalah salah satu platform penyedia layanan build tools sekaligus Continous Deployment. Netlify memungkinkan kita untuk mempublish website statis secara gratis. Netlify juga sudah terintegrasi dengan Git Host popular seperti Github, Gitlab dan Bitbucket. Yang Dimana fungsi dan tujuan nya tidak berbeda jauh dengan surge.sh untuk membuat aplikasi react yang kita buat bisa di lihat secara online dimana pun kapanpun hanya dengan akses sebuah internet. <br> untuk menginstal sebuah Netlify kita bisa menggunakan perintah `npm install netlify-cli -g`

### Berikut Adalah Hasil Pratikum Pada Materi Deployment :

- Hasil Deployment Menggunakan Surge

  > <img src=".\screenshots\Tgs-React_Deployment(1).png">
  > <br></br>

### Untuk Link Code Program Bisa Di Akses Pada Link Ini :

>
