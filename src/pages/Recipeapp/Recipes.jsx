import React, { useEffect } from 'react'
import {
  getAllRecipeCategories,
  getAllRecipesByCategory,
  getMealBySearchTerm
} from '../../apis/recipe'
import RecipeCard from '../../component/cards/RecipeCard'
import styles from './Recipe.module.css';
import { Link } from 'react-router-dom';
import SearchField from '../../component/common/SearchField';
import { initializerFirebase } from '../../utils/firebaseUtils';

export default function Recipes() {
  const [categories, setCategories] = React.useState([])
  const [selectedCategory, setSelectedCategory] = React.useState('Dessert')
  const [meals, setMeals] = React.useState([])
  
  useEffect(() => {
    getRecipeCategories()
  },[])    
  useEffect(()=>{
    getMealsByCategory()
  }, [selectedCategory])

  const getRecipeCategories = () => {
    getAllRecipeCategories().then((res) => {
      setCategories(res)
    })
  }
  const getMealsByCategory = () => {
    getAllRecipesByCategory(selectedCategory).then((res) => {
      setMeals(res)
    })
  }
  const filterByName=(name)=>{
    getMealBySearchTerm(name).then((res)=>{
      setMeals(res)
    })
  }
  return (
    <>
    <SearchField
    onSearchInitiate={(searchTerm)=>{
      console.log(searchTerm)
      filterByName(searchTerm)
    }}
      />
      <div className={styles.categoriesWrapper}>
        {categories?.length > 0 &&
          categories?.map((category) => (
            <div 
            onClick={() => {
              setSelectedCategory(category.strCategory)
            }}
            style={{
              background:
                selectedCategory === category.strCategory ? "pink" : "lightgrey",
            }}
            className={styles.categoryItem} key={category.idCategory}>
            {category?.strCategory}
          
            </div>
            
            
          ))}
      </div>
      <div className={styles.recipeCardsWrapper}>
        {meals?.map((recipe) => (
          <Link
          to={`/recipe/${recipe.idMeal}`}
          className={styles.recipeCardWrapper}
          key={recipe.idMeal}
          >
            <RecipeCard recipe={recipe} />
            </Link>
        ))}
        
      </div>
    </>
  )
}