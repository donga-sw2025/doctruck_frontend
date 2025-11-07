import { create } from 'zustand'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { login as apiLogin, me as apiMe } from '../api/authApi'

const useAuth = create((set, get) => ({
  token: null,
  user: null,
  loading: false,
  async bootstrap() {
    try {
      const token = await AsyncStorage.getItem('dt_token')
      if (!token) return
      set({ loading: true })
      const { data } = await apiMe()
      set({ user: data, token, loading: false })
    } catch (e) {
      await AsyncStorage.removeItem('dt_token')
      set({ token: null, user: null, loading: false })
    }
  },
  async login(email, password) {
    try {
      set({ loading: true })
      const { data } = await apiLogin(email, password)
      const access = data?.access_token
      if (access) {
        await AsyncStorage.setItem('dt_token', access)
        set({ token: access })
        await get().bootstrap()
        return true
      }
      set({ loading: false })
      return false
    } catch (e) {
      set({ loading: false })
      return false
    }
  },
  async logout() {
    await AsyncStorage.removeItem('dt_token')
    set({ token: null, user: null })
  }
}))

export default useAuth
