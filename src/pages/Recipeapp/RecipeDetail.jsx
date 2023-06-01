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
                <div className="display-grid gap-2">
                    <h4>Ingredient</h4>
                    {Array.from({length:20}).map((item,index)=>(
                      <>
                      {recipeDetail?.[`strIngredient${index+1}`]?(
                        <span>{recipeDetail?.[`strIngredient${index+1}`]}</span>
                      ):(
                        ''
                      )}
                      </>  
                    ))}
                </div>
                <div className="display-grod gap-2">
                    <h5>Quantity</h5>
                    {Array.from({length:20}).map((item,index)=>(
                        <>
                        {recipeDetail?.[`strMeasure${index+1}`]?(
                            <span>{recipeDetail?.[`strMeasure${index+1}`]}</span>
                        ):(
                            ''
                        )}
                        </>
                    ))}
                </div>
            </div>
            
        </div>
    )
}