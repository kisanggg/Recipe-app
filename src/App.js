import React from "react";
import {Route,Routes} from 'react-router-dom'
import Home from "./pages/Home/Home";
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Recipe from "./pages/Recipeapp/Recipes";
import RecipeCard from "./component/cards/RecipeCard"
import Login  from "./pages/login/Login";
import RecipeDetail from "./pages/Recipeapp/RecipeDetail";
import { useEffect } from "react";
import {initializeFirebase } from "./utils/firebaseUtils";
import { getUser } from "./utils/firebaseUtils";
//import ImageGallery from "./gallery/ImageGallery/ImageGallery";
export const UserContext=React.createContext({});

function App(){
  useEffect(()=>{
    initializeFirebase()
  })
  const user=getUser();
  return (
    <UserContext.Provider value={user}>
    <div>
      <Header />
      <div style={{ padding: 10 }}>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/recipes'} element={<Recipe/>} />
          <Route path={'/recipe/:idMeal'} element={<RecipeDetail/>}/>
          <Route path={'/login'} element={<Login/>}/>
        </Routes>
        
      </div>
      <Footer/>
    </div>
    </UserContext.Provider>
  )
}

export default App