import client from './axiosClient'

export const listDocuments = (params) => client.get('/documents', { params })
