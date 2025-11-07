import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import FestivalScreen from '../screens/FestivalScreen'
import DocumentScreen from '../screens/DocumentScreen'
import DashboardScreen from '../screens/DashboardScreen'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import useAuth from '../hooks/useAuth'
import { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

function AuthedTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerStyle: { backgroundColor: '#0d1322' }, headerTintColor: '#e2e8f0', tabBarStyle:{ backgroundColor:'#0d1322' }, tabBarActiveTintColor:'#6ee7b7' }}
    >
      <Tab.Screen name="홈" component={HomeScreen} options={{ tabBarIcon: ({color, size}) => <Ionicons name="home" color={color} size={size} /> }} />
      <Tab.Screen name="축제" component={FestivalScreen} options={{ tabBarIcon: ({color, size}) => <Ionicons name="map" color={color} size={size} /> }} />
      <Tab.Screen name="공문서" component={DocumentScreen} options={{ tabBarIcon: ({color, size}) => <Ionicons name="document-text" color={color} size={size} /> }} />
      <Tab.Screen name="관리자" component={DashboardScreen} options={{ tabBarIcon: ({color, size}) => <Ionicons name="speedometer" color={color} size={size} /> }} />
    </Tab.Navigator>
  )
}

export default function TabNavigator() {
  const { token, bootstrap } = useAuth()
  const [dummyToken, setDummyToken] = useState(true) // Set to true to bypass login

  useEffect(() => {
    bootstrap()
    // Optionally, you can remove this in a real scenario once auth is working
    // setDummyToken(true)
  }, [])

  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#0d1322' }, headerTintColor: '#e2e8f0' }}>
      {!dummyToken ? (
        <>
          <Stack.Screen name="로그인" component={LoginScreen} />
          <Stack.Screen name="회원가입" component={RegisterScreen} />
        </>
      ) : (
        <Stack.Screen name="앱" component={AuthedTabs} options={{ headerShown: false }} />
      )}
    </Stack.Navigator>
  )
}
