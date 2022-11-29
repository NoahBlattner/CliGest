import axios from 'axios'

const api = axios.create({
  baseURL: '',
  timeout: 3000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export { api }
