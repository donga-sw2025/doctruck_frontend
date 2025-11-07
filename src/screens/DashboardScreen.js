import { View, Text } from 'react-native'
import Card from '../components/Card'
import g from '../styles/global'

export default function DashboardScreen() {
  return (
    <View style={g.container}>
      <Text style={g.title}>관리자 대시보드 (MVP)</Text>
      <Card title="인박스(PENDING)">
        <Text style={g.text}>AI 수집 문서 큐 (신뢰도↓, 만료 임박↑ 우선). — 백엔드 연동 시 표시</Text>
      </Card>
      <View style={{ height: 12 }} />
      <Card title="품질 지표">
        <Text style={g.text}>OCR 정확도 / 결측률</Text>
        <Text style={g.text}>추출 필드 F1</Text>
        <Text style={g.text}>신뢰도 평균 / SLA</Text>
      </Card>
    </View>
  )
}
