import L from 'leaflet';
import Market from '../assets/svg/032-shopping.svg'
import CCTV from '../assets/svg/039-cctv.svg'
import Police from '../assets/svg/026-police station.svg'

const marketIcon = L.icon({
  iconUrl: Market,
  iconRetinaUrl: Market,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [50, 50],
  className: 'leaflet-marker-icon'
});
const cctvIcon= L.icon({
  iconUrl: CCTV,
  iconRetinaUrl: CCTV,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [50, 50],
  className: 'leaflet-marker-icon'
});
const policeIcon= L.icon({
  iconUrl: Police,
  iconRetinaUrl: Police,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [50, 50],
  className: 'leaflet-marker-icon'
});
export {marketIcon,cctvIcon,policeIcon}
