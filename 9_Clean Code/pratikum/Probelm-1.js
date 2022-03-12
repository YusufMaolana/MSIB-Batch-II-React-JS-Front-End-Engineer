// PROBLEM-1 (ANALYSIS)

//Ini adalah bentuk penulisan pemograman yang salah

// class user {
//     var id;
//     var user name;
//     var password;
// }

// class userservice {
//     user[] user = []

//     user[] getallusers() {
//         return users ;
//     }
//     user getuserbyid(userid){
//         return user.filter(userid);
//     }
// }

// Analisis yang bisa di ambil dari penulisan program diatas adalah sebagai berikut :
// 1. Pada program di atas, program tidak bisa di gunakan pada camel case.
// 2. Pada class name seharusnya menggunakan pascal case.
// 3. Tidak perlunya menambahkan user dalam variable.
// 4. Tidak adanya komentar untuk membuat code program diatas menjadi code bersih.

// Ini adalah bentuk penulisan program yang benar :

// class User {
//     constructor() {
//         this.id = [];
//         this.name = [];
//         this.password;
//     }
// }

// class UserService extends User{
//     constructor(id, name){
//         super(id, name)
//         this.user = [...this.name]
//     }

//     getAllUsers() {
//         return this.users;
//     }

//     getUserById(userId){
//         return this.users.filter((element)) => element == userId)
//     }
// }

// Ini adalah penulisan program yang benar dan bisa di jalankan :

class User {
    constructor() {
        this.id = [1,2];
        this.name = ["maulana", "randi"];
        this.password;
    }
}

class UserService extends User{
    constructor(id, name){
        super(id, name)
        this.users = [...this.name]
    }

    getAllUsers() {
        return this.users;
    }

    getUserById(userId){
        return this.users.filter((element) => element == userId)
    }
}