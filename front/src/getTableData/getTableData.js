import axios from 'axios'

export async function getTableData() {
    const { data } = await axios.get('http://localhost:5000/api/table')
    return await data
}