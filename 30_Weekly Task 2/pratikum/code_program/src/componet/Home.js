// React
import React from 'react';

// Bootrap Componet
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';

// Content Materi Component
import gitlogo from './assest/Logo-Git.png';
import gitpr from './assest/Git-Pr.png';
import UiUxlogo from './assest/Logo-UiUx.png';
import figmalogo from './assest/Logo-Figma.png';
import figmapr from './assest/Figma-pr.png';
import htmllogo from './assest/HTML5Logo.png';
import htmlpr1 from './assest/Html-pr1.png';
import htmlpr2 from './assest/Html-pr2.png';
import htmlpr3 from './assest/Html-pr3.png';
import csslogo from './assest/Logo-css.png';
import csspr1 from './assest/css1-pr.png';
import csspr2 from './assest/css2-pr.png';
import btplogo from './assest/logo-Btp.png';
import btppr1 from './assest/Btp-1-pr.png';
import btppr2 from './assest/Btp-2-pr.png';
import btppr3 from './assest/Btp-3-pr.png';
import './assest/style.css';

function Home() {
  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row>
        <Col sm={4}>
          {/* DAFTAR MATERI */}
          <ListGroup>
            <ListGroup.Item action href="#GIT">
              #GIT
            </ListGroup.Item>
            <ListGroup.Item action href="#UI-UX">
              #UI-UX
            </ListGroup.Item>
            <ListGroup.Item action href="#FIGMA">
              #FIGMA
            </ListGroup.Item>
            <ListGroup.Item action href="#HTML">
              #HTML
            </ListGroup.Item>
            <ListGroup.Item action href="#CSS">
              #CSS
            </ListGroup.Item>
            <ListGroup.Item action href="#BOOTSTRAP">
              #BOOTSTRAP
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={8}>
          {/* ISI DARI MATERI */}
          <Tab.Content>
            {/* MATERI GIT */}
            <Tab.Pane eventKey="#GIT">
              {/* <!-- Jumbotron --> */}
              <section class="jumbotron text-center">
                <img
                  src={gitlogo}
                  alt="Git"
                  width="200"
                  class="rounded-circle img-thumbnail m-lg-6"
                />
                <h1 class="display-4 text-white">
                  Version Control and Branch Managemet ( GIT )
                </h1>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#ffffff"
                    fill-opacity="1"
                    d="M0,96L48,96C96,96,192,96,288,117.3C384,139,480,181,576,202.7C672,224,768,224,864,197.3C960,171,1056,117,1152,101.3C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </section>
              {/* <!-- Akhir Jumbotron --> */}

              {/* <!-- Summary --> */}
              <section id="summary">
                <div class="container">
                  <div class="row text-center mb-3">
                    <div class="col">
                      <h2>Version Control and Branch Managemet ( GIT )</h2>
                    </div>
                  </div>
                  <div class="row justify-content-right fs-5 text-right">
                    <p class="text">
                      Versioninng atau yang disebut version control yang dimana
                      adalah sebuah sistem yang melakukan source code management
                      (SCM) untuk mengelola perubahan di setiap dokumen, program
                      komputer, website, dan kumpulan pemrograman lainnya.lalu
                      pada materi kali ini juga mempelajari mengenai apa itu git
                      dan github yang dimana git dan github itu saling terhubung
                      satu sama lain, lalu tatacara menggunakan sebuah git yang
                      baik dan benar dan sesuai dengan panduan tatacara
                      penggunaan. Git adalah sebuah software berbasis Version
                      Control System (VCS) yang bertugas untuk mencatat
                      perubahan seluruh file atau repository suatu project.
                      Biasanya Developer software menggunakan Git untuk
                      distributed revision (VCS terdistribusi), hal ini nantinya
                      guna untuk menyimpan database tidak hanya ke satu tempat.
                      Git Hub adalah sebuah layanan cloud yang mempunyai fungsi
                      untuk menyimpan dan mengelola sebuah project yang
                      dinamakan repository (repo git). Cara kerja sebuah GitHub
                      harus terkoneksi pada internet sehingga nantinyua user
                      tidak perlu meng-install sebuah software ke dalam
                      perangkat keras. Hal ini tentunya memberikan keringanan
                      penyimpanan komputer yang kita gunakan karena file project
                      tersimpan oleh cloud GitHub.
                    </p>
                  </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#e2edff"
                    fill-opacity="1"
                    d="M0,160L48,133.3C96,107,192,53,288,64C384,75,480,149,576,154.7C672,160,768,96,864,106.7C960,117,1056,203,1152,229.3C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </section>
              {/* <!-- Akhir Summary  --> */}

              <section id="projects">
                <div class="container">
                  <div class="row text-center mb-3">
                    <div class="col">
                      <h2>My Project</h2>
                    </div>
                  </div>
                  <div class="row text-center mb-3">
                    <div class="col-md-12 mb-3">
                      <div class="card">
                        <img src={gitpr} class="card-img-top" alt="Project1" />
                        <div class="card-body"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#0d6efd"
                    fill-opacity="1"
                    d="M0,224L48,218.7C96,213,192,203,288,202.7C384,203,480,213,576,229.3C672,245,768,267,864,256C960,245,1056,203,1152,192C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </section>
              {/* <!-- Akhir Screnshoots --> */}

              {/* <!-- Footer --> */}
              <footer class="bg-primary text-white text-center pb-5">
                <p>
                  {' '}
                  Created with <i class="bi bi-heart-fill text-danger"></i> by{' '}
                  <a
                    href="https://github.com/YusufMaolana"
                    class="text-white fw-bold"
                  >
                    Yusuf Maolana
                  </a>
                  ©2022
                </p>
              </footer>
              {/* <!-- Akhir Footer --> */}
              {/* <!-- AKHIR ISI DARI MATERI GIT --> */}
            </Tab.Pane>

            {/* MATERI UI-UX */}
            <Tab.Pane eventKey="#UI-UX">
              {/* <!-- Jumbotron --> */}
              <section class="jumbotron text-center">
                <img
                  src={UiUxlogo}
                  alt="Git"
                  width="200"
                  class="rounded-circle img-thumbnail m-lg-6"
                />
                <h1 class="display-4 text-white">Introduction UI and UX</h1>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#ffffff"
                    fill-opacity="1"
                    d="M0,96L48,96C96,96,192,96,288,117.3C384,139,480,181,576,202.7C672,224,768,224,864,197.3C960,171,1056,117,1152,101.3C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </section>
              {/* <!-- Akhir Jumbotron --> */}

              {/* <!-- Summary --> */}
              <section id="summary">
                <div class="container">
                  <div class="row text-center mb-3">
                    <div class="col">
                      <h2>Introduction UI and UX</h2>
                    </div>
                  </div>
                  <div class="row justify-content-right fs-5 text-right">
                    <p class="text">
                      User Interface (UI) atau disebut juga UI Design adalah
                      bagaimana tampilan visual suatu produk disajikan dengan
                      desain yang menarik dan bisa membuat pengguna betah
                      menggunakan produk. UI Design berfokus pada keindahan atau
                      estetika tampilan yang eye-catching dan dapat menarik
                      pengguna secara emosional. UX atau User Experience adalah
                      bagaimana produk yang dibuat dapat dengan mudah digunakan
                      atau diakses. sedangkan UX Design berfokus untuk
                      memberikan pengalaman yang nyaman dan dapat memenuhi
                      ekspektasi pengguna.UI Design bertujuan untuk mempercantik
                      tampilan produk untuk memberikan kesan pertama yang
                      menarik bagi pengguna. Beberapa komponen yang termasuk
                      dalam UI Design antara lain pemilihan warna, penggunaan
                      font, gambar atau animasi, typography, buttons (tombol),
                      dsb. Sedangakan UX Design bertujuan untuk meningkatkan
                      kepuasan pengguna terhadap produk yang digunakan dengan
                      menyediakan pengalaman akses produk yang mudah digunakan.
                      Komponen dalam UX Design antara lain fitur-fitur yang
                      disediakan, struktur (tata letak) desain, navigasi, dsb.
                    </p>
                  </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#e2edff"
                    fill-opacity="1"
                    d="M0,160L48,133.3C96,107,192,53,288,64C384,75,480,149,576,154.7C672,160,768,96,864,106.7C960,117,1056,203,1152,229.3C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </section>
              {/* <!-- Akhir Summary  --> */}

              <section id="projects">
                <div class="container" />
                <div class="row text-center mb-3">
                  <div class="col">
                    <h2>My Project</h2>
                    <h3>
                      <a
                        href="https://docs.google.com/document/d/1YTt4HR_gJa71NgNXloWJyKaZJkbDe50NplvIhtmy2MA/edit"
                        class="text-black fw-bold"
                      >
                        Document Project In Google Document
                      </a>
                    </h3>
                  </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#0d6efd"
                    fill-opacity="1"
                    d="M0,224L48,218.7C96,213,192,203,288,202.7C384,203,480,213,576,229.3C672,245,768,267,864,256C960,245,1056,203,1152,192C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </section>
              {/* <!-- Akhir Screnshoots --> */}

              {/* <!-- Footer --> */}
              <footer class="bg-primary text-white text-center pb-5">
                <p>
                  {' '}
                  Created with <i class="bi bi-heart-fill text-danger"></i> by{' '}
                  <a
                    href="https://github.com/YusufMaolana"
                    class="text-white fw-bold"
                  >
                    Yusuf Maolana
                  </a>
                  ©2022
                </p>
              </footer>
              {/* <!-- Akhir Footer --> */}
            </Tab.Pane>

            {/* MATERI FIGMA */}
            <Tab.Pane eventKey="#FIGMA">
              {/* <!-- Jumbotron --> */}
              <section class="jumbotron text-center">
                <img
                  src={figmalogo}
                  alt="Figma"
                  width="200"
                  class="rounded-circle img-thumbnail m-lg-5"
                />
                <h1 class="display-4 text-white">Figma</h1>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#ffffff"
                    fill-opacity="1"
                    d="M0,96L48,96C96,96,192,96,288,117.3C384,139,480,181,576,202.7C672,224,768,224,864,197.3C960,171,1056,117,1152,101.3C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </section>
              {/* <!-- Akhir Jumbotron --> */}

              {/* <!-- Summary --> */}
              <section id="summary">
                <div class="container">
                  <div class="row text-center mb-3">
                    <div class="col">
                      <h2>Figma</h2>
                    </div>
                  </div>
                  <div class="row justify-content-right fs-5 text-right">
                    <p class="text">
                      Figma adalah editor grafis vektor dan alat prototyping
                      dengan berbasis web serta fitur offline tambahan yang
                      diaktifkan oleh aplikasi desktop untuk Mac OS dan Windows.
                      Aplikasi pendamping Figma Mirror untuk Android dan iOS
                      memungkinkan untuk melihat prototype Figma pada perangkat
                      seluler. Rangkaian fitur Figma berfokus pada penggunaan
                      dalam antarmuka pengguna dan desain pengalaman pengguna
                      dengan penekanan pada kolaborasi waktu nyata (real-
                      time).Sederhananya, Figma adalah desain digital dan alat
                      prototyping. Ini adalah aplikasi desain UI dan UX yang
                      dapat Anda gunakan untuk membuat situs web, aplikasi, atau
                      komponen antarmuka pengguna yang lebih kecil yang dapat
                      diintegrasikan ke dalam proyek lain. Dengan alat berbasis
                      vektor yang hidup di cloud, Figma memungkinkan para
                      penggunanya untuk bekerja di mana saja dari browser. Cara
                      ini termasuk alat zippy yang dibuat untuk desain,
                      pembuatan prototipe, kolaborasi, dan sistem desain
                      organisasi.
                    </p>
                  </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#e2edff"
                    fill-opacity="1"
                    d="M0,160L48,133.3C96,107,192,53,288,64C384,75,480,149,576,154.7C672,160,768,96,864,106.7C960,117,1056,203,1152,229.3C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </section>
              {/* <!-- Akhir Summary  --> */}

              <section id="projects">
                <div class="container">
                  <div class="row text-center mb-3">
                    <div class="col">
                      <h2>My Project</h2>
                    </div>
                  </div>
                  <div class="row text-center mb-3">
                    <div class="col-md-12 mb-3">
                      <div class="card">
                        <img
                          src={figmapr}
                          class="card-img-top"
                          alt="Project1"
                        />
                        <div class="card-body"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#0d6efd"
                    fill-opacity="1"
                    d="M0,224L48,218.7C96,213,192,203,288,202.7C384,203,480,213,576,229.3C672,245,768,267,864,256C960,245,1056,203,1152,192C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </section>
              {/* <!-- Footer --> */}
              <footer class="bg-primary text-white text-center pb-5">
                <p>
                  {' '}
                  Created with <i class="bi bi-heart-fill text-danger"></i> by{' '}
                  <a
                    href="https://github.com/YusufMaolana"
                    class="text-white fw-bold"
                  >
                    Yusuf Maolana
                  </a>
                  ©2022
                </p>
              </footer>
              {/* <!-- Akhir Footer --> */}
            </Tab.Pane>

            {/* MATERI HTML */}
            <Tab.Pane eventKey="#HTML">
              {/* <!-- Jumbotron --> */}
              <section class="jumbotron text-center">
                <img
                  src={htmllogo}
                  alt="HTML"
                  width="200"
                  class="rounded-circle img-thumbnail m-lg-5"
                />
                <h1 class="display-4 text-white">HTML</h1>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#ffffff"
                    fill-opacity="1"
                    d="M0,96L48,96C96,96,192,96,288,117.3C384,139,480,181,576,202.7C672,224,768,224,864,197.3C960,171,1056,117,1152,101.3C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </section>
              {/* <!-- Akhir Jumbotron --> */}

              {/* <!-- Summary --> */}
              <section id="summary">
                <div class="container">
                  <div class="row text-center mb-3">
                    <div class="col">
                      <h2>HyperText Markup Language</h2>
                    </div>
                  </div>
                  <div class="row justify-content-right fs-5 text-right">
                    <p class="text">
                      HTML atau Hypertext Markup Language adalah format sebuah
                      dokumen web yang dimana nantinya file dokumen tersebut
                      bisa dibaca dalam berbagai browser dari platfrom komputer
                      manapu. Sifat dari bagasa HTML sendiri adalah client
                      script dokumen yang artinya dokumen tersebut bisa dibuka
                      didalam komputer stand alone yang tidak membutuhkan serve
                      untuk dapat menampilkan nya di dalam browser yang biasa
                      esktensi yang digunakan adalah .htm/html.Fungsi utama dari
                      HTML adalah untuk membuat halaman website. Sehingga Anda
                      dapat berbagi informasi pada banyak orang melalui browser
                      di internet. HTML juga berfungsi sebagai pondasi utama
                      pembuatan website. Beberapa bahasa pemrograman akan
                      diaplikasikan pada HTML untuk dapat menampilkan website
                      yang lebih menarik. Fungsi lainnya dari HTML ialah menjadi
                      penanda teks dan bagian dari laman website.
                    </p>
                  </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#e2edff"
                    fill-opacity="1"
                    d="M0,160L48,133.3C96,107,192,53,288,64C384,75,480,149,576,154.7C672,160,768,96,864,106.7C960,117,1056,203,1152,229.3C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </section>
              {/* <!-- Akhir Summary  --> */}

              {/* <!-- Screnshoots --> */}
              <section id="projects">
                <div class="container">
                  <div class="row text-center mb-3">
                    <div class="col">
                      <h2>My Project</h2>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4 mb-3">
                      <div class="card">
                        <img
                          src={htmlpr1}
                          class="card-img-top"
                          alt="Project1"
                        />
                        <div class="card-body">
                          <p class="card-text text-center">
                            This Index Page With HTML
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 mb-3">
                      <div class="card">
                        <img
                          src={htmlpr2}
                          class="card-img-top"
                          alt="Project1"
                        />
                        <div class="card-body">
                          <p class="card-text text-center">
                            This Form Page With HTML
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 mb-3">
                      <div class="card">
                        <img
                          src={htmlpr3}
                          class="card-img-top"
                          alt="Project1"
                        />
                        <div class="card-body">
                          <p class="card-text text-center">
                            This Welcome Page With HTML
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#0d6efd"
                    fill-opacity="1"
                    d="M0,224L48,218.7C96,213,192,203,288,202.7C384,203,480,213,576,229.3C672,245,768,267,864,256C960,245,1056,203,1152,192C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </section>
              {/* <!-- Akhir Screnshoots --> */}

              {/* <!-- Footer --> */}
              <footer class="bg-primary text-white text-center pb-5">
                <p>
                  {' '}
                  Created with <i class="bi bi-heart-fill text-danger"></i> by{' '}
                  <a
                    href="https://github.com/YusufMaolana"
                    class="text-white fw-bold"
                  >
                    Yusuf Maolana
                  </a>
                  ©2022
                </p>
              </footer>
              {/* <!-- Akhir Footer --> */}
            </Tab.Pane>

            {/* MATERI CSS */}
            <Tab.Pane eventKey="#CSS">
              {/* <!-- Jumbotron --> */}
              <section class="jumbotron text-center">
                <img
                  src={csslogo}
                  alt="CSS"
                  width="200"
                  class="rounded-circle img-thumbnail m-lg-5"
                />
                <h1 class="display-4 text-white">CSS</h1>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#ffffff"
                    fill-opacity="1"
                    d="M0,96L48,96C96,96,192,96,288,117.3C384,139,480,181,576,202.7C672,224,768,224,864,197.3C960,171,1056,117,1152,101.3C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </section>
              {/* <!-- Akhir Jumbotron -->

                <!-- Summary --> */}
              <section id="summary">
                <div class="container">
                  <div class="row text-center mb-3">
                    <div class="col">
                      <h2>Cascading Style Sheets</h2>
                    </div>
                  </div>
                  <div class="row justify-content-right fs-5 text-right">
                    <p class="text">
                      CSS adalah singkatan dari Cascading Style Sheets. Ini
                      adalah merupakan bahasa pengkodean yang memberikan
                      tampilan dan tata letak situs web. Seiring dengan HTML,
                      CSS adalah dasar untuk desain web. Tanpa itu, situs web
                      akan tetap menjadi teks biasa dengan latar belakang putih
                      sehingga tentunya tidak menarik dan terkesan datar atau
                      monoton.Sebelum pengembangan CSS pada tahun 1996 oleh
                      World Wide Web Consortium (W3C), halaman web sangat
                      terbatas baik dalam bentuk maupun fungsinya. Browser awal
                      menyajikan halaman sebagai hypertext -yakni teks biasa,
                      gambar dan tautan ke halaman hypertext lainnya. Tidak ada
                      tata letak sama sekali untuk ditampilkan, hanya paragraf
                      yang berjalan melintasi halaman dalam satu kolom.CSS
                      sebagai inovasi pengembangan website, memungkinkan
                      beberapa inovasi untuk tata letak halaman web, seperti
                      kemampuan untuk : Menentukan font selain default untuk
                      browser ,Menentukan warna dan ukuran teks dan tautan ,
                      Menerapkan warna ke latar belakang, Mengandung elemen
                      halaman web dalam kotak dan mengapungkan kotak-kotak itu
                      ke posisi tertentu di halaman, Kemampuan dalam memasukkan
                      style ke dalam style sheet, yang membuat untuk pertama
                      kalinya, halaman web bisa dirancang.
                    </p>
                  </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#e2edff"
                    fill-opacity="1"
                    d="M0,160L48,133.3C96,107,192,53,288,64C384,75,480,149,576,154.7C672,160,768,96,864,106.7C960,117,1056,203,1152,229.3C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </section>
              {/* <!-- Akhir Summary  -->

                    <!-- Screnshoots --> */}
              <section id="projects">
                <div class="container">
                  <div class="row text-center mb-3">
                    <div class="col">
                      <h2>My Project</h2>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <div class="card">
                        <img src={csspr1} class="card-img-top" alt="Project1" />
                        <div class="card-body">
                          <p class="card-text text-center">
                            This Simple Web Page With CSS
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 mb-3">
                      <div class="card">
                        <img src={csspr2} class="card-img-top" alt="Project1" />
                        <div class="card-body">
                          <p class="card-text text-center">
                            This Web Page With CSS
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#0d6efd"
                    fill-opacity="1"
                    d="M0,224L48,218.7C96,213,192,203,288,202.7C384,203,480,213,576,229.3C672,245,768,267,864,256C960,245,1056,203,1152,192C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </section>
              {/* <!-- Akhir Screnshoots -->
                    <!-- Footer --> */}
              <footer class="bg-primary text-white text-center pb-5">
                <p>
                  {' '}
                  Created with <i class="bi bi-heart-fill text-danger"></i> by{' '}
                  <a
                    href="https://github.com/YusufMaolana"
                    class="text-white fw-bold"
                  >
                    Yusuf Maolana
                  </a>
                  ©2022
                </p>
              </footer>
              {/* <!-- Akhir Footer --> */}
            </Tab.Pane>

            {/* MATERI BOOTSTARP */}
            <Tab.Pane eventKey="#BOOTSTRAP">
              {/* <!-- Jumbotron --> */}
              <section class="jumbotron text-center">
                <img
                  src={btplogo}
                  alt="Bootstrap"
                  width="200"
                  class="rounded-circle img-thumbnail m-lg-5"
                />
                <h1 class="display-4 text-white">Bootstrap</h1>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#ffffff"
                    fill-opacity="1"
                    d="M0,96L48,96C96,96,192,96,288,117.3C384,139,480,181,576,202.7C672,224,768,224,864,197.3C960,171,1056,117,1152,101.3C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </section>
              {/* <!-- Akhir Jumbotron -->

                <!-- Summary --> */}
              <section id="summary">
                <div class="container">
                  <div class="row text-center mb-3">
                    <div class="col">
                      <h2>Bootstrap</h2>
                    </div>
                  </div>
                  <div class="row justify-content-right fs-5 text-right">
                    <p class="text">
                      Bootstrap adalah framework HTML, CSS, dan JavaScript yang
                      berfungsi untuk mendesain website responsive dengan cepat
                      dan mudah. Framework open source ini diciptakan pada tahun
                      2011 oleh Mark Otto dan Jacob Thornton dari Twitter.
                      Itulah kenapa dulunya Bootstrap dinamakan Twitter
                      Blueprint. Bootstrap dengan cepat meraih popularitas
                      digunakan oleh 27% website di seluruh dunia. Hal itu
                      karena kesederhanaan dan konsistensi yang ditawarkan
                      Bootstrap dibanding framework lainnya saat itu. Kemudahan
                      yang ditawarkan oleh Bootstrap adalah Anda tak perlu
                      coding komponen website dari nol. Framework ini tersusun
                      dari kumpulan file CSS dan JavaScript berbentuk class yang
                      tinggal pakai. Class yang disediakan Bootstrap juga cukup
                      lengkap. Mulai dari class untuk layout halaman, class menu
                      navigasi, class animasi, dan masih banyak
                      lainnya.Menariknya lagi, Bootstrap bersifat responsive
                      berkat grid system yang digunakan. Sistem grid pada
                      bootstrap menggunakan rangkaian containers, baris, dan
                      kolom untuk menyesuaikan bentuk layout dan konten website
                      Anda.Dengan kata lain, Bootstrap menjamin tampilan website
                      Anda akan tetap rapi dan konsisten di berbagai perangkat
                      pengunjung. Baik melalui smartphone, tablet, atau laptop.
                      Bootstrap memiliki sebuah fungsi dan kegunaan yang begitu
                      berarti dalam pembuatan sebuah wesbite. Kegunaan antara
                      lain : Menciptakan website Mobile Friendly Berkat sistem
                      grid, proses membuat website mobile friendly tak akan
                      membutuhkan waktu lama. ,Memudahkan resize gambar Cukup
                      dengan menambahkan class .img-responsive ke gambar, maka
                      gambar tersebut akan otomatis di-resize sesuai ukuran
                      layar pengguna. ,Menambahkan elemen website tanpa ribet
                      Bootstrap menyediakan berbagai elemen yang bisa langsung
                      Anda gunakan di website. Misalnya, navigasi, menu
                      dropdown, thumbnail, dan sebagainya. ,Membuat website
                      lebih interaktif Bootstrap juga memungkinkan Anda
                      menggunakan plugin custom JQuery. Jadi, Anda bisa
                      menambahkan berbagai elemen interaktif ke website dengan
                      mudah. Misalnya, popup, transisi, image carousel, dan
                      sebagainya.
                    </p>
                  </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#e2edff"
                    fill-opacity="1"
                    d="M0,160L48,133.3C96,107,192,53,288,64C384,75,480,149,576,154.7C672,160,768,96,864,106.7C960,117,1056,203,1152,229.3C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </section>
              {/* <!-- Akhir Summary  -->

                    <!-- Screnshoots --> */}
              <section id="projects">
                <div class="container">
                  <div class="row text-center mb-3">
                    <div class="col">
                      <h2>My Project</h2>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4 mb-3">
                      <div class="card">
                        <img src={btppr1} class="card-img-top" alt="Project1" />
                        <div class="card-body">
                          <p class="card-text text-center">
                            This Body Page With Bootstrap
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 mb-3">
                      <div class="card">
                        <img src={btppr3} class="card-img-top" alt="Project1" />
                        <div class="card-body">
                          <p class="card-text text-center">
                            This Header Page With Bootstrap
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 mb-3">
                      <div class="card">
                        <img src={btppr2} class="card-img-top" alt="Project1" />
                        <div class="card-body">
                          <p class="card-text text-center">
                            This Footer Page With Bootstrap
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#0d6efd"
                    fill-opacity="1"
                    d="M0,224L48,218.7C96,213,192,203,288,202.7C384,203,480,213,576,229.3C672,245,768,267,864,256C960,245,1056,203,1152,192C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </section>
              {/* <!-- Akhir Screnshoots -->

                    <!-- Footer --> */}
              <footer class="bg-primary text-white text-center pb-5">
                <p>
                  {' '}
                  Created with <i class="bi bi-heart-fill text-danger"></i> by{' '}
                  <a
                    href="https://github.com/YusufMaolana"
                    class="text-white fw-bold"
                  >
                    Yusuf Maolana
                  </a>
                  ©2022
                </p>
              </footer>
              {/* <!-- Akhir Footer --> */}
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
export default Home;
