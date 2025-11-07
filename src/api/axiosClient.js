import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const axiosClient = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL || 'http://10.0.2.2:5000/api',
  headers: { 'Content-Type': 'application/json' },
})

axiosClient.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('dt_token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

export default axiosClient
