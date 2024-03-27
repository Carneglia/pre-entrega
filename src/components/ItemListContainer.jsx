import UserCard from "./UserCard";

function ItemListContainer() {
    return (
        <main>
            <section>
                <article>
                    <video autoPlay muted loop src="/videos/video-banner.mp4"></video>
                    <div className="info-container">
                        <h3>Experimentá todo tu potencial</h3>
                        <button>Descubrir</button>
                    </div>
                </article>
            </section>
            <UserCard name ="Carlos" age={31} stars={5} feedback="Amazing!! Maju is really patience and kind, I'm in!!"/>
            <UserCard name ="Pablo" age={35} />

        </main>
    )
}
export default ItemListContainer;