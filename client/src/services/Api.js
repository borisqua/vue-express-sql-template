import axios from 'axios';

// noinspection JSUnusedGlobalSymbols
export default () => {
  return axios.create({
    baseURL: `http://localhost:8081`
  })
}
