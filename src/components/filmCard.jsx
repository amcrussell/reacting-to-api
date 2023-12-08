

const FilmCard = props => {

    return (
        <div className="col-2" >
            <div className="card">
                <div className="card-body bg-light hover ">
                    <h1 className="card-title ">{props.title}</h1>
                    <img className="card-img" src={props.img}></img>
                    <p className="opacity-50">{props.release}</p>
                    <p className="card-body desc" >{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default FilmCard;