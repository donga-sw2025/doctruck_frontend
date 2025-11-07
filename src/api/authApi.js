import client from './axiosClient'

export const login = (email, password) => client.post('/auth/login', { email, password })
export const register = (payload) => client.post('/auth/register', payload)
export const me = () => client.get('/auth/me')
