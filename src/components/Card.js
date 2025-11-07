import { View, Text } from 'react-native'
import g from '../styles/global'

export default function Card({ title, right, children }) {
  return (
    <View style={g.panel}>
      <View style={g.row}>
        <Text style={g.title}>{title}</Text>
        {right}
      </View>
      <View style={{ marginTop: 8 }}>{children}</View>
    </View>
  )
}
