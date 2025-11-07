import { View, Text } from 'react-native'
import g from '../styles/global'

export default function DocumentList({ items = [] }) {
  if (!items.length) return <View style={g.panel}><Text style={g.text}>표시할 공문서가 없습니다.</Text></View>
  return (
    <View style={g.panel}>
      {items.map((d) => (
        <View key={d.doc_id} style={g.listItem}>
          <Text style={g.text}>{d.title}</Text>
          <Text style={{color:'#9aa4b2', fontSize:12}}>{d.source} · {d.published_at || '-'} ~ {d.expires_at || '-'}</Text>
        </View>
      ))}
    </View>
  )
}
