function UserCard(props) {
    let stars = props.stars

    return (
        <section className="userCard-container">

            <h3>Nombre: {props.name}</h3> <span>Edad: {props.age}</span>
            <p>Comentario: {props.feedback}</p>
            <img src="/images/star.png" alt="imagen de estrella" /> = {stars}

        </section>
    )

}
export default UserCard