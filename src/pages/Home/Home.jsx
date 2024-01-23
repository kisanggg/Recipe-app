import React from "react";
import styles from './Home.module.css';
import RecipeCard from '../../component/cards/RecipeCard';
function Home(){
    return(
        <div className={styles.homeWrapper}>
           
            <img alt="" src="https://images.inc.com/uploaded_files/image/1920x1080/breakfast-fruit-granola-1940x900_35093.jpg"></img>
                
                <h1> <i>
                    <br/>
                    <br/>
                    "Welcome to our mouth-
                    <br/>watering 
                    culinary <br/>journey,
                    where we <br/>transform 
                    ingredients 
                    <br/>into unforgettable flavors."
                    </i> </h1>
            
            </div>
            
    )
}

export default Home