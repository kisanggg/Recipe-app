import React from "react";
import styles from './RecipeCards.module.css';
function RecipeCard(props){
    return(
        <div className={styles.recipeCardWrapper}>
        <img alt="" src={props?.recipe?.strMealThumb}></img>
           <div className={styles.contentWrapper}>
           <span className={styles.cardTitle}>{props?.recipe?.strMeal}</span>
        
          
          </div>              
            
          </div>
    )
}
export default RecipeCard

