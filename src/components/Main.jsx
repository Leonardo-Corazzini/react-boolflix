import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
const language = {
    it: 'icons8-circolare-italia-48.png',
    en: 'icons8-circolare-della-gran-bretagna-48.png',
    de: 'icons8-circolare-tedesca-48.png',
    fr: 'icons8-francia-circolare-48.png',
    es: 'icons8-spagna-circolare-48.png'
}


export default function Main() {
    const { films } = useContext(GlobalContext)
    return (
        films && films.map(({ id, title, original_title, original_language, vote_count }) => <div key={id}>
            <ol>
                <li>{title}</li>
                <li>{original_title}</li>
                <li><img src={language[original_language]} alt="" /></li>
                <li>{vote_count}</li>
            </ol>
        </div>)
    )
}