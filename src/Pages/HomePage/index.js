import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Button, Modal } from 'react-bootstrap';
import db from '../../assets/db.json'

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            valueNews: [],
            valueShowNews: {}
        }
    }
    componentDidMount = () => {
        this.setState({
            valueNews: db.news
        }, () => console.log(this.state.news))
    }
    showModalNews = (news) => {
        console.log(news)
        this.setState({
            show: true,
            valueShowNews: news
        })
    }
    handleCloseModalNews = () => {
        this.setState({
            show: false
        })
    }
    render() {
        return (
            <>
                <section className="description">
                    <div className="d-flex justify-content-center my-5 bg-primary">
                        <div className="carousel-wrap">
                            <OwlCarousel className="owl-theme mt-2" loop items={1} autoplay={true} margin={10} >
                                <div className="row bg-white my-4 py-4 mx-5 br-10 no-gutters">
                                    <div className="col-md-6 px-5">
                                        <h2 className="text-center my-5 font-weight-bold">Profile Bandung Command Center</h2>
                                        <p className="text-justify font-20">
                                            Command Center adalah bagian upaya menuju Bandung Smart City. Bandung sebagai Kota Pintar inilah yang menuntut pengawasan tidak melulu harus dilakukan secara manual. Sekarang di zaman serba canggih ini, penggunaan mesin komputer beserta alat-alat pendukungnya bisa diberdayakan untuk fungsi monitoring di Kota Bandung.                                </p>
                                    </div>
                                    <div className="col-md-6">
                                        <iframe
                                            width={650}
                                            height={400}
                                            src="https://www.youtube.com/embed/iflphwmYJSw"
                                            className="br-10 d-flex justify-content-center"
                                        ></iframe>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </section>
                <section className="layanan">
                    <div className="my-5 mx-5 bg-white px-4 pb-5 shadow br-10">
                        <div className="d-flex justify-content-between py-4">
                            <h4 className="font-weight-bold">Layanan</h4>
                            <h4 className="font-weight-bold">Lihat Lainnya</h4>
                        </div>
                        <div className="carousel-wrap">
                            <OwlCarousel className="owl-theme mt-2" loop items={6} autoplay={true} margin={10}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="card">
                                            <img className="card-img-top" src="http://lebongkab.go.id/wp-content/uploads/2019/02/lapor-1.png" alt="Card image cap" width={200} height={120} />
                                            <div className="card-body">
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <a href="#" class="btn btn-primary">Kunjungi</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </section>
                <section className="berita">
                    <div className="my-5 mx-5 bg-white px-4 pb-5 shadow br-10 py-2">
                        <div className="d-flex justify-content-between py-4">
                            <h4 className="font-weight-bold">Berita</h4>
                            <h4 className="font-weight-bold">Lihat Lainnya</h4>
                        </div>
                        <div className="row">
                            {this.state.valueNews.map(news => {
                                return (
                                    <div className="col-md-3">
                                        <div className="card">
                                            <img className="card-img-top" src={news.link_image} alt="Card image cap" />
                                            <div className="card-body">
                                                <h5 className="card-title font-weight-bold">{news.title.substr(0, 20)}</h5>
                                                <p className="card-text">{news.description.substr(0, 50)}</p>
                                                <Button className="btn btn-primary" onClick={() => this.showModalNews(news)}>Selengkapnya</Button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
                <section className="media-sosial">
                    <div className="my-5 mx-5 bg-white pb-5 py-2">
                        <div className="row ">
                            <div className="col-md-6 br-10">
                                <h4 className="font-weight-bold text-center my-2">Last Tweets</h4>
                                <div className="row border-5 shadow overflow-hidden mb-3 mx-1 no-gutters br-10">
                                    <div className="col-md-6">
                                        <img src="https://images.unsplash.com/photo-1606431318513-dec97839e60f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1364&q=80" alt="" srcset="" width={250} />
                                    </div>
                                    <div className="col-md-6">
                                        <h5 className="font-weight-bold my-2">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                                <div className="row border-5 shadow overflow-hidden mb-3 mx-1 no-gutters br-10">
                                    <div className="col-md-6">
                                        <img src="https://images.unsplash.com/photo-1606431318513-dec97839e60f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1364&q=80" alt="" srcset="" width={250} />
                                    </div>
                                    <div className="col-md-6">
                                        <h5 className="font-weight-bold my-2">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 br-10">
                                <h4 className="font-weight-bold text-center my-2">Last Instagram</h4>
                                <div className="row border-5 shadow overflow-hidden mb-3 mx-1 no-gutters br-10">
                                    <div className="col-md-6">
                                        <img src="https://images.unsplash.com/photo-1606431318513-dec97839e60f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1364&q=80" alt="" srcset="" width={250} />
                                    </div>
                                    <div className="col-md-6">
                                        <h5 className="font-weight-bold my-2">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                                <div className="row border-5 shadow overflow-hidden mb-3 mx-1 no-gutters br-10">
                                    <div className="col-md-6">
                                        <img src="https://images.unsplash.com/photo-1606431318513-dec97839e60f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1364&q=80" alt="" srcset="" width={250} />
                                    </div>
                                    <div className="col-md-6">
                                        <h5 className="font-weight-bold my-2">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <section className="partner">
                    <div className="shadow mx-5 br-10 py-2 my-2">
                        <h4 className="text-center pt-2 font-weight-bold">Partner</h4>
                        <div className="carousel-wrap ">
                            <OwlCarousel className="owl-theme mt-2" loop items={10} autoplay={true} margin={10}>
                                <img src="https://pbs.twimg.com/profile_images/823829747729694720/acBPCjDX_400x400.jpg" alt="" srcset="" className="br-full" />
                                <img src="http://office.humas.bandung.go.id/assets/images/system/59c94021e05ee.jpg" alt="" srcset="" className="br-full" />
                            </OwlCarousel>
                        </div>
                    </div>
                </section>
                {/* modal News */}
                <Modal show={this.state.show} onHide={this.handleCloseModalNews} size="lg">
                    <Modal.Header closeButton />
                    <Modal.Body>
                        <img src={this.state.valueShowNews.link_image} alt="" srcset="" width={600} className="rounded mx-auto d-block" />
                        <h5 className="card-title font-weight-bold">{this.state.valueShowNews.title}</h5>
                        <p className="card-text">{this.state.valueShowNews.description}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleCloseModalNews}>
                            Close
                         </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}
