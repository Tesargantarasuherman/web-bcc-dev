import React, {Component} from 'react'
import './App.css';
import {NavbarComponent} from './components';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import MapPage from './Pages/MapPage';
import LogoBCC from './assets/img/logo-white.png'

function App() {
    return (
        <Router>
            <NavbarComponent/>
            <Switch>
                <Route exact path="/"
                    component={HomePage}/>
                <Route path="/map"
                    component={MapPage}/>
            </Switch>
            <footer className=" bg-primary ">
                <div className="row mx-5 mt-4 py-4">
                    <div className="col-md-4">
                        <div className="d-flex  flex-column">
                            <div className="d-flex justify-content-between  ">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Lambang_Kota_Bandung.svg" alt="" srcset=""
                                    height={120}/>
                                <img src={LogoBCC}
                                    alt=""
                                    srcset=""
                                    height={120}/>
                            </div>
                            <span className="text-center font-18 mt-4 text-light">
                                Balai Kota Bandung
                                                  Jl. Wastukencana No.2, Babakan Ciamis, Sumur Bandung,
                                                  Kota Bandung, Jawa Barat 40117
                                                  info@commandcenter.bandung.go.id
                                                  Phone: (022) 4216402
                            </span>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="d-flex justify-content-around">
                            <div className="main-menu">
                                <h4 className="text-center text-light font-weight-bold">Main Menu</h4>
                                <h5 className="text-light">Profile</h5>
                                <h5 className="text-light">Layanan</h5>
                                <h5 className="text-light">Peta</h5>
                                <h5 className="text-light">Berita</h5>
                            </div>
                            <div className="main-menu">
                                <h4 className="text-center text-light font-weight-bold">Bantuan</h4>
                                <h5 className="text-light">FAQ</h5>
                                <h5 className="text-light">Karir</h5>
                                <h5 className="text-light">Internship</h5>
                            </div>
                            <div className="social-media">
                                <h4 className="text-center text-light font-weight-bold">Social Media</h4>
                                <div className="d-flex justify-content-between">
                                    <i class="fa text-light fa-2x mx-2 fa-linkedin-square" aria-hidden="true"></i>
                                    <i class="fa text-light fa-2x mx-2 fa-youtube-play" aria-hidden="true"></i>
                                    <i class="fa text-light fa-2x mx-2 fa-instagram" aria-hidden="true"></i>
                                    <i class="fa text-light fa-2x mx-2 fa-twitter" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </Router>
    );
}

export default App;
