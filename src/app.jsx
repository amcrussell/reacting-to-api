import { useEffect, useState } from "react";
import FilmCard from "./components/filmCard";
import CharCard from "./components/charCard";



const App = () => {

    const [movies, setMovies] = useState([]);
    const [characters, setCharacters] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [page, setPage] = useState('');

    useEffect(() => {
        (async () => {
            const res = await fetch('http://api-ghibli.herokuapp.com/films');
            const allFilms = await res.json();
            setMovies(allFilms);
        })();
        (async () => {
            const res = await fetch('http://api-ghibli.herokuapp.com/people');
            const allChars = await res.json();
            setCharacters(allChars);
        })();
    }, [setLoaded])

    if (!loaded) {
        return (
            <>
                <button className="btn btn-danger " onClick={() => {setPage('movie'); setLoaded(true)}}>Click to load movies</button>
                <button className="btn btn-success" onClick={() => {setPage('character'); setLoaded(true)}}>Click to load Characters</button>
            </>
        )
    }
    if (page === 'movie')
        return (
            <div className="row">
                {movies.map(e => (
                    <FilmCard key={e.id} title={e.title} description={e.description} img={e.image} release={e.release_date} />
                ))}
            </div>
        );
    else
        return (
            <div className="row">
                {characters.map(e => (
                    <CharCard key={e.id} charLink={e.url} name={e.name} age={e.age} gender={e.gender}  />
                ))}
            </div>
            )


};

export default App;