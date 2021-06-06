/* eslint-disable no-console */
import axiosClient from "./clientAxios.js"

const url = "room/"
const getAll = async () => {
    try {
        const res = await axiosClient.get(`${url}getRooms`)
        return res.data
    } catch (err) {
        console.log(err)
        return null
    }
}
const getForSelect = async () => {
    try {
        const res = await axiosClient.get(`${url}getSelectRooms`)
        return res.data
    } catch (err) {
        console.log(err)
        return null
    }
}
const Product = { getAll, getForSelect }

export default Product
