import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";


export default function Main() {
    const { films } = useContext(GlobalContext)
    return (
        films && films.map(({ id, title, original_title, original_language, vote_count }) => <div key={id}>
            <ol>
                <li>{title}</li>
                <li>{original_title}</li>
                <li>{original_language}</li>
                <li>{vote_count}</li>
            </ol>
        </div>)
    )
}