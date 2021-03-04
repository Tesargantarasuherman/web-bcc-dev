import React, { Component } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { marketIcon,cctvIcon,policeIcon } from '../VenueLocationIcon'
export default class MapView extends Component {
    
    IconMap =(inputIcon)=>{
        console.log(inputIcon)
        if(inputIcon == "criminals"){
            return policeIcon
        }
        else if(inputIcon == "markets"){
            return marketIcon
        }
        else{
            return cctvIcon
        }
    }
    render() {
        return (
            <MapContainer center={this.props.currentLocation} zoom={this.props.zoom}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                {
                    this.props.locations && this.props.locations.map((locations,index) => {
                        return (
                            <Marker key={index} position={locations.geometry}  icon={this.IconMap(locations.category)}>
                                <Popup>
                                    {
                                        locations.category == 'markets' ?
                                            <>
                                                <table class="table table-striped table-dark">
                                                    <thead>
                                                        <th>
                                                            Nama Pasar
                                                        </th>
                                                        <th>
                                                            {locations.name}
                                                        </th>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">Tanggal</th>
                                                            <th scope="row">{locations.date}</th>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <table class="table table-striped">
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">Harga Bawang</th>
                                                            <td>{locations.price.bawang}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Harga Cabai</th>
                                                            <td>{locations.price.cabai}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Harga Cabai</th>
                                                            <td>{locations.price.cabai}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Harga Cabai</th>
                                                            <td>{locations.price.cabai}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Harga Cabai</th>
                                                            <td>{locations.price.cabai}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Harga Cabai</th>
                                                            <td>{locations.price.cabai}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Harga Cabai</th>
                                                            <td>{locations.price.cabai}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Harga Cabai</th>
                                                            <td>{locations.price.cabai}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Harga Cabai</th>
                                                            <td>{locations.price.cabai}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Harga Cabai</th>
                                                            <td>{locations.price.cabai}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Harga Cabai</th>
                                                            <td>{locations.price.cabai}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </> :
                                            <iframe
                                                width={300}
                                                height={200}
                                                src={locations.link}
                                            ></iframe>
                                    }
                                    <div>
                                        <h5><b>{locations.name}</b><br /> {locations.description}<br /></h5>
                                        <a className="btn btn-info btn-block text-decoration-none" href={`https://maps.google.com/?q=${locations.geometry.lat},${locations.geometry.lng}`}>Pergi Ke Lokasi</a>
                                    </div>
                                </Popup>
                            </Marker>
                        )
                    })
                }

            </MapContainer>
        )
    }
}
