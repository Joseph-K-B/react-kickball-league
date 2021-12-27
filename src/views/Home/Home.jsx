import NewsFeed from "../../components/NewsFeed"
import kickball from "../../kickball.png"
import "../Home/Home.css"


function Home() {
    return (
        <>
        <h1 className='listTitle'>Welcome Home</h1>
        <section className='homeSection'>
        <section className="newsSection">
            <img src={kickball} alt="kickball"></img>
            <NewsFeed />
        </section>
        <section>
            <p>something important here</p>
        </section>
        </section>
        </>
    )
}

export default Home