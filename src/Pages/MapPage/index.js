import React, { Component } from 'react'
import { MapView } from '../../components';
import db from '../../assets/db.json'
export default class MapPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: { lat: -6.901914417567621, lng: 107.59818173807612 },
      zoom: 12,
      locations: [],
      result: [],
    }
  }

  componentDidMount() {

  }
  criminals = () => {
      this.setState({
        locations: db.criminals
      }, () => console.log(this.state.locations))
  }
  cctv = () => {
      this.setState({
        locations: db.cctv
      }, () => console.log(this.state.locations))
  }
  markets = () => {
      this.setState({
        locations: db.markets
      }, () => console.log(this.state.locations))
  }
  clearData = () => {
    this.setState({
      locations: ''
    })
  }
  render() {
    const { currentLocation, zoom, locations } = this.state;
    return (
      <div className="row map-view">
        <div className="col-md-10">
          <MapView locations={locations} zoom={zoom} currentLocation={currentLocation} />
        </div>
        <div className="col-md-2">
          <div id="accordion">
            <div class="card">
              <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                  <button class="btn btn-block" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Menu
                    </button>
                </h5>
              </div>
              <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body">
                  {/* <button type="button" class="btn btn-info btn-block" onClick={this.clearData}>Clear</button> */}
                  <button type="button" class="btn btn-danger btn-block" onClick={this.criminals}>Kriminal</button>
                  <button type="button" class="btn btn-info btn-block" onClick={this.cctv}>CCTV</button>
                  <button type="button" class="btn btn-warning btn-block" onClick={this.markets}>Markets</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
