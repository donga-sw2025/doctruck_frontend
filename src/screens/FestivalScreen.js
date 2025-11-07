import { useEffect, useMemo, useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { listLocations, getFestivalZones } from '../api/locationApi'
import DTMapView from '../components/MapView'
import g from '../styles/global'

export default function FestivalScreen() {
  const [items, setItems] = useState([])
  const [zones, setZones] = useState([])

  useEffect(() => {
    async function run() {
      try {
        const { data } = await listLocations({})
        setItems(data?.items || data || [])
      } catch {
        setItems([])
      }
    }
    run()
  }, [])

  const polygons = useMemo(() => {
    return zones.map(z => ({ coords: z.coordinates || [] }))
  }, [zones])

  return (
    <ScrollView style={g.container} contentInsetAdjustmentBehavior="automatic">
      <Text style={g.title}>축제 지도</Text>
      <View style={{ marginBottom: 12 }}>
        {items.slice(0, 20).map((f) => (
          <TouchableOpacity
            key={f.id || f.location_id}
            style={[g.button, { marginBottom: 8, alignItems: 'flex-start' }]}
            onPress={async () => {
              try {
                const { data } = await getFestivalZones(f.id || f.location_id)
                setZones(data?.features || [])
              } catch { setZones([]) }
            }}
          >
            <Text style={g.buttonText}>{f.name || f.location_name}</Text>
          </TouchableOpacity>
        ))}
        {!items.length && <Text style={g.text}>축제 데이터를 불러오지 못했습니다. (MVP API 필요)</Text>}
      </View>
      <DTMapView markers={items.slice(0,10).map(x => ({
        lat: x.latitude || 37.5665, lng: x.longitude || 126.9780, title: x.name || x.location_name
      }))} polygons={polygons} />
    </ScrollView>
  )
}
