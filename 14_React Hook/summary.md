# 14_React Hook

## Resume
Pada materi ini pembahasan adalah mengenai :

1. Apa itu React Hook
2. UseState & UseEffect
3. Costum Hook

### 1. Apa itu React Hook
React Hooks merupakan fitur baru di React 16.8. Fitur ini memungkinkan kita menggunakan state dan fitur React lainnya tanpa menuliskan sebuah kelas.React Hooks diperkenalkan oleh React Team untuk melakukan state management dan side effects di dalam function component.

Hooks are the new feature introduced in the React 16.8 version. It allows you to use state and other React features without writing a class. Hooks are the functions which "hook into" React state and lifecycle features from function components. It does not work inside classes.Hooks are backward-compatible, which means it does not contain any breaking changes. Also, it does not replace your knowledge of React concepts. (https://www.javatpoint.com/react-hooks)


### 2. UseState & UseEffect
* UseState
<br>UseState adalah sebuah Hook, yang nantinya akan mengembalikan nilai dari state dan fungsi yang bisa kita gunakan untuk mengubah nilai tersebut sebagai contoh kita gunakan (setName). Fungsi setName disini mirip dengan cara kerja this.setState. seState memberikan dua hal: nilai state saat ini dan fungsi untuk memperbarui nilai tersebut.
<br>

* UseEffect
<br>seEffect adalah sebuah effect hook yang dapat melakukan side effect seperti pemanggilan data, setup subscription, mengganti dom secara manual dan lain-lain. jadi fungsi nya useEffect ini seperti componentDidMount dan componentDidUpdate sekaligus. jadi cukup dengan menggunakan useEffect kita dapat menggunakan fungsi dari componentDidMount dan componentDidUpdate. misalnya kalian ingin melakukan sebuah pemanggilan API ke server, kalian bisa melakukannya di dalam fungsi useEffect ini.


### 3. Costum Hook
Costum Hook atau dalam Bahasa indonesia Hook kustom adalah sebuah mekanisme untuk menggunakan kembali logika stateful (seperti mengatur subscription dan mengingat nilai saat ini), tetapi setiap waktu Anda menggunakan hook kustom, semua state dan efek itu sepenuhnya terisolasi. Fungsi dari Costum Hook sendiri adalah membuat code yang dibuat semakin rapih, namun juga membuat lebih mudah untuk melakukan maintenance code tersebut. Karena dengan dibuatnya file terpisah khusus untuk Custom Hook. Jika suatu saat kita ingin melakukan refactor, kita hanya tinggal merubahnya di file tersebut.

#### Berikut adalah hasil pratikum pada materi React Hook:

><img src=".\screenshots\Tgs-React_Hook(1).png">
<br></br>
><img src=".\screenshots\Tgs-React_Hook(2).png">

<br></br>
#### Untuk Link Code Program Bisa Di Akses Pada Link Ini :
>https://github.com/YusufMaolana/react_yusuf_maolana/tree/master/14_React%20Hook/pratikum/code_program