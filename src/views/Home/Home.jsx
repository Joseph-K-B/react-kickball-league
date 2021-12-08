import NewsFeed from "../../components/NewsFeed"
import kickball from "../../kickball.png"
import "../Home/Home.css"


function Home() {
    return (
        <>
        <section className="homeSection">
            <section>
                <img src={kickball} alt="kickball"></img>
            </section>
            <h1>Home Page</h1>
            <section className="newsSection">
            <NewsFeed />
            </section>
        </section>
        </>
    )
}

export default Home