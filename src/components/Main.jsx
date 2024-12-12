import Card from "./Card/Card"
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";


export default function Main() {
    const { films, tvSeries } = useContext(GlobalContext)
    return (
        <main>
            <section>
                <h2>Film</h2>
                {films && films.map(film => <Card key={film.id} search={film} />)}
            </section>
            <section>
                <h2>Serie tv</h2>
                {tvSeries && tvSeries.map(tvSerie => <Card key={tvSerie.id} search={tvSerie} />)}
            </section>
        </main>
    )
}