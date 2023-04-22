import React, { useEffect, useState } from 'react';
import "./App.css";
import MovieCard from './movieCard';
import searchIcon from './search.svg'
//15dfd04c

const API_URL = 'http://www.omdbapi.com?apikey=15dfd04c';
// const movie1 = {
//     "Title": "Spiderman",
//     "Year": "1990",
//     "imdbID": "tt0100669",
//     "Type": "movie",
//     "Poster": "N/A"
// }

const App = () => {
    const [movies, setMovies] = useState([])
    const[search ,setSearch] = useState('')

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search)
        console.log(data.Search)
    }
    useEffect(() => {
        searchMovies('batman');
    }, []);
    return (
        <div className="app">
            <h1>Movies Empire</h1>
            <h2 style={{ color :'#f9d3b4'}}>~ Developed by Farhan </h2>
            <div className="search">
                <input type="search" placeholder='Search for movies' value={search} onChange={(e) => setSearch(e.target.value)} />
                <img src={searchIcon} alt="search" onClick={() => searchMovies(search)} />
            </div>
            {
                movies?.length > 0
                    ? (
                        <div className="container">
                            {  movies.map((movie,i) => (
                              

                                <MovieCard  key={i} movie={movie} />
                            
                            ))} 

                        </div>
                    ) :
                    (
                        <div className="empty">
                            <h2>No Movies Found</h2>
                        </div>
                    )
            }

        </div>
    );
}

export default App;
