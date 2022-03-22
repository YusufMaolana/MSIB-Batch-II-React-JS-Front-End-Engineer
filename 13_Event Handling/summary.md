#13_Event Handling 

## Resume
Pada materi ini pembahasan adalah mengenai :

1. Apa itu State 
2. Perbedaan Statefull Dan Stateless 
3. Event Handling

### 1. Apa Itu State
State adalah sebuah object untuk menyimpan data pada React dan akan di render atau muat ulang ketika data mengalami perubahan.
The state is an instance of React Component Class can be defined as an object of a set of observable properties that control the behavior of the component. In other words, the State of a component is an object that holds some information that may change over the lifetime of the component. For example, let us think of the clock that we created in this article, we were calling the render() method every second explicitly, but React provides a better way to achieve the same result and that is by using State, storing the value of time as a member of the component’s state. We will look into this more elaborately later in the article.(https://www.geeksforgeeks.org/reactjs-state-react/)


### 2. Perbedaan Statefull Dan Stateless

Secara praktis, stateful component harus menggunakan fungsi setState/useState di dalam tubuh fungsi. Sedangkan stateless component tidak boleh ada fungsi tersebut dikarenakan oleh sifatnya yang tidak memiliki state sendiri.

Penjelasan lebih dalam:

Dalam ReactJS, Komponen UI (Disebut "Component") bisa dibagi menjadi dua tipe, Stateless dan Stateful. Stateless Component adalah component yang tidak memiliki state internal sendiri, melainkan data yang didapatkan oleh komponen tersebut harus datang dari "luar".


Sedangkan Stateful Component adalah component yang memiliki state internal sendiri. Contohnya, sebuah component seperti dialog misalkan, bisa menyimpan state sendiri (seperti apakah dialog sedang terbuka atau tertutup).

### 3.Event Handling
* Pengertian Event Handling
<br> Event Handling adalah sebuah metode yang dimana metode tersebut digunakan untuk menangani sebuah event/aksi yang nantinya diberikan pada suatu komponen 

* Contoh List Event 
1. Clipboard Events (Promise terpenuhi)
2. Form Events (onChange, OnSumbit)
3. Mouse Events (Onclik,OnDoubleClick,OnMouseOver
)
4. Generic Events (OnError,OnLoad)



## Essay.

#
#### Berikut contoh Project Tugas React Yang Menggunakan Event Handling: