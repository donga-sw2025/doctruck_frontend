import MapView, { Marker, Polygon } from 'react-native-maps'
import { View } from 'react-native'
import g from '../styles/global'

export default function DTMapView({ markers = [], polygons = [] }) {
  return (
    <View style={[g.panel, { padding: 0, overflow: 'hidden' }]}>
      <MapView
        style={{ width: '100%', height: 320 }}
        initialRegion={{ latitude: 37.5665, longitude: 126.9780, latitudeDelta: 0.2, longitudeDelta: 0.2 }}
      >
        {markers.map((m, i) => (
          <Marker key={i} coordinate={{ latitude: m.lat, longitude: m.lng }} title={m.title} />
        ))}
        {polygons.map((p, i) => (
          <Polygon key={i} coordinates={(p.coords || []).map(([lng, lat]) => ({ latitude: lat, longitude: lng }))} />
        ))}
      </MapView>
    </View>
  )
}
