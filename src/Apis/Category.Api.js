/* eslint-disable no-console */
import axiosClient from "./clientAxios.js"

const url = "category/"
const getAll = async () => {
    try {
        const res = await axiosClient.get(`${url}getCategory`)
        return res.data
    } catch (err) {
        console.log(err)
        return null
    }
}
const getForSelect = async () => {
    try {
        const res = await axiosClient.get(
            `${url}getSelectCategoryByRoom/6094fce7285d634bc09451a8`
        )
        return res.data
    } catch (err) {
        console.log(err)
        return null
    }
}
const Category = { getAll, getForSelect }

export default Category
