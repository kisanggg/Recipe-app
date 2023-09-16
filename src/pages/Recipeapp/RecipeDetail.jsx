import React, { useEffect } from "react";
import { getMealDetail } from "../../apis/recipe";
import { useNavigate, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { BackIcon } from "../../utils/iconUtils";
import './RecipeDetail.module.css'
export default function RecipeDetail(){
    const[recipeDetail,setRecipeDetail]=React.useState('')
    //recipe/:id
    const{idMeal}=useParams()
    const navigate=useNavigate()
    
        useEffect(()=>{
            getDetail()
        },[])
        const goBack=()=>{
            navigate(-1)
        }
        
        const getDetail=()=>{
            getMealDetail(idMeal).then((res)=>{
                setRecipeDetail(res)
            })
        }

    return(
        <div className="mealWrapper">
            <div className="icon-wrapper" onClick={goBack}>
            {BackIcon()}
            </div>
            <div>
                <h1>Item</h1>
            {recipeDetail?.strMeal}
            </div>
            <br/>
            {recipeDetail?.strYoutube ?(
                <ReactPlayer url={recipeDetail?.strYoutube} width="100%"/>
            ):(
                <img src={recipeDetail?.strMealThumb} alt={''}/>
            )}
            <br/>
            <div>
                <h2>Instructions</h2>
            {recipeDetail?.strInstructions}
            </div>
            <br/>
            <div className="ingredientWrapper">
                <h2>Ingredients</h2>
                    <h5>{recipeDetail.strIngredient1}:{recipeDetail.strMeasure1}</h5>
                    <h5>{recipeDetail.strIngredient2}:{recipeDetail.strMeasure2}</h5>
                    <h5>{recipeDetail.strIngredient3}:{recipeDetail.strMeasure3}</h5>
                    <h5>{recipeDetail.strIngredient4}:{recipeDetail.strMeasure4}</h5>
                    <h5>{recipeDetail.strIngredient5}:{recipeDetail.strMeasure5}</h5>
                    <h5>{recipeDetail.strIngredient6}:{recipeDetail.strMeasure6}</h5>
                    <h5>{recipeDetail.strIngredient7}:{recipeDetail.strMeasure7}</h5>
                    <h5>{recipeDetail.strIngredient8}:{recipeDetail.strMeasure8}</h5>
                    
                </div>
            </div>
            
        
    )
}