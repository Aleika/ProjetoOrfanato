import Leaftle from 'leaflet';

import mapMarkerImg from   '../images/map-marker.svg';

const mapIcon = Leaftle.icon({
    iconUrl: mapMarkerImg,
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170, 2]
})

  export default mapIcon;