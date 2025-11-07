import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { register as apiRegister } from '../api/authApi'
import g from '../styles/global'

export default function RegisterScreen({ navigation }) {
  const [form, setForm] = useState({ email:'', password:'', name:'', phone_number:'' })
  const [msg, setMsg] = useState('')

  const onSubmit = async () => {
    setMsg('')
    try {
      await apiRegister(form)
      setMsg('회원가입이 완료되었습니다. 로그인해 주세요.')
      setTimeout(() => navigation.navigate('로그인'), 700)
    } catch {
      setMsg('회원가입에 실패했습니다. 입력값을 확인해 주세요.')
    }
  }

  return (
    <View style={g.container}>
      <Text style={g.title}>회원가입</Text>
      <View style={g.panel}>
        <TextInput style={g.input} placeholder="이메일" placeholderTextColor="#9aa4b2" value={form.email} onChangeText={(v)=>setForm({...form, email:v})} />
        <TextInput style={g.input} placeholder="비밀번호" placeholderTextColor="#9aa4b2" secureTextEntry value={form.password} onChangeText={(v)=>setForm({...form, password:v})} />
        <TextInput style={g.input} placeholder="사업자명/이름" placeholderTextColor="#9aa4b2" value={form.name} onChangeText={(v)=>setForm({...form, name:v})} />
        <TextInput style={g.input} placeholder="연락처" placeholderTextColor="#9aa4b2" value={form.phone_number} onChangeText={(v)=>setForm({...form, phone_number:v})} />
        <TouchableOpacity style={g.button} onPress={onSubmit}>
          <Text style={g.buttonText}>가입하기</Text>
        </TouchableOpacity>
        {msg ? <Text style={{ color: '#9aa4b2', marginTop: 8 }}>{msg}</Text> : null}
      </View>
    </View>
  )
}
