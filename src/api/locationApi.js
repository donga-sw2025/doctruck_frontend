import client from './axiosClient'

export const listLocations = (params) => client.get('/festivals', { params })
export const availability = (lat, lng, datetime) => client.get('/geo/availability', { params: { lat, lng, datetime }})
export const getFestivalZones = (id) => client.get(`/geo/festivals/${id}/zones`)
