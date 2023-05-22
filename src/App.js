import React from "react";
import './App.css';
import { useState, useEffect } from "react";
import searchIcon from './Search.svg';
import MovieCard from './MovieCard';
const API_URL = 'https://www.omdbapi.com?apikey=704ff8af';

const movie1 = {
    "Title": "The Amazing Spiderman 2 Webb Cut",
    "Year": "2021",
    "imdbID": "tt18351128",
    "Type": "movie",
    "Poster": "N/A"
}

const App = () =>{

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const searchMovies = async(title) =>{
        const response= await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
        
    }


    useEffect(()=>{
        searchMovies('Spiderman')
    },[])

    return(
        <div className = 'app'>
            <h1>MovieLand</h1>


            <div className = 'search'>
                <input placeholder="Search For Movies" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
                <img src= {searchIcon} alt = 'search'  onClick={()=>searchMovies(searchTerm)} />
            </div>

            {
                movies?.length >0
                    ? (
                    <div className="container">
                        {movies.map((movie)=>(
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                    ):(
                    
                        <div classname = 'empty'>
                            <h2>No Movies Found</h2>
                        </div>
                    )
            }
        </div>
    );

}

export default App;