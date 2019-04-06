import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `https://senary.uk/store-filter/`,
    withCredentials: false,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}