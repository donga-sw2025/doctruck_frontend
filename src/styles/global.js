import { StyleSheet } from 'react-native'
import { colors } from './theme'

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg, padding: 16 },
  panel: { backgroundColor: '#0f1523', borderColor: '#22314d', borderWidth: 1, borderRadius: 16, padding: 16 },
  title: { color: colors.text, fontSize: 20, fontWeight: '700', marginBottom: 8 },
  text: { color: colors.text },
  input: { backgroundColor: '#10192b', borderColor: '#26314a', borderWidth: 1, borderRadius: 12, color: colors.text, padding: 12, marginBottom: 12 },
  button: { backgroundColor: '#1d2435', borderColor: '#293044', borderWidth: 1, padding: 12, borderRadius: 12, alignItems: 'center' },
  buttonText: { color: colors.text, fontWeight: '700' },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  listItem: { borderBottomColor: '#1a2336', borderBottomWidth: 1, paddingVertical: 10 }
})
