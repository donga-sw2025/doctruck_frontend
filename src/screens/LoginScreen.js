import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import useAuth from '../hooks/useAuth'
import g from '../styles/global'

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login, loading } = useAuth()

  const onSubmit = async () => {
    setError('')
    const ok = await login(email, password)
    if (!ok) setError('로그인에 실패했습니다.')
  }

  return (
    <View style={g.container}>
      <Text style={g.title}>로그인</Text>
      <View style={g.panel}>
        <TextInput style={g.input} placeholder="이메일" placeholderTextColor="#9aa4b2" value={email} onChangeText={setEmail} />
        <TextInput style={g.input} placeholder="비밀번호" placeholderTextColor="#9aa4b2" value={password} onChangeText={setPassword} secureTextEntry />
        {error ? <Text style={{ color: '#fca5a5', marginBottom: 8 }}>{error}</Text> : null}
        <TouchableOpacity style={g.button} disabled={loading} onPress={onSubmit}>
          <Text style={g.buttonText}>{loading ? '로그인 중…' : '로그인'}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('회원가입')} style={{ marginTop: 12 }}>
        <Text style={{ color: '#6ee7b7' }}>계정이 없으신가요? 회원가입</Text>
      </TouchableOpacity>
    </View>
  )
}
