import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/logo.png'
export default class NavbarComponent extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to="/" className="navbar-brand">
                        <img src={Logo} alt="" className="mx-auto d-block" width={110} height={50} />
                        <p className="text-center navbar-title text-primary font-weight-bold">Bandung Command Center</p>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item mx-2 ">
                                <Link to="/" className="text-decoration-none font-weight-bold nav-link">Home</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="text-decoration-none font-weight-bold nav-link">Profile</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="text-decoration-none font-weight-bold nav-link">Layanan</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link to="/map" className="text-decoration-none font-weight-bold nav-link">Peta</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="text-decoration-none font-weight-bold nav-link">Berita</Link>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
                <div className="d-flex justify-content-between container my-2">
                    <button className="btn btn-outline-primary my-2 mx-1 my-sm-0 font-weight-bold nav-text-services" type="submit">Covid-19</button>
                    <button className="btn btn-outline-primary my-2 mx-1 my-sm-0 font-weight-bold nav-text-services" type="submit">Call Center</button>
                    <button className="btn btn-outline-primary my-2 mx-1 my-sm-0 font-weight-bold nav-text-services" type="submit">INTERNational Program</button>
                </div>
            </>
        )
    }
}
