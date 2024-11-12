import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import './App.css';

function App() {
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState('');

    const fetchRecipes = async () => {
        const APP_ID = process.env.REACT_APP_EDAMAM_APP_ID;
        const APP_KEY = process.env.REACT_APP_EDAMAM_APP_KEY;
        
        try {
            const response = await axios.get(
                `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=10`
            );
            setRecipes(response.data.hits);
        } catch (error) {
            console.error("Error fetching recipes", error);
        }
    };

    return (
        <div className="App">
            <h1>Recipe Finder</h1>
            <SearchBar setQuery={setQuery} fetchRecipes={fetchRecipes} />
            <RecipeList recipes={recipes} />
        </div>
    );
}

export default App;
