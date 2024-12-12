const language = {
    it: 'icons8-circolare-italia-48.png',
    en: 'icons8-circolare-della-gran-bretagna-48.png',
    de: 'icons8-circolare-tedesca-48.png',
    fr: 'icons8-francia-circolare-48.png',
    es: 'icons8-spagna-circolare-48.png'
}


export default function Card({ search }) {
    const { title, original_title, name, original_name, original_language, vote_count } = search


    return (
        <div>
            <div>
                <ol>
                    <li>{title || name}</li>
                    <li>{original_title || original_name}</li>
                    <li><img src={language[original_language]} alt="" /></li>
                    <li>{vote_count}</li>
                </ol>
            </div>
        </div>
    )
}