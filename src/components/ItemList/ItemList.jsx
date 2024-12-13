import Card from "../Card/Card"
export default function Itemlist({ title, search }) {
    console.log(search)
    console.log(title)
    return (
        <section>
            <div className="container">
                <h2>{search.length > 0 && title}</h2>
                <div className="row">
                    {search.map(item =>
                        <div className="col" key={item.id}>
                            <Card search={item} />
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}