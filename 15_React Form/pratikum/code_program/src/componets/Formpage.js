import React, { useState, useRef} from 'react';
import "./Formpage.css";

function Frompage (){
    const dataAwal = {
        namaLengkap :"",
        email :"",
        noHandphone:"",
        pendidikan:"",
        kelasCoding:"",
        harapan:"",
    }
    const [data, setData] = useState(dataAwal)
    const namaLengkapRegex = /^[A-Za-z ]*$/
    const noHandphoneRegex = /^(?:\d{9}|\d{14})$/
    const emailRegex = /\S+@\S+\.\S+/;
    const [errMsg, SetErrMsg] = useState({
        namaLengkap : "",
        noHandphone :"",
        email :"",
    })
    const fotosuratkesungguhan = useRef(null)

    const handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        const err = {...errMsg};

        if (name === "namaLengkap") {
           if(namaLengkapRegex.test(value)) {
               SetErrMsg("")
           } else {
               SetErrMsg({...err,namaLengkap : "Nama Lengkap Yang Anda Masukan Harus Berupa Huruf"})
           }
        }
        else if (name == "noHandphone") {
                if(noHandphoneRegex.test(value)) {
                    SetErrMsg("")
                } else {
                    SetErrMsg({...err,noHandphone : "No telepon Yang Anda Masukan Harus Berupa 9-14 Karakter"})
                }
             }
        else if (name == "email") {
                if(emailRegex.test(value)) {
                    SetErrMsg("")
                } else {
                    SetErrMsg({...err, email : "Email Yang Anda Masukan Tidak Sesuai"})
                }
             }
       

        setData({
            ...data,
            [name] :value
        })
        console.log("data", data)
    }

    const handleSumbit = (event) => {
        event.preventDefault()
        if (errMsg !== ""){
            alert("Data Pendaftar Tidak Sesuai Silahkan Anda Cek Kembali Form Pengisian Anda")
        } else {
            alert(`Data Pendaftar"${data.namaLengkap}"Berhasil Diterima`)
        }
        
    }

    const resetData = () => {
        setData(dataAwal);
        alert("Apakah Anda Yakin Ingin Mereset")
    }
    return[
        <>
        <div className="Utama">
        <div className="Judul"><h1>Pendaftaran Peserta Coding Bootcamp</h1></div>
        <form onSubmit={handleSumbit}>
        <label>
          </label>
            <label>
                Nama Lengkap :
                <input
                type="text"
                onChange={handleInput}
                value={data.namaLengkap}
                name="namaLengkap"
                required
                />
            </label>
            <label>
                Email :
                <input
                type="email"
                required
                onChange={handleInput}
                name="email"
                value={data.email}
                />
            </label>
            <label>
                No Handphone :
                <input
                minLength="9"
                maxLength="14"                
                type="text"
                onChange={handleInput}
                name="noHandphone"
                value={data.noHandphone}
                />
            </label>
            <label>
                Latar Belakang Pendidikan :
                <input required type="radio" onChange={handleInput} name="pendidikan" value="IT" checked={data.pendidikan === "IT"}/>IT
                <input required type="radio" onChange={handleInput} name="pendidikan" value="Non IT" checked={data.pendidikan === "Non IT"}/>Non IT
            </label>
            <label>
                Kelas Coding yang Dipilih :
                <select name= "kelasCoding" value={data.kelasCoding} onChange={handleInput} >
                <option>--Pilih Salah Satu Program--</option>
                <option >Coding Backend with Golang</option>
                <option>Coding Frontend with React</option>
                <option>Fullstack Developer</option>
                     </select>
            </label>
            <label>
                Foto Surat Kesungguhan : <br/>
                <input
                type="file"
                refs={fotosuratkesungguhan}
                required />
            </label>
            <label>
                Harapan Untuk Bootcamp ini:
                <textarea name="harapan" value={data.harapan} onChange={handleInput} required/>
            </label>
            <span className="err-Msg">
                {errMsg.namaLengkap ??''}
               
            </span>
            <br/>
            <span className="err-Msg">
                {errMsg.noHandphone??''}
            </span>
            <br/>
            <span className="err-Msg">
               
                {errMsg.email??''}
            </span>
            <br/>
                <input className="btn-sumbit" type="submit" value="Sumbit"/>
                <button onClick={resetData} className="btn-reset"> Reset</button>
        </form>
        </div>
        
        </>
    ]
}

export default Frompage;