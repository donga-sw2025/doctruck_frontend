import { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { listDocuments } from '../api/documentApi'
import DocumentList from '../components/DocumentList'
import g from '../styles/global'

export default function DocumentScreen() {
  const [items, setItems] = useState([])

  useEffect(() => {
    async function run() {
      try {
        const { data } = await listDocuments({})
        setItems(data)
      } catch {
        setItems([])
      }
    }
    run()
  }, [])

  return (
    <View style={g.container}>
      <Text style={g.title}>검증된 공문서</Text>
      <DocumentList items={items} />
    </View>
  )
}
