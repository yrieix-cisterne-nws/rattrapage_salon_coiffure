import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

L.Marker.prototype.options.icon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
  iconAnchor: [12, 41],
})

const salons = [
  { nom: "Salon Havre", position: [49.4995, 0.10] },
  { nom: "Salon Rouen", position: [49.4330, 1.0910] },
]

export default function Map() {
  return (
    <MapContainer center={[49.47, 0.6]} zoom={9} className="h-96 w-full">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {salons.map((s) => (
        <Marker key={s.nom} position={s.position}>
          <Popup>{s.nom}</Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}