function CoffeeCard(props) {
    return ( 
        <article>
            <img src={props.coffee.image} width="200px" height="200px"/>
            <section>
                <h3>{props.coffee.title}</h3>
                <h4>{props.coffee.price} :-</h4>
                <h4>{props.coffee.desc}</h4>
                <p>{props.coffee.ingredients}</p>
            </section>
            <section>
                <button>
                    ORDER
                </button>
            </section>
        </article>
     );
}

export default CoffeeCard;