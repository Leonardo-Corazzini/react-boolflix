import { useContext, useState } from "react"
import { BASE_URI, API_KEY } from "../config"
import axios from "axios"
import GlobalContext from "../context/GlobalContext"
const initalData = ''





export default function Header() {
    const { setFilms } = useContext(GlobalContext)
    const [data, setData] = useState(initalData)
    async function search(e) {
        e.preventDefault()
        try {
            const res = await axios.get(`${BASE_URI}/search/movie${API_KEY}&query=${data}`)
            console.log(res.data.results)
            setFilms(res.data.results)
        } catch (err) {
            console.error(err)
        }
        setData(initalData)
    }
    return (
        <header>
            <form onSubmit={search} action="">
                <input type="text" onChange={(e) => setData(e.target.value)} name="name" value={data} placeholder="scrivi il nome del film" />
                <input type="submit" value='cerca' />
            </form>
        </header>
    )
}