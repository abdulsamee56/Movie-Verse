import React from "react";
import './App.css';
import { useEffect } from "react";
import searchIcon from './Search.svg';
const API_URL = 'https://www.omdbapi.com?apikey=704ff8af';


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

        </div>
    );

}

export default App;