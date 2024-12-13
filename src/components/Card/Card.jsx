const language = {
    it: 'icons8-circolare-italia-48.png',
    en: 'icons8-circolare-della-gran-bretagna-48.png',
    de: 'icons8-circolare-tedesca-48.png',
    fr: 'icons8-francia-circolare-48.png',
    es: 'icons8-spagna-circolare-48.png'
}
import { IMAGE_URI } from "../../config"
// import ReactDOM from 'react-dom'
// import { faStar } from '@fortawesome/free-solid-svg-icons'
// import { faStar } from '@fortawesome/free-regular-svg-icons'


export default function Card({ search }) {
    const { title, original_title, name, original_name, original_language, vote_average, poster_path } = search
    const starVote = Math.round(vote_average / 2)
    function starCalculator(vote) {


    }
    return (
        <div>
            <div>
                <ol>
                    <li>{title || name}</li>
                    <li><img src={`${IMAGE_URI}${poster_path}`} alt="" /></li>
                    <li>{original_title || original_name}</li>
                    <li><img src={language[original_language]} alt="" /></li>
                    <li>{starVote}</li>
                </ol>
            </div>
        </div>
    )
}