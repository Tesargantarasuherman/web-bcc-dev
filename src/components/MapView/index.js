import React, { Component } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
export default class MapView extends Component {

    render() {
        return (
            <MapContainer center={this.props.currentLocation} zoom={this.props.zoom}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                {
                    this.props.locations && this.props.locations.map(locations => {
                        return (
                            <Marker position={locations.geometry}>
                                <Popup>
                                    {
                                        locations.link == '' ?
                                            '' :
                                            <iframe
                                                width={750}
                                                height={500}
                                                src={locations.link}
                                            ></iframe>
                                    }
                                    <div>
                                        <b>{locations.name}</b><br /> {locations.description}
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
