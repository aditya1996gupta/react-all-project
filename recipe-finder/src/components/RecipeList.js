import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes }) => {
    return (
        <div className="recipe-list">
            {recipes.map((recipeObj, index) => (
                <RecipeCard key={index} recipe={recipeObj.recipe} />
            ))}
        </div>
    );
};

export default RecipeList;
