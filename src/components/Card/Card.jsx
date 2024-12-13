import style from './Card.module.css'
const language = {
    it: 'icons8-circolare-italia-48.png',
    en: 'icons8-circolare-della-gran-bretagna-48.png',
    de: 'icons8-circolare-tedesca-48.png',
    fr: 'icons8-francia-circolare-48.png',
    es: 'icons8-spagna-circolare-48.png'
}
import { IMAGE_URI } from "../../config"
import placeHolderImage from "../../assets/placeholder.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons'


export default function Card({ search }) {
    const { title, original_title, name, original_name, original_language, vote_average, poster_path, vote_count, overview } = search
    const starVote = Math.round(vote_average / 2)
    const emptyVote = 5 - starVote
    function starArray(num1, num2) {
        const starArray = []
        for (let i = 0; i < num1; i++) {
            starArray.push(fullStar)

        }
        for (let i = 0; i < num2; i++) {

            starArray.push(emptyStar)
        }
        return starArray
    }

    return (
        <div className={style.card}>
            <div className={style.thumb}>
                <img src={poster_path ? `${IMAGE_URI}${poster_path}` : placeHolderImage} alt="" />
            </div>
            <div className={style.description}>
                <div className={style.title} title={original_title || original_name}>{title || name}</div>
                <div className={style.language}><img src={language[original_language]} alt="" />{language[original_language] ? '' : original_language}</div>
                <div className={style.vote}>{starArray(starVote, emptyVote).map((star, i) => <span key={i}> <FontAwesomeIcon icon={star} /></span>)} ({vote_count})</div>
                <p className={style.overview}>{overview}</p>

            </div>
        </div >
    )
}

