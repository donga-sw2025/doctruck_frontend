import { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import Card from '../components/Card'
import DTMapView from '../components/MapView'
import { fetchRecommendations } from '../api/recommendationApi'
import useAuth from '../hooks/useAuth'
import g from '../styles/global'

export default function HomeScreen() {
  const { user, bootstrap } = useAuth()
  const [recs, setRecs] = useState([])

  useEffect(() => { bootstrap() }, [])
  useEffect(() => {
    async function run() {
      if (!user) return
      try {
        const { data } = await fetchRecommendations(user?.user_id || 1, 'today')
        setRecs(data || [])
      } catch {}
    }
    run()
  }, [user])

  return (
    <View style={g.container}>
      <Card title="오늘 영업 가능 Top-N">
        {recs.length ? recs.slice(0,5).map((r,i)=> <Text key={i} style={g.text}>• {r.name} — {r.score ?? '-'}</Text>) : <Text style={g.text}>추천 데이터를 불러오지 못했습니다. (MVP API 필요)</Text>}
      </Card>
      <View style={{ height: 12 }} />
      <Card title="현재 위치 주변 지도">
        <DTMapView />
      </Card>
    </View>
  )
}
