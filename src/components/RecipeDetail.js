import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import marked from "marked";

const RecipeDetail = ({ breakfast, salad, appetizer }) => {
  const { category, id } = useParams();

  const filterRecipe = (recipes) => {
    return recipes
      .filter((recipe) => recipe.sys.id == id)
      .map((recipe) => {
        return (
          <div key={recipe.sys.id} className="recipe-container">
            <img
              className="recipe-image"
              src={recipe.image.url}
              alt={recipe.name}
            />
            <div className="recipe-name">
              <h3>{recipe.name}</h3>
              <p>{recipe.description}</p>
            </div>

            <div className="recipe-content recipe-ingredients">
              <h3>Ingredients</h3>
              <p dangerouslySetInnerHTML={{ __html: marked(recipe.items) }}></p>
            </div>
            <div className="recipe-content recipe-direction">
              <h3>Directions</h3>
              <p
                dangerouslySetInnerHTML={{ __html: marked(recipe.direction) }}
              ></p>
            </div>
          </div>
        );
      });
  };

  return (
    <>
    
      {category == "breackfast" && filterRecipe(breakfast)}
      {category == "salad" && filterRecipe(salad)}
      {category == "appetizer" && filterRecipe(appetizer)}
    </>
  );
};

export default RecipeDetail;
