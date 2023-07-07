import './App.css';
import HomePage from "./pages/HomePage/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useDispatch} from "react-redux";
import React, {useEffect} from "react";
import MealPage from "./pages/MealPage/index";
import SearchPage from "./pages/SearchPage/SearchPage";
import Header from "./components/Header/Header";
import SearchByFirstLetter from "./pages/SearchPage/SearchByFirstLetter";
import IngredientPage from "./pages/IngredientPage/IngredientPage";
import {getIngredients, getLatestMeals, getMeals} from "./redux/action/mealAction";
import Footer from "./components/Footer/Footer";

function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        console.log('123')
        dispatch(getMeals())
        dispatch(getIngredients())
        dispatch(getLatestMeals())
    }, [])


  return (
    <div className="App">
     <BrowserRouter>
         <Header/>
         <Routes>
             <Route path={'/'} element={<HomePage/>}/>
             <Route path={'/meals/:strMeal'} element={<MealPage/>}/>
             <Route path={'/search/:name'} element={<SearchPage/>}/>
             <Route path={'/firstLetter/:letter'} element={<SearchByFirstLetter/>}/>
             <Route path={'/ingredient/:name'} element={<IngredientPage/>}/>
         </Routes>
         <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
