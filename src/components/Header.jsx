import { useContext, useState } from "react"
import { BASE_URI, API_KEY } from "../config"
import axios from "axios"
import GlobalContext from "../context/GlobalContext"
const initalData = ''





export default function Header() {
    const { setFilms, setTvSeries } = useContext(GlobalContext)
    const [data, setData] = useState(initalData)
    async function search(e) {
        e.preventDefault()
        try {
            const movieRes = await axios.get(`${BASE_URI}/3/search/movie${API_KEY}&query=${data}`)
            console.log(movieRes.data.results)
            setFilms(movieRes.data.results)
        } catch (err) {
            console.error(err)
        }
        try {
            const seriesRes = await axios.get(`${BASE_URI}/3/search/tv${API_KEY}&query=${data}`)
            console.log(seriesRes.data.results)
            setTvSeries(seriesRes.data.results)
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