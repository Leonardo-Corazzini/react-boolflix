import ItemList from "./ItemList/ItemList";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";


export default function Main() {
    const { films, tvSeries } = useContext(GlobalContext)
    return (
        <main>
            <ItemList title='Movies' search={films} />
            <ItemList title='Tv Series' search={tvSeries} />
        </main>
    )
}