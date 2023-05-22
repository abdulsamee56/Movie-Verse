import React from "react";
import './App.css';
import { useEffect } from "react";
import searchIcon from './Search.svg';
const API_URL = 'https://www.omdbapi.com?apikey=704ff8af';

const movie1 = {
    "Title": "The Amazing Spiderman 2 Webb Cut",
    "Year": "2021",
    "imdbID": "tt18351128",
    "Type": "movie",
    "Poster": "N/A"
}

const App = () =>{

    const searchMovies = async(title) =>{
        const response= await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
        
    }


    useEffect(()=>{
        searchMovies('Spiderman')
    },[])

    return(
        <div className = 'app'>
            <h1>MovieLand</h1>


            <div className = 'search'>
                <input placeholder="Search For Movies" value='Superman' onChange={()=>{}}/>
                <img src= {searchIcon} alt = 'search'  onClick={()=>{}} />
            </div>

            <div className="container">
                <div className = "movie">
                    <div>
                    <p>{movie1.Year}</p>
                </div>

                <div>
                    <img src={movie1.Poster !== 'N/A'?  movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title} />
                </div>

                <div>
                    <span>{movie1.Type}</span>
                    <h3>{movie1.Title}</h3>
                </div>

                </div>
            </div>
        </div>
    );

}

export default App;