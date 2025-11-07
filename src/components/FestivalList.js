import { View, Text } from 'react-native'
import g from '../styles/global'

export default function FestivalList({ items = [] }) {
  if (!items.length) return <View style={g.panel}><Text style={g.text}>표시할 축제가 없습니다.</Text></View>
  return (
    <View style={g.panel}>
      {items.map((f) => (
        <View key={f.id || f.location_id} style={g.listItem}>
          <Text style={g.text}>{f.name || f.location_name}</Text>
          <Text style={{color:'#9aa4b2', fontSize:12}}>{f.period || '-'} · {f.organizer || '-'}</Text>
        </View>
      ))}
    </View>
  )
}
