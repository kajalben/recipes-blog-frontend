import React from "react";
import RecipeDisplay from "./RecipeDisplay";
import { useHistory, useParams } from "react-router-dom";

export default function Category({ breakfast, salad, appetizer }) {
  const { category, id  } = useParams();
  const history = useHistory();
  return (
    <div className="category-container">
      <div className="category-content">
        <h3>Breackfast Recipes</h3>
        <RecipeDisplay recipes={breakfast} />
      </div>
      <div className="category-content">
        <h3>Salad Recipes</h3>
        <RecipeDisplay recipes={salad} />
      </div>
      <div className="category-content">
        <h3>Appetizer Recipes</h3>
        <RecipeDisplay recipes={appetizer} />
      </div>
    </div>
  );
}
