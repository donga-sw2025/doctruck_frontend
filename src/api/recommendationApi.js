import client from './axiosClient'

export const fetchRecommendations = (operatorId, dateRange) => client.get(`/operators/${operatorId}/recommendations`, { params: { date_range: dateRange }})
