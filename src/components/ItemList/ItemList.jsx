import Card from "../Card/Card"
export default function Itemlist({ title, search }) {
    console.log(search)
    console.log(title)
    return (
        <section>
            <div className="container">
                <div className="row">
                    <h2>{search.length > 0 && title}</h2>
                    {search.map(item => <Card key={item.id} search={item} />)}
                </div>
            </div>
        </section>
    )
}