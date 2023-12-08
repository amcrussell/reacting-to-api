

const CharCard = props => {


    return (
        <div className="col-2" >
            <div className="card">
                <a href={props.charLink} target="_blank" className="hidden">
                    <div className="card-body bg-light hover ">
                        <h1>{props.name}</h1>
                        <p>age: {props.age}</p>
                        <p>gender: {props.gender}</p>

                    </div>
                </a>
            </div>
        </div>
    )

}

export default CharCard;