import React from "react";
import styles from './Home.module.css';
import RecipeCard from '../../component/cards/RecipeCard';
function Home(){
    return(
        <div className={styles.homeWrapper}>
            <RecipeCard/>
            </div>
    )
}

export default Home