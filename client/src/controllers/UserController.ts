import axios from "axios"
import type {SearchResults} from '../types/SearchResults'
import type {UserDetails} from '../types/UserDetails'
import type {SortingType} from '../types/SortingType'

const axiosApi = axios.create({
  // @ts-ignore
  baseURL: `${API_URL}`
})

export async function getAllUsers(length: number = 20, sorting: SortingType = "ACTIVITY"): Promise<SearchResults> {
  const response = await axiosApi({
    method: 'GET',
    url: '/search',
    params: {
      length,
      sorting,
    }
  })
  return response.data
}

export async function getSelectedUsers(ids: number): Promise<UserDetails[]> {
  const response = await axiosApi({
    method: 'GET',
    url: '/profiles',
    params: {
      ids,
    }
  })
  return response.data
}
