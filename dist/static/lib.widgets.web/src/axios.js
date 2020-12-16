import axios from 'axios'

let currentAxios = axios

export const setAxios = (nextAxios) => {
    currentAxios = nextAxios
}

export const getAxios = () => currentAxios
